<template>
  <section id="ceo" class="row">
    <div class="ceo__wrap">
      <div class="textBox" :class="{ dark: changeDarkMode }">
        <span>창업자 겸 최고 경영자</span>
        <h3>데이비드 바주키 <br />(DAVID BAZUCKI)</h3>
        <p>
          " 16년이라는 시간에 걸쳐 우리는 몰입형 공유 경험을 현실화해 냈습니다.
          Roblox인간 상호 작용의 다음 단계이자, 세상의 모든 이들이 참여할 수
          있는 새로운 경제입니다. "
        </p>
      </div>
      <div class="ceoImg">
        <img
          src="../../assets/images/members-1/ceo/Dave_TechTalks_Comp_cropped_Large.jpg"
          alt="CEO image"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Ceo",
  computed: {
    changeDarkMode() {
      return this.$store.getters.fnGetDark;
    },
  },
};
</script>

<style lang="scss" scoped>
.ceo__wrap {
  display: flex;
  .textBox {
    padding: 50px;
    flex: 50%;
    color: #dee2e6;
    word-break: keep-all;
    &.dark {
      color: #121110;
    }
    font-size: 20px;
    h3 {
      font-size: 50px;
      font-weight: 500;
      padding: 10px 0 42px 0;
    }
    p {
      font-size: 20px;
    }
  }
  .ceoImg {
    flex: 50%;
    position: relative;
    &::before {
      position: absolute;
      content: "";
      height: 15%;
      left: 0;
      right: 0;
      z-index: 10;
      top: -2px;
      background: linear-gradient(
        180deg,
        #121110 0%,
        #121110 5%,
        rgba(18, 17, 16, 0) 100%
      );
    }
    &::after {
      position: absolute;
      content: "";
      height: 15%;
      left: 0;
      right: 0;
      z-index: 99;
      bottom: -2px;
      background: linear-gradient(
        0deg,
        #121110 0%,
        #121110 5%,
        rgba(18, 17, 16, 0) 100%
      );
    }
  }
}
</style>
