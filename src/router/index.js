import Vue from "vue";
import Router from "vue-router";
import Home from "../view/Home.vue";
import Careers from "../view/Careers.vue";
import Education from "../view/Education.vue";
import Memebers from "../view/Members.vue";
import News from "../view/News.vue";
import TechTalks from "../view/TechTalks.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/careers", name: "careers", component: Careers },
    { path: "/education", name: "education", component: Education },
    { path: "/members", name: "members", component: Memebers },
    { path: "/news", name: "news", component: News },
    { path: "/techtalks", name: "techtalks", component: TechTalks },
  ],
});
