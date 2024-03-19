<template>
  <div id="latest__news" :class="{ dark: changeDarkMode }">
    <div class="row">
      <div class="text__wrapper" :class="{ dark: changeDarkMode }">
        <h2>{{ $t("[4].latestnews.h2") }}</h2>
        <router-link to="/news">{{ $t("[4].latestnews.a") }}</router-link>
      </div>
      <swiper class="card__wrapper" :options="swiperOption">
        <swiper-slide
          class="card"
          :class="{ dark: changeDarkMode }"
          v-for="(item, idx) in cardData"
          :key="idx"
        >
          <div class="card__container">
            <img :src="item.img" :alt="item.title" />
            <h4>{{ $t(item.title) }}</h4>
            <p>{{ $t(item.contents) }}</p>
            <a :href="item.newsPage" target="_blank">{{
              $t("[4].latestnews.readmore")
            }}</a>
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
          title: "[4].latestnews.script-title1",
          contents: "[4].latestnews.script-contents1",
          newsPage:
            "https://blog.roblox.com/2023/10/reimagining-bringing-people-together-communication-connection-expression/",
        },
        {
          img: "src/assets/images/cardnews-1/avatar_tech.png",
          title: "[4].latestnews.script-title2",
          contents: "[4].latestnews.script-contents2",
          newsPage:
            "https://blog.roblox.com/2023/10/how-roblox-avatar-tech-is-evolving/",
        },
        {
          img: "src/assets/images/cardnews-1/ai_creation.png",
          title: "[4].latestnews.script-title3",
          contents: "[4].latestnews.script-contents3",
          newsPage:
            "https://blog.roblox.com/2023/09/revolutionizing-creation-roblox/",
        },
        {
          img: "src/assets/images/cardnews-1/rdc_2023.png",
          title: "[4].latestnews.script-title4",
          contents: "[4].latestnews.script-contents4",
          newsPage:
            "https://blog.roblox.com/2023/09/rdc-2023-roblox-going-next/",
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
  computed: {
    changeDarkMode() {
      return this.$store.getters.fnGetDark;
    },
  },
};
</script>

<style lang="scss" scoped>
#latest__news {
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
        transition: all 0.5s;
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
      &.dark {
        color: #121110;
        a {
          border-color: #121110;
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
            color: #fff;
          }
        }
      }
    }
    .card__wrapper {
      max-width: 1200px;
      .card {
        top: 75px;
        padding: 2rem 2rem 6rem;
        background: #162227;
        border-radius: 8px 8px 8px 0;
        height: 450px;
        transition: all 0.5s;
        opacity: 0.3;
        &.dark {
          background: #dfdfdf;
          color: #121110;
        }
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
          &::before {
            content: "";
            position: absolute;
            height: 2px;
            width: 100%;
            bottom: -10px;
            transition: 0.25s all ease-out;
            background-color: currentColor;
            max-width: 3rem;
          }
          &:hover::before {
            background-color: #6347ff;
            max-width: 100%;
          }
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
</style>
