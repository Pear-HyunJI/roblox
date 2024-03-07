<template>
  <div class="latest__news">
    <div class="row">
      <div class="text__wrapper">
        <h2>Roblox 관련 최신 뉴스</h2>
        <router-link to="/news">전체 뉴스</router-link>
      </div>
      <swiper class="card__wrapper" :options="swiperOption">
        <swiper-slide class="card" v-for="(item, idx) in cardData" :key="idx">
          <div class="card__container">
            <img :src="item.img" :alt="item.title" />
            <h4>{{ item.title }}</h4>
            <p>{{ item.contents }}</p>
            <router-link to="/news">계속 읽기</router-link>
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
  name: "LatestNews",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      cardData: [
        {
          img: "src/assets/images/cardnews-1/self_expression_avatar.png",
          title: "사람들을 한자리에 모으는 새로운 방법",
          contents:
            "사람들이 서로 연결되어 소통하고, 자신을 원하는 방식으로 표현할 수 있도록 하려는 Roblox의 비전에 대해 자세히 알아보세요.",
        },
        {
          img: "src/assets/images/cardnews-1/avatar_tech.png",
          title: "Roblox 아바타 기술의 진화 양상",
          contents:
            "Roblox는 각 사용자가 아바타를 통해 자신의 모습을 표현함은 물론, 실시간으로 다른 사람에게 자신을 표현하는 방식까지 자신을 대표하는 아바타를 가질 수 있기를 원합니다. 다음에서 자세히 알아보세요.",
        },
        {
          img: "src/assets/images/cardnews-1/ai_creation.png",
          title: "생성형 AI를 통한 Roblox 작품 제작 혁신",
          contents:
            "업계 전반에 걸친 AI 툴의 발전에 따라 Roblox가 이룬 진전, 생성형 AI 제작 과정을 민주화하기 위해 앞으로 나아갈 길, 생성형 AI가 Roblox의 향후 방향성에 있어 중요한 요소가 되는 이유에 대해 알아보세요.",
        },
        {
          img: "src/assets/images/cardnews-1/rdc_2023.png",
          title: "RDC 2023: Roblox의 다음 행로",
          contents:
            "RDC에서는 매년 글로벌 커뮤니티의 가장 혁신적인 크리에이터들이 모여 서로 소통하며 최신 기능과 제품에 대한 정보를 교환합니다. 올해 회의에서 Roblox가 공유한 내용은 다음과 같습니다.",
        },
      ],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        slidesPerGroup: 1,
        centeredSlides: true,
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
// img {
//   width: 100px;
// }
.latest__news {
  color: #dee2e6;
  height: 700px;
  margin-bottom: 30px;
  .row {
    .text__wrapper {
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px;
      h2 {
        font-size: 2.5rem;
      }
      a {
        border: 2px solid #dee2e6;
        border-radius: 8px;
        padding: 1rem;
      }
    }
    .card__wrapper {
      // overflow: hidden;
      max-width: 1200px;
      // width: 100%;
      // height: 100%;
      // border: 1px solid violet;
      .card {
        // margin: auto 0;
        top: 75px;
        padding: 2rem 2rem 6rem;
        background: #162227;
        border-radius: 8px 8px 8px 0;
        height: 450px;
        transition: all 0.5s;
        opacity: 0.3;
        // max-width: 80%;
        // width: 100%;
        // max-width: 30%;
        // transform: translateX(100%);
        // &:nth-child(1) {
        //   opacity: 0.5;
        // }
        // &:hover {
        //   height: 700px;
        // }
        // &:hover p {
        //   opacity: 1;
        // }
        &.swiper-slide-active {
          top: 0;
          height: 600px;
          opacity: 1;
          p {
            opacity: 1;
          }
        }
        h4 {
          margin: 1rem 0 2.25rem;
          font-size: 1.5rem;
        }
        a {
          position: absolute;
          bottom: 2rem;
        }
        p {
          opacity: 0;
          transition: all 0.5s;
        }
      }
    }
  }
}
img {
  max-width: 80%;
  margin: 0 auto;
}
.card__container {
  display: flex;
  flex-direction: column;
}
// .card__container {
//   width: 100px;
// }
</style>
