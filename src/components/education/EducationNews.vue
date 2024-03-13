<template>
  <div class="education__news">
    <div class="row">
      <div class="title">
        <h2>Roblox 에듀케이션 관련 뉴스</h2>
        <p>교육 이니셔티브에 대한 최신 뉴스를 읽어 보세요.</p>
      </div>
      <swiper class="card__wrapper" :options="swiperOption">
        <swiper-slide class="card" v-for="(item, idx) in data" :key="idx">
          <div class="card__left">
            <div class="text">
              <p>{{ item.text }}</p>
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
            "src/assets/images/education-news/Roblox_High_School-scaled.jpg",
          imgUrl2:
            "src/assets/images/education-news/Roblox_Logo_Gray_new_small.svg",
          text: "Roblox 커뮤니티 펀드 소개",
        },
        {
          imgUrl1:
            "src/assets/images/education-news/Community_Space-scaled.jpg",
          imgUrl2:
            "src/assets/images/education-news/Roblox_Logo_Gray_new_small.svg",
          text: "Roblox 교수 학습의 새로운 도약",
        },
        {
          imgUrl1: "src/assets/images/education-news/RobloxPitchArt1.jpg",
          imgUrl2: "src/assets/images/education-news/WSJ_Logo.svg",
          text: "Roblox, 학교에 교육용 비디오 게임 도입",
        },
        {
          imgUrl1: "src/assets/images/education-news/iStock-1312439265.jpg",
          imgUrl2: "src/assets/images/education-news/Education_week.svg",
          text: "STEM 관련 기관을 대상으로 한 수백만 달러의 새로운 자금으로...",
        },
      ],
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 30,
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
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.education__news {
  margin-top: 200px;
  color: #dee2e6;
  .row {
    .title {
      text-align: center;
      h2 {
        font-size: 55px;
        margin-bottom: 7px;
      }
      p {
        font-size: 14px;
      }
    }
    .card__wrapper {
      .card {
        .card__left {
          .text {
          }
        }
        .card__right {
          .img1 {
            position: relative;
            width: 100%;
            .img2 {
              position: absolute;
              width: 100%;
              top: 0;
              text-align: right;
              img {
                padding: 10px;
              }
            }
          }
        }
      }
    }
  }
}
img {
  background: #fff;
}
</style>
