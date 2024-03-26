export default {
  state: {
    dark: false,
  },
  mutations: {
    on__ChangeDark(state) {
      state.dark = !state.dark;
    },
  },
  getters: {
    fnGetDark(state) {
      return state.dark;
    },
  },
};
