<template>
  <section class="episode__search">
    <h2>에피소드</h2>
    <div class="tech__search">
      <input
        ref="inputRef"
        type="search"
        placeholder="검색어를 입력하세요."
        @keypress="onKeyPress"
      />
      <button type="button" @click="onClick">검색하기</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "EpisodeSearch",
  methods: {
    onKeyPress(event) {
      if (event.key === "Enter") {
        this.onSearch();
      }
    },
    onClick() {
      this.onSearch();
    },
    onSearch() {
      let value = this.$refs.inputRef.value;
      if (value) {
        this.$emit("onSearch", value);
        this.$refs.inputRef.value = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.episode__search {
  max-width: 1100px;
  margin: 0 auto;
}
h2 {
  color: #dee2e6;
  font-size: 40px;
  font-weight: 500;
}
.tech__search {
  text-align: center;
  margin-bottom: 70px;
  input {
    border: 1px solid #dee2e6;
    font-size: 16px;
    padding: 10px 30px;
    border-radius: 8px 8px 8px 0;
    max-width: 300px;
    margin-right: 10px;
  }
  button {
    color: #dee2e6;
    background: #6347ff;
    border-radius: 8px 8px 8px 0;
    padding: 10px 20px;
  }
}
</style>
