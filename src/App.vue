<template>
  <div>
    <Header></Header>
    <div id="app__contents">
      <router-view></router-view>
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
};
</script>

<style lang="scss" scoped>
#app__contents {
  margin-top: 150px;
}
</style>
