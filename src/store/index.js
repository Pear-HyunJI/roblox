import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    current: 1,
  },
  mutations: {
    on__UpdateCurrent(state, payload) {
      state.current = payload;
    },
  },
  getters: {
    fnGetCurrent(state) {
      return state.current;
    },
  },
});
