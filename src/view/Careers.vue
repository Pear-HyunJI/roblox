<template>
  <div>
    <recruit-info />
    <marquee-slide />
    <about-us />
    <story />
  </div>
</template>

<script>
import RecruitInfo from "@/components/careers/RecruitInfo.vue";
import MarqueeSlide from "@/components/careers/MarqueeSlide.vue";
import AboutUs from "@/components/careers/AboutUs.vue";
import Story from "@/components/careers/Story.vue";
export default {
  name: "Career",
  components: {
    RecruitInfo,
    MarqueeSlide,
    AboutUs,
    Story,
  },
};

AboutUs;
</script>

<style lang="scss" scoped></style>
