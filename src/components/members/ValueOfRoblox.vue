<template>
  <section id="valueOfRoblox">
    <div class="slide__outer">
      <div class="slide__inner">
        <h2>Roblox의 가치</h2>
        <swiper class="swiper" :options="swiperOption">
          <Swiper-slide
            class="slideBox1"
            v-for="(slider, index) in sliders"
            :key="index"
          >
            <div class="slideBox2">
              <h3>{{ slider.h3 }}</h3>
              <p>{{ slider.p }}</p>
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
          h3: "커뮤니티 존중하기",
          p: "Roblox는 우리의 행위가 세상에 미치는 영향을 고려하고, 모두의 최선을 존중하기 위해 노력하며, 진정성 있게 소통합니다. 회사보다는 커뮤니티, 팀보다는 회사, 개인보다는 팀을 우선순위에 둡니다.",
        },

        {
          h3: "책임지기",
          p: "Roblox는 각 행위의 의도한 결과 및 의도하지 않은 결과 모두에 대해 책임을 집니다.",
        },
        {
          h3: "멀리보기",
          p: "Roblox는 단기적인 결정을 내릴 때도 언제나 장기적인 비전을 설정합니다. 현재 상태에 도전하고, 넓게 생각하며, 모든 업무에서 혁신을 추구합니다.",
        },
        {
          h3: "맡은 일 완수하기",
          p: "Roblox는 주도권을 잡고 장기 목표를 향한 끈질긴 반복 개선을 수행하며 실행력을 확보합니다.",
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
      },
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 40px;
  color: #dee2e6;
  padding-bottom: 48px;
  font-weight: 500;
}

#valueOfRoblox {
  padding: 80px 0;
}
.slide__outer {
  overflow: hidden;
  width: 1200px;
  margin: 0 auto;
  height: 400px;
}

.slide__inner {
  width: 1600px;
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
  // border: 1px solid red;

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
  }
}

// .slideBox1:nth-child(1) {
//   background-color: #162227;
// }
// .slideBox1:nth-child(2) {
//   background-color: #343a40;
// }
// .slideBox1:nth-child(3) {
//   background-color: #4d5257;
// }
// .slideBox1:nth-child(4) {
//   background-color: #6f7274;
// }
</style>
