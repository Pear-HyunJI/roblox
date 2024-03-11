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
export default {
  name: "News",
  data() {
    return {
      newsData: [],
      totalItems: 2,
      currentPage: 1,
      itemPerPage: 10,
      headerNews: [],
      pageNews: [],
    };
  },
  components: {
    NewsMain,
    Pagination,
  },
  async created() {
    try {
      let response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=bc66937ca43749cebbeddf8b4ce04df2"
      );
      let result = await response.json();
      this.newsData = result.articles;
      this.totalItems = this.newsData.length;
      for (let i = 0; i < Math.ceil(this.totalItems / this.itemPerPage); i++) {
        this.pageNews.push(this.newsData.splice(0, 10));
        this.headerNews = this.pageNews[i].splice(0, 1);
      }
      console.log(this.totalItems);
      console.log(this.pageNews);
      console.log(this.headerNews);
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style lang="scss" scoped></style>
