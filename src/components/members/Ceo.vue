<template>
  <section id="ceo" class="row">
    <div class="ceo__wrap">
      <div class="textBox" :class="{ dark: changeDarkMode }">
        <span>{{ $t("[5].ceo.span") }}</span>
        <h3>{{ $t("[5].ceo.h3") }} <br />{{ $t("[5].ceo.h4") }}</h3>
        <p>
          {{ $t("[5].ceo.p") }}
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
