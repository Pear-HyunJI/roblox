<template>
  <div class="with__us" :class="{ dark: changeDarkMode }">
    <div class="row">
      <div class="card__wrapper" v-for="(item, idx) in data" :key="idx">
        <div class="img">
          <img :src="item.imgUrl" alt="image" />
          <p>{{ $t("[1].withus.p") }}</p>
        </div>
        <div class="text">
          <h4>{{ $t(item.text1) }}</h4>
          <p>{{ $t(item.text2) }}</p>
          <a :href="item.link" target="_blank">
            <span>{{ $t("[1].withus.span") }}</span>
            <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WithUs",
  data() {
    return {
      data: [
        {
          imgUrl:
            "./assets/images/education-with-us/Edu_Hub_Home_Desktop_02.jpg",
          text1: "[1].withus.first-text1",
          text2: "[1].withus.first-text2",
          link: "https://education.roblox.com/ko/%ED%8C%8C%ED%8A%B8%EB%84%88/",
        },
        {
          imgUrl:
            "./assets/images/education-with-us/Edu_Hub_Home_Mobile_03.jpg",
          text1: "[1].withus.second-text1",
          text2: "[1].withus.second-text2",
          link: "https://education.roblox.com/ko/%EA%B5%90%EC%9C%A1%EC%9E%90/",
        },
        {
          imgUrl:
            "./assets/images/education-with-us/Edu_Hub_Home_Desktop_04.jpg",
          text1: "[1].withus.third-text1",
          text2: "[1].withus.third-text2",
          link: "https://education.roblox.com/ko/%ED%95%99%EC%83%9D-%EB%B0%8F-%EA%B0%80%EC%A1%B1/",
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
.with__us {
  margin: 100px 0;
  color: #fff;
  &.dark {
    color: #121110;
  }
  .row {
    .card__wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 3em;
      .img {
        flex: 0 0 40%;
        padding: 0 45px;
        p {
          font-size: 9px;
          margin-top: 5px;
        }
      }
      .text {
        display: flex;
        width: 700px;
        flex-direction: column;
        justify-content: center;
        padding: 50px 50px 60px 100px;
        h4 {
          font-size: 22px;
          margin-bottom: 24px;
        }
        p {
          margin-bottom: 1.5em;
        }
        a {
          transition: all 0.3s;
          span {
            margin-right: 20px;
          }
          &:hover {
            transform: translateY(-3px);
          }
        }
      }
    }
    @media screen and (max-width: 390px) {
      .card__wrapper {
        display: block;
        .img {
          padding: 0 0;
        }
        .text {
          width: 390px;
          padding: 30px 30px 40px;
        }
      }
    }
  }
}
</style>
