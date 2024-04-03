export default {
  state: {
    oUser: [
      { email: "manager@gmail.com", name: "매니저", pw: "1234" },
      { email: "user1@gmail.com", name: "user1", pw: "5678" },
    ], // [ {email:'', name: '', pw:''} ]
    message: false,
    logined: null, // { email:"", name: '', pw:"" },
    prevPath: null,
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
      let name = state.oUser.filter((item) => item.email === email)[0].name;
      console.log(name);
      state.oUser.map((item) => {
        if (item.email == email && item.pw == pw) {
          state.logined = { email, name, pw };
        }
      });
    },
    savePrevPath(state, payload) {
      state.prevPath = payload;
    },
    fnLogout(state) {
      state.logined = null;
    },
  },
  getters: {
    fnGetOuser: (state) => state.oUser,
    fnGetMessage: (state) => state.message,
    fnGetLogined: (state) => state.logined,
    fnGetPrevPath: (state) => state.prevPath,
  },
};
