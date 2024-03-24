<template>
  <section id="career__story" :class="{ dark: changeDarkMode }">
    <div class="slide__outer">
      <div class="slide__inner">
        <h2 :class="{ dark: changeDarkMode }">{{ $t("[0].story.h2") }}</h2>
        <swiper class="swiper" :options="swiperOption">
          <Swiper-slide
            class="slideBox1"
            :class="{ dark: changeDarkMode }"
            v-for="(slider, index) in sliders"
            :key="index"
          >
            <div class="slideBox2">
              <img :src="slider.image" alt="" />
              <h3>{{ $t(slider.h3) }}</h3>
              <a :href="slider.link" target="_blank">{{ $t("[0].story.a") }}</a>
            </div>
          </Swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "@/assets/css/myswiper.css";

export default {
  name: "ValueOfRoblox",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      sliders: [
        {
          image:
            "src/assets/images/career-story/RBLX_EOY_BlogHeader_Final-1024x576.webp",
          h3: "[0].story.first-h3",
          link: "https://blog.roblox.com/2023/12/2023-year-review-letter-ceo/",
        },
        {
          image: "src/assets/images/career-story/RBLX_RDC-Banner_-Blog-1.webp",
          h3: "[0].story.second-h3",
          link: "https://blog.roblox.com/2023/09/rdc-2023-roblox-going-next/",
        },
        {
          image: "src/assets/images/career-story/AI-Blog-Header.webp",
          h3: "[0].story.third-h3",
          link: "https://blog.roblox.com/2023/09/revolutionizing-creation-roblox/",
        },
        {
          image:
            "src/assets/images/career-story/_Roblox-Career-Center-Header._001-1.webp",
          h3: "[0].story.fourth-h3",
          link: "https://blog.roblox.com/2023/08/introducing-roblox-career-center/",
        },
        {
          image: "src/assets/images/career-story/image 1.webp",
          h3: "[0].story.fifth-h3",
          link: "https://www.fastcompany.com/90878692/roblox-grows-up",
        },
        {
          image: "src/assets/images/career-story/image 2.webp",
          h3: "[0].story.sixth-h3",
          link: "https://blog.roblox.com/2023/05/our-vision-for-all-ages/",
        },
      ],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        freemode: true,
        effect: "slide", // slide, cube, coverflow, flip
        autoplay: {
          delay: 5000,
        },
        loop: true,
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
            slidesPerView: 1,
            slidesPerGroup: 1,
            centeredSlides: true,
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
h2 {
  font-size: 40px;
  color: #dee2e6;
  padding-bottom: 48px;
  font-weight: 500;
  &.dark {
    color: #121110;
  }
  @media screen and (max-width: 390px) {
    font-size: 35px;
  }
}

.slide__outer {
  overflow: hidden;
  width: 1200px;
  margin: 0 auto;
  height: 700px;
  @media screen and (max-width: 390px) {
    width: 370px;
  }
}

.slide__inner {
  width: 1600px;
  @media screen and (max-width: 390px) {
    width: 370px;
  }
}

.slideBox1.swiper-slide {
  max-width: 560px;
}
.slideBox1 {
  border-radius: 8px 8px 8px 0;
  color: #dee2e6;
  background-color: #343a40;
  height: 480px;
  width: 100%;
  &.dark {
    color: #121110;
    background-color: #bdbdbd;
  }
  .slideBox2 {
    padding: 3rem;
    height: 100%;
    word-break: keep-all;
    position: relative;
    img {
      border-radius: 8px 8px 8px 0;
    }
    h3 {
      font-size: 27px;
      font-weight: 500;
      margin: 20px 0px 36px;
    }
    p {
      font-size: 16px;
    }

    a {
      position: absolute;
      bottom: 40px;
      background: none;
      border: none;
      font-size: 18px;

      padding-bottom: 10px;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 50%; /* 초기 너비 */
        height: 2px;
        background-color: #162227;
        transition: width 250ms ease-in;
      }

      &:hover {
        &::after {
          width: 100%;
          background-color: #6347ff;
        }
      }
    }
  }
}
</style>
