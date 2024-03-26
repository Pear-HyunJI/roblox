export default {
  state: {
    locale: "ko",
  },
  mutations: {
    on__Click(state, payload) {
      state.locale = payload;
    },
  },
  getters: {
    fnGetLocale(state) {
      return state.locale;
    },
  },
};
