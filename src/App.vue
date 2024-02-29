<template>
  <div>
    <Header></Header>
    <router-view></router-view>
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

<style lang="scss" scoped></style>
