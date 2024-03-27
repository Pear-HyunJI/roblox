<template>
  <div class="education__news" :class="{ dark: changeDarkMode }">
    <div class="row">
      <div class="title">
        <h2>{{ $t("[1].educationnews.h2") }}</h2>
        <p>{{ $t("[1].educationnews.p") }}</p>
      </div>
      <swiper class="card__wrapper" :options="swiperOption">
        <swiper-slide
          class="card"
          :class="{ dark: changeDarkMode }"
          v-for="(item, idx) in data"
          :key="idx"
        >
          <div class="card__left">
            <div class="text">
              <a :href="item.link" target="_blank">{{ $t(item.text) }}</a>
            </div>
          </div>
          <div class="card__right">
            <div class="img1">
              <img :src="item.imgUrl1" alt="image" />
              <div class="img2">
                <img :src="item.imgUrl2" alt="image" />
              </div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "@/assets/css/myswiper.css";
export default {
  name: "EducationNews",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      data: [
        {
          imgUrl1:
            "./assets/images/education-news/Roblox_High_School-scaled.jpg",
          imgUrl2:
            "./assets/images/education-news/Roblox_Logo_Gray_new_small.svg",
          text: "[1].educationnews.text1",
          link: "https://blog.roblox.com/2021/11/introducing-roblox-community-fund/",
        },
        {
          imgUrl1: "./assets/images/education-news/Community_Space-scaled.jpg",
          imgUrl2:
            "./assets/images/education-news/Roblox_Logo_Gray_new_small.svg",
          text: "[1].educationnews.text2",
          link: "https://blog.roblox.com/2021/11/next-chapter-of-teaching-and-learning-on-roblox/",
        },
        {
          imgUrl1: "./assets/images/education-news/RobloxPitchArt1.jpg",
          imgUrl2: "./assets/images/education-news/WSJ_Logo.svg",
          text: "[1].educationnews.text3",
          link: "https://www.wsj.com/articles/roblox-looks-to-bring-educational-videogames-to-schools-11636988400",
        },
        {
          imgUrl1: "./assets/images/education-news/iStock-1312439265.jpg",
          imgUrl2: "./assets/images/education-news/Education_week.svg",
          text: "[1].educationnews.text4",
          link: "https://www.edweek.org/teaching-learning/teaching-in-the-metaverse-roblox-looks-to-make-it-a-reality/2021/11",
        },
      ],
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        slidesPerGroup: 1,
        speed: 800,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          391: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        },
      },
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
.education__news {
  margin-top: 200px;
  color: #dee2e6;
  &.dark {
    color: #121110;
  }
  .row {
    .title {
      text-align: center;
      margin-bottom: 60px;
      h2 {
        font-size: 55px;
        margin-bottom: 10px;
      }
      p {
        font-size: 14px;
      }
      @media screen and (max-width: 390px) {
        padding: 0 10px;
        h2 {
          font-size: 38px;
          margin-bottom: 7px;
        }
      }
    }
    .card__wrapper {
      .card {
        display: flex;
        flex-wrap: wrap;
        background: #000;
        height: 350px;
        &.dark {
          background: #bdbdbd;
        }
        .card__left {
          flex: 0 0 35%;
          display: flex;
          align-items: center;
          height: 100%;
          .text {
            text-align: center;
            font-size: 28px;
            padding: 0 5px;
            word-break: keep-all;
            a {
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
        .card__right {
          flex: 1 1 50%;
          height: 100%;
          .img1 {
            position: relative;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: right;
            img {
              height: 100%;
            }
            .img2 {
              position: absolute;
              width: 100%;
              top: 0;
              text-align: right;
              img {
                height: 100%;
                padding: 10px;
              }
            }
          }
        }
      }
      @media screen and (max-width: 390px) {
        .card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 550px;
        }
      }
    }
  }
  @media screen and (max-width: 390px) {
    margin-top: 100px;
  }
}
img {
  background: #fff;
}
</style>
