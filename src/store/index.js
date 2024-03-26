import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import modTechTalks from "@/store/techtalks";
import modNews from "@/store/news";
import modDark from "@/store/dark";
import modAccount from "@/store/account";

Vue.use(Vuex);

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    modTechTalks,
    modNews,
    modDark,
    modAccount,
  },
  plugins: [new VuexPersistence({ storage: window.localStorage }).plugin],
});
