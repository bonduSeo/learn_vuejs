<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput @childAddTodo="addTodo" @noInputValue="toggleModal"></TodoInput>
    <TodoList v-bind:propsItems="todoItems" @childRemoveTodo="removeTodo"></TodoList>
    <TodoFooter @clearTodo="clearTodo"></TodoFooter>
  </div>
  <AlertModal @close="toggleModal" :show="modalShow" header="알림창" body="내용을 입력해 주세요"></AlertModal>
</template>

<script>
import TodoHeader from "./components/todo/TodoHeader.vue";
import TodoInput from "./components/todo/TodoInput.vue";
import TodoList from "./components/todo/TodoList.vue";
import TodoFooter from "./components/todo/TodoFooter.vue";
import AlertModal from "./components/common/AlertModal.vue";
import axios from "axios";
import DateUtils from "./utils/DateUtils";

export default {
  name: "App",
  data() {
    return {
      todoItems: [],
      cnt: 0,
      modalShow: false,
    };
  },
  methods: {
    toggleModal() {
      this.modalShow = !this.modalShow;
    },
    addTodo(todoItem) {
      const param = {
        todo: todoItem,
      };
      axios.post("/todo/index", param).then((res) => {
        if (res.status === 200 && res.data) {
          const item = {
            itodo: res.data,
            todo: todoItem,
            created_at: DateUtils.getTimestamp(new Date()),
          };
          this.todoItems.push(item);
        }
      });
    },
    removeTodo(key) {
      this.todoItems.forEach((item, idx) => {
        if (item.itodo === key) {
          this.todoItems.splice(idx, 1);
          axios.delete(`/todo/index/${item.itodo}`).then((res) => {
            console.log(res);
          });
        }
      });
    },
    clearTodo() {
      axios.delete(`/todo/index`).then((res) => {
        if (res.status === 200 && res.data.result) {
          this.todoItems.splice(0);
        }
      });
    },
    // changeValue() {
    //   const json = JSON.stringify(this.todoItems);
    //   localStorage.setItem("todoItems", json);
    // },
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
    AlertModal,
  },

  created() {
    axios.get("/todo/index").then((res) => {
      // console.log(res);
      if (res.status === 200 && res.data.length > 0) {
        res.data.forEach((item) => {
          this.todoItems.push(item);
        });
      }
    });
  },
};
//created 부분은 처음실행시에 한번 실행되는부분.
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
