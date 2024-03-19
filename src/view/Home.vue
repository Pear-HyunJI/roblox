<template>
  <div class="home" :class="{ dark: changeDarkMode }">
    <tile-view />
    <video-1 />
    <sticky-info />
    <main-stats />
    <video-2 />
    <latest-news />
    <job-posting />
    <go-to-download />
  </div>
</template>

<script>
import TileView from "@/components/section/TileView.vue";
import StickyInfo from "@/components/section/StickyInfo.vue";
import Video1 from "@/components/section/Video1.vue";
import MainStats from "@/components/section/MainStats.vue";
import Video2 from "@/components/section/Video2.vue";
import JobPosting from "@/components/section/JobPosting.vue";
import GoToDownload from "@/components/section/GoToDownload.vue";
import LatestNews from "@/components/section/LatestNews.vue";
export default {
  name: "Home",
  components: {
    TileView,
    StickyInfo,
    Video1,
    MainStats,
    Video2,
    JobPosting,
    GoToDownload,
    LatestNews,
  },
  computed: {
    changeDarkMode() {
      return this.$store.getters.fnGetDark;
    },
  },
};
</script>

<style lang="scss" scoped>
.dark {
  background: radial-gradient(circle, #dfdfdf 1px, transparent 1px), white;
  background-position: 0 0, 25px 25px;
  background-size: 2rem 2rem;
}
</style>
