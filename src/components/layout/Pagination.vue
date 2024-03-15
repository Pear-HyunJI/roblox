<template>
  <div class="pagination">
    <button class="goend" :disabled="currentPage === 1" @click="prevPage">
      이전
    </button>
    <span v-for="(page, idx) in displayedPages" :key="idx">
      <button :class="{ active: currentPage === page }" @click="goToPage(page)">
        {{ page }}
      </button>
    </span>
    <button
      class="goend"
      :disabled="currentPage === pageCount"
      @click="nextPage"
    >
      다음
    </button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    itemPerPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pageCount() {
      console.log(Math.ceil(this.totalItems / this.itemPerPage));
      return Math.ceil(this.totalItems / this.itemPerPage);
    },
    displayedPages() {
      const pages = [];
      const startPage = Math.max(1, this.currentPage - 5);
      const endPage = Math.min(this.pageCount, startPage + 10);
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  methods: {
    goToPage(page) {
      this.$emit("update:currentPage", page);
      this.$emit("onClick", page);
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 부드러운 스크롤 적용
      });
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.$emit("update:currentPage", --this.currentPage);
      }
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 부드러운 스크롤 적용
      });
    },
    nextPage() {
      if (this.currentPage < this.pageCount) {
        this.$emit("update:currentPage", ++this.currentPage);
      }
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 부드러운 스크롤 적용
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  .goend {
    background: #000;
    color: #fff;
    padding: 6px 10px;
    border-radius: 2px;
    margin: 0 5px;
    &:disabled {
      background: #999;
      cursor: default;
    }
  }
  span {
    button {
      width: 30px;
      height: 30px;
      background: #ddd;
      margin: 0 5px;
      border-radius: 2px;
      &.active {
        background: #f00;
        color: #fff;
      }
    }
  }
}
</style>
