<template>
  <div id="education">
    <education-top />
    <with-us />
    <educational-exp />
    <community-fund />
    <education-news />
  </div>
</template>

<script>
import EducationTop from "@/components/education/EducationTop.vue";
import WithUs from "@/components/education/WithUs.vue";
import EducationalExp from "@/components/education/EducationalExp.vue";
import CommunityFund from "@/components/education/CommunityFund.vue";
import EducationNews from "@/components/education/EducationNews.vue";

export default {
  name: "Education",
  components: {
    EducationTop,
    WithUs,
    EducationalExp,
    CommunityFund,
    EducationNews,
  },
};
</script>

<style lang="scss" scoped></style>
