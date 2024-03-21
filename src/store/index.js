import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    current: 1,
    dark: false,
    locale: "ko",
  },
  mutations: {
    on__UpdateCurrent(state, payload) {
      state.current = payload;
    },
    on__ChangeDark(state) {
      state.dark = !state.dark;
    },
    on__Click(state, payload) {
      state.locale = payload;
    },
  },
  getters: {
    fnGetCurrent(state) {
      return state.current;
    },
    fnGetDark(state) {
      return state.dark;
    },
    fnGetLocale(state) {
      return state.locale;
    },
  },
});
