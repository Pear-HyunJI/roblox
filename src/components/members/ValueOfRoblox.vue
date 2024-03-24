<template>
  <section id="valueOfRoblox" :class="{ dark: changeDarkMode }">
    <div class="slide__outer">
      <div class="slide__inner">
        <h2 :class="{ dark: changeDarkMode }">
          {{ $t("[5].valueofroblox.h2") }}
        </h2>
        <swiper class="swiper" :options="swiperOption">
          <Swiper-slide
            class="slideBox1"
            v-for="(slider, index) in sliders"
            :key="index"
          >
            <div class="slideBox2">
              <h3>{{ $t(slider.h3) }}</h3>
              <p>{{ $t(slider.p) }}</p>
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
          h3: "[5].valueofroblox.first-h3",
          p: "[5].valueofroblox.first-p",
        },

        {
          h3: "[5].valueofroblox.second-h3",
          p: "[5].valueofroblox.second-p",
        },
        {
          h3: "[5].valueofroblox.third-h3",
          p: "[5].valueofroblox.third-p",
        },
        {
          h3: "[5].valueofroblox.fourth-h3",
          p: "[5].valueofroblox.fourth-p",
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
            slidesPerView: 3,
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
}

#valueOfRoblox {
  padding: 80px 0;
  @media screen and (max-width: 390px) {
    padding: 80px 10px;
  }
}
.slide__outer {
  overflow: hidden;
  width: 1200px;
  margin: 0 auto;
  height: 400px;
  @media screen and (max-width: 390px) {
    width: 1000px;
  }
}

.slide__inner {
  width: 1600px;
  @media screen and (max-width: 390px) {
    width: 1000px;
  }
}

.slideBox1.swiper-slide {
  max-width: 560px;
}
.slideBox1 {
  border-radius: 8px 8px 8px 0;
  color: #dee2e6;
  background-color: #343a40;
  height: 220px;
  width: 100%;

  .slideBox2 {
    padding: 2rem;
    height: 100%;

    h3 {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 36px;
    }
    p {
      font-size: 16px;
    }
    @media screen and (max-width: 390px) {
      padding: 1.5rem;
      h3 {
        margin-bottom: 25px;
      }
    }
  }
}
.swiper-button-prev {
  color: #121110;
}
</style>
