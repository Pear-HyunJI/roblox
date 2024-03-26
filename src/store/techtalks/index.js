export default {
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
};
