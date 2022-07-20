<template>
  <div>
    <h1>boxOfficeByDay</h1>
    <div><MovieDetail :propsItem="selectedItem" /></div>
    <div>
      <input type="date" v-model="selectedDate" />
      <button id="searchBtn" @click="serch">검색</button>
    </div>
    <h1 v-bind:class="{ dNone: list != '' }">Loading...</h1>
    <rank-table :list="list" />
  </div>
</template>

<script>
import MovieDetail from "../components/MovieDetail.vue";
import RankTable from "../components/boxoffice/RankTable.vue";

export default {
  components: {
    MovieDetail,
    RankTable,
  },
  data() {
    return {
      selectedItem: [],
      selectedDate: "",
      list: [],
    };
  },
  methods: {
    serch() {
      const targetDt = this.selectedDate.replaceAll("-", "");
      console.log(targetDt);
      this.getData(targetDt);
    },
    async getData(targetDt) {
      const data = await this.getBoxOfficeByDay(targetDt);
      console.log(data);
      this.list = data.boxOfficeResult.dailyBoxOfficeList;
    },
  },
  created() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    this.selectedDate = this.getDateStr(d);
    // console.log(this.selectedDate);
    this.serch();
  },
};
</script>

<style scoped></style>
