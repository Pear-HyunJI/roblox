export default {
  state: {
    oUser: [], // [ {email:'', name: '', pw:''} ]
    message: false,
    logined: null, // { email:"", name: '', pw:"" }
  },
  mutations: {
    fnRegisterUser(state, payload) {
      let findEmail = false;
      let { email, name, pw } = payload;
      state.oUser.map((item) => {
        if (item.email == email) {
          findEmail = true;
        }
      });
      if (!findEmail) {
        state.oUser.push({ email, name, pw });
        console.log(state.oUser);
        state.message = true;
      } else {
        state.message = false;
      }
    },
    fnLogin(state, payload) {
      let { email, pw } = payload;
      state.oUser.map((item) => {
        if (item.email == email && item.pw == pw) {
          state.logined = { email, pw };
        }
      });
    },
    fnLogout(state) {
      state.logined = null;
    },
  },
  getters: {
    fnGetOuser: (state) => state.oUser,
    fnGetMessage: (state) => state.message,
    fnGetLogined: (state) => state.logined,
  },
};
