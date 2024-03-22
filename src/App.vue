<template>
  <div :class="{ dark: changeDarkMode }">
    <Header @onClick="onClick" class="header" @openNav="openNav"></Header>

    <div id="app__contents" :class="{ on: boolData }">
      <router-view :locale="locale"></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      locale: "ko",
      boolData: "",
    };
  },
  computed: {
    changeDarkMode() {
      return this.$store.getters.fnGetDark;
    },
  },
  methods: {
    onClick(locale) {
      this.locale = locale;
    },
    openNav(bool) {
      this.boolData = bool;
    },
  },
};
</script>

<style lang="scss" scoped>
#app__contents {
  padding-top: 165px;
  &.on {
    opacity: 0.2;
  }
  @media screen and (max-width: 390px) {
    padding-top: 50px;
  }
}
.dark {
  background: radial-gradient(circle, #dfdfdf 1px, transparent 1px), white;
  background-position: 0 0, 25px 25px;
  background-size: 2rem 2rem;
}
</style>
