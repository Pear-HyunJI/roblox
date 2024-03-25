<template>
  <div class="educational__exp" :class="{ dark: changeDarkMode }">
    <div class="row">
      <div class="exp__title">
        <h3>{{ $t("[1].educationalexp.h3") }}</h3>
        <a
          :class="{ dark: changeDarkMode }"
          href="https://www.roblox.com/discover#/sortName/Curated_67"
          target="_blank"
        >
          <span>{{ $t("[1].educationalexp.span") }}</span>
          <i class="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>
      <div class="card__wrapper">
        <div
          class="card"
          :class="{ dark: changeDarkMode }"
          v-for="(item, idx) in data"
          :key="idx"
        >
          <div class="img">
            <img :src="item.imgUrl" alt="image" />
          </div>
          <p class="img__source">
            {{ $t("[1].educationalexp.p") }}: {{ $t(item.imgSource) }}
          </p>
          <div class="text">
            <h4>{{ $t(item.text1) }}</h4>
            <p>{{ $t(item.text2) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationalExp",
  data() {
    return {
      data: [
        {
          imgUrl: "src/assets/images/education-exp/Edu_Hub_Home_Desktop_05.jpg",
          imgSource: "[1].educationalexp.first-imgsource",
          text1: "[1].educationalexp.first-text1",
          text2: "[1].educationalexp.first-text2",
        },
        {
          imgUrl: "src/assets/images/education-exp/Edu_Hub_Home_Desktop_06.jpg",
          imgSource: "[1].educationalexp.second-imgsource",
          text1: "[1].educationalexp.second-text1",
          text2: "[1].educationalexp.second-text2",
        },
        {
          imgUrl: "src/assets/images/education-exp/Edu_Hub_Home_Desktop_07.jpg",
          imgSource: "[1].educationalexp.third-imgsource",
          text1: "[1].educationalexp.third-text1",
          text2: "[1].educationalexp.third-text2",
        },
      ],
    };
  },
  computed: {
    changeDarkMode() {
      return this.$store.getters.fnGetDark;
    },
  },
};
</script>

<style lang="scss" scoped>
.educational__exp {
  color: #dee2e6;
  &.dark {
    color: #121110;
  }
  .row {
    .exp__title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 70px;
      h3 {
        font-size: 2rem;
      }
      a {
        border: 2px solid #dee2e6;
        border-radius: 8px;
        padding: 13px 20px;
        transition: all 0.3s;
        &.dark {
          border-color: #121110;
        }
        span {
          margin-right: 15px;
        }
        &:hover {
          transform: translateY(-3px);
        }
      }
      @media screen and (max-width: 390px) {
        display: block;
        padding-left: 20px;
        margin-bottom: 60px;
        h3 {
          padding-bottom: 30px;
        }
      }
    }
    .card__wrapper {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .card {
        flex: 0 0 30%;
        margin: 0 20px;
        background: #000;
        &.dark {
          background: #bdbdbd;
        }
        .img {
          margin-bottom: 1.5em;
        }
        .img__source {
          font-size: 8.42px;
          margin-bottom: 1.5em;
          padding: 0 20px;
        }
        .text {
          h4 {
            padding: 0 20px;
            margin-bottom: 1.5em;
          }
          p {
            padding: 0 20px 32px;
          }
        }
      }
      @media screen and (max-width: 390px) {
        display: block;
        .card {
          margin: 0 30px 30px;
        }
      }
    }
  }
}
</style>
