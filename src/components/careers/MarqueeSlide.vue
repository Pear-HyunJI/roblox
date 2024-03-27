<template>
  <div>
    <vue-marquee-slider
      id="marquee-slider-loop"
      :speed="80000"
      :space="100"
      :paused="handlePlay"
    >
      <div
        class="marqueeImage"
        v-for="(item, index) in bgImage"
        :key="index"
        :style="{ 'background-image': `url(${item.url})` }"
        @mouseover="handlePlay = true"
        @mouseout="handlePlay = false"
      ></div>
    </vue-marquee-slider>
  </div>
</template>

<script>
let abc = document.getElementById("marquee-slider-loop");

export default {
  name: "MarqueeSlide",
  data() {
    return {
      bgImage: [
        { url: "./assets/images/marqueeSlide/marquee-1.webp" },
        { url: "./assets/images/marqueeSlide/marquee-2-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-3-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-4-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-5-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-6.webp" },
        { url: "./assets/images/marqueeSlide/marquee-1.webp" },
        { url: "./assets/images/marqueeSlide/marquee-2-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-3-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-4-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-5-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-6.webp" },
        { url: "./assets/images/marqueeSlide/marquee-1.webp" },
        { url: "./assets/images/marqueeSlide/marquee-2-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-3-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-4-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-5-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-6.webp" },
        { url: "./assets/images/marqueeSlide/marquee-1.webp" },
        { url: "./assets/images/marqueeSlide/marquee-2-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-3-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-4-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-5-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-6.webp" },
        { url: "./assets/images/marqueeSlide/marquee-1.webp" },
        { url: "./assets/images/marqueeSlide/marquee-2-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-3-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-4-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-5-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-6.webp" },
        { url: "./assets/images/marqueeSlide/marquee-1.webp" },
        { url: "./assets/images/marqueeSlide/marquee-2-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-3-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-4-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-5-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-6.webp" },
        { url: "./assets/images/marqueeSlide/marquee-1.webp" },
        { url: "./assets/images/marqueeSlide/marquee-2-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-3-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-4-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-5-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-6.webp" },
        { url: "./assets/images/marqueeSlide/marquee-1.webp" },
        { url: "./assets/images/marqueeSlide/marquee-2-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-3-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-4-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-5-cropped.webp" },
        { url: "./assets/images/marqueeSlide/marquee-6.webp" },
      ],
      handlePlay: false,
    };
  },

  methods: {
    stopSlider() {
      this.handlePlay = true;
    },
    startSlider() {
      this.handlePlay = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#marquee-slider-loop {
  display: flex;
  overflow: hidden;
  padding: 2rem 0;
  margin: 80px auto;
  justify-content: center;
  align-items: center;
}

.marqueeImage {
  flex: 0 0 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px 8px 8px 0;
  transition: 0.5s all ease-in-out;

  &:nth-child(2n) {
    height: 300px;
  }
  &:nth-child(2n + 1) {
    height: 200px;
    margin-top: 50px;
  }

  &:hover {
    transform: scale(1.1);
  }
}
</style>
