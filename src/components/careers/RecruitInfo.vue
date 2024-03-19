<template>
  <div class="recruit__wrap" :class="{ dark: changeDarkMode }">
    <h2>사람들이 함께 모이는 방식을 재구성해보세요</h2>
    <p>
      Roblox 직원들은 매일 복잡한 질문에 답하고 놀라운 혁신을 주도하고
      있습니다.s
    </p>
    <p>인간관계와 소통의 미래를 건설하는 데 동참해 주세요.</p>
    <a href="https://careers.roblox.com/jobs" target="_blank">채용정보 보기</a>
  </div>
</template>

<script>
export default {
  name: "RecruitInfo",
  computed: {
    changeDarkMode() {
      return this.$store.getters.fnGetDark;
    },
  },
};
</script>

<style lang="scss" scoped>
.recruit__wrap {
  max-width: 1200px;
  margin: 0 auto;
  color: #dee2de;
  text-align: center;
  &.dark {
    color: #121110;
  }

  h2 {
    font-size: 54px;
    font-weight: 500;
    padding-bottom: 50px;
    &:before {
      content: "CAREERS";
      display: block;
      font-size: 20px;
      width: 100px;
      margin: 30px auto;
      font-weight: 600;
    }
  }
  p {
    font-size: 18px;
  }
  a {
    margin-top: 80px;
    font-size: 16px;
    width: 180px;
    height: 50px;
    line-height: 45px;
    color: #dee2e6;
    background: #6347ff;
    border: 2px solid #6347ff;
    border-radius: 8px;
    text-transform: uppercase;
    transition: all 250ms linear;
    &:hover {
      border-color: rgba(99, 71, 255, 0.25);
      box-shadow: 0 0 1rem rgba(99, 71, 255, 0.25);
      background: conic-gradient(
        from 95.27deg at 51.3% 51.96%,
        #150d44 -0.95deg,
        #121110 62.41deg,
        #0f0c1c 134.15deg,
        #0a042e 181.84deg,
        #0f0d1a 237.07deg,
        #121110 317.05deg,
        #150d44 359.05deg,
        #121110 422.41deg
      );
    }
  }
}
</style>
