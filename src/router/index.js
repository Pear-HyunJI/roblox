import Vue from "vue";
import Router from "vue-router";
import Home from "../view/Home.vue";
import Careers from "../view/Careers.vue";
import Education from "../view/Education.vue";
import Memebers from "../view/Members.vue";
import News from "../view/News.vue";
import TechTalks from "../view/TechTalks.vue";
import JoinView from "../view/JoinView.vue";
import LoginView from "../view/LoginView.vue";
import QnAList from "../view/QnAList.vue";
import QnADetail from "../view/QnADetail.vue";
import QnAWrite from "../view/QnAWrite.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  // base: "/buildRoblox",
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/careers", name: "careers", component: Careers },
    { path: "/education", name: "education", component: Education },
    { path: "/members", name: "members", component: Memebers },
    { path: "/news", name: "news", component: News },
    { path: "/techtalks", name: "techtalks", component: TechTalks },
    { path: "/joinView", name: "joinView", component: JoinView },
    { path: "/loginView", name: "loginView", component: LoginView },
    { path: "/qna", name: "qna", component: QnAList },
    { path: "/qnadetail/:id", name: "qnadetail", component: QnADetail },
    { path: "/qnawrite", name: "qnawrite", component: QnAWrite },
  ],
  scrollBehavior() {
    return {
      y: 0,
    };
  },
});
