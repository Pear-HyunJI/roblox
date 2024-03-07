<template>
  <div>
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
};
</script>

<style lang="scss" scoped></style>
