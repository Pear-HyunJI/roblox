<template>
  <div class="qna__list">
    <board-list :qnaData="qnaData" :currentPage="currentPage" />
    <pagination
      :totalItems="this.$store.getters.fnGetBoardList.length"
      :currentPage.sync="currentPage"
      :itemPerPage="itemPerPage"
    />
  </div>
</template>

<script>
import BoardList from "@/components/board/BoardList.vue";
import Pagination from "@/components/layout/Pagination.vue";
export default {
  data() {
    return {
      totalItems: [],
      currentPage: 1,
      itemPerPage: 10,
      qnaData: [],
    };
  },
  components: { BoardList, Pagination },
  created() {
    this.totalItems = JSON.parse(
      JSON.stringify(this.$store.getters.fnGetBoardList)
    );
    for (
      let i = 0;
      i <
      Math.ceil(this.$store.getters.fnGetBoardList.length / this.itemPerPage);
      i++
    ) {
      this.qnaData.push(this.totalItems.splice(0, 10));
    }
    console.log(this.qnaData);
    console.log(this.$store.getters.fnGetBoardList);
  },
};
</script>

<style lang="scss" scoped>
.qna__list {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
