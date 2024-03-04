<template>
  <div>
    <TileView></TileView>
    <sticky-info />
  </div>
</template>

<script>
import TileView from "../components/section/TileView.vue";
import StickyInfo from "../components/section/StickyInfo.vue";
export default {
  name: "Home",
  components: {
    TileView,
    StickyInfo,
  },
};
</script>

<style lang="scss" scoped></style>
