<template>
  <div class="education__top">
    <img :src="imgUrl" alt="topImage" />
    <div class="row">
      <div class="top__text">
        <p>{{ $t("[1].educationtop.p") }}</p>
        <span>{{ $t("[1].educationtop.span") }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationTop",
  data() {
    return {
      imgUrl:
        "./assets/images/education-top-image/Edu_Hub_Home_Desktop_01-scaled.jpg",
    };
  },
};
</script>

<style lang="scss" scoped>
.education__top {
  position: relative;
  width: calc(100vw - var(--scroll-bar-w));
  height: 500px;
  img {
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-color: #fafafa;
    background-size: cover;
  }
  .row {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 90px;
    color: #fff;
    display: flex;
    justify-content: center;
    .top__text {
      text-align: center;
      max-width: 700px;
      p {
        font-size: 55px;
        margin-bottom: 20px;
      }
      span {
        word-break: keep-all;
      }
    }
  }
  @media screen and (max-width: 390px) {
    img {
      object-fit: cover;
    }
    .row {
      padding: 0 40px;
      .top__text {
        p {
          font-size: 38px;
          word-break: keep-all;
        }
        span {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
