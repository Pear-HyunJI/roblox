<template>
  <div class="qna__list">
    <board-list />
  </div>
</template>

<script>
import BoardList from "@/components/board/BoardList.vue";
export default {
  components: { BoardList },
};
</script>

<style lang="scss" scoped>
.qna__list {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
