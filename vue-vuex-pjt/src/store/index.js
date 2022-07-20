import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      count: 0,
      cart: [
        {
          product_id: 1,
          product_name: '아이폰거치대',
          category: 'A'
        },
        {
          product_id: 2,
          product_name: '아이폰aa',
          category: 'B'
        }
      ],
    };
  },
  getters: {
    cartCount: (state) => {
      return state.cart.length;
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setCount(state, val) {
      state.count=val;
    }
  },
  actions: {},
  modules: {},
})
