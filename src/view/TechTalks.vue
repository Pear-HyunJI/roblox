<template>
  <div>
    <host />
    <episode-search @onSearch="onSearch" />
    <episode-tag />
    <episode-section :keyword="epKeyword" :media="epMedia" />
    <blog />
  </div>
</template>

<script>
import Host from "@/components/techtalks/Host.vue";
import Blog from "@/components/techtalks/blog.vue";
import EpisodeSearch from "@/components/techtalks/EpisodeSearch.vue";
import EpisodeTag from "@/components/techtalks/EpisodeTag.vue";
import EpisodeSection from "@/components/techtalks/EpisodeSection.vue";
export default {
  components: {
    Host,
    EpisodeSearch,
    EpisodeTag,
    EpisodeSection,
    Blog,
  },
  name: "TechTalks",
  data() {
    return {
      epKeyword: "",
      epMedia: "",
    };
  },
  methods: {
    onSearch(value) {
      this.epKeyword = value;
    },
  },
};
</script>

<style lang="scss" scoped></style>
