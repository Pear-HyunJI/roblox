<template>
  <div id="news">
    <news-main
      :newsData="newsData"
      :headerNews="headerNews"
      :pageNews="pageNews"
      :currentPage="currentPage"
    />
    <pagination
      :totalItems="totalItems"
      :currentPage.sync="currentPage"
      :itemPerPage="itemPerPage"
    />
  </div>
</template>

<script>
import NewsMain from "@/components/news/NewsMain.vue";
import Pagination from "@/components/layout/Pagination.vue";
import { onMounted, watchEffect } from "vue";
export default {
  name: "News",
  data() {
    return {
      newsData: [],
      totalItems: 1,
      currentPage: 1,
      itemPerPage: 10,
      headerNews: [],
      pageNews: [],
      // countryCode: "kr",
    };
  },
  components: {
    NewsMain,
    Pagination,
  },
  computed: {
    countryCode() {
      return this.$store.getters.fnGetLocale == "ko" ? "kr" : "us";
    },
  },

  watch: {
    countryCode: {
      async handler(value, oldValue) {
        try {
          let response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=${value}&pageSize=100&apiKey=bc66937ca43749cebbeddf8b4ce04df2`
          );
          let result = await response.json();
          this.newsData = result.articles;
          this.totalItems = result.totalResults;
          this.pageNews = [];
          this.headerNews = [];
          console.log(value, oldValue);
          for (
            let i = 0;
            i < Math.ceil(this.totalItems / this.itemPerPage);
            i++
          ) {
            this.pageNews.push(this.newsData.splice(0, 10));
            this.headerNews.push(this.pageNews[i].splice(0, 1));
          }
          console.log(this.pageNews);
        } catch (err) {
          console.log(err);
        }
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
