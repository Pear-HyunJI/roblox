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
        { url: "src/assets/images/marqueeSlide/marquee-1.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-2-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-3-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-4-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-5-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-6.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-1.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-2-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-3-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-4-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-5-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-6.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-1.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-2-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-3-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-4-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-5-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-6.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-1.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-2-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-3-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-4-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-5-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-6.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-1.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-2-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-3-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-4-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-5-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-6.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-1.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-2-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-3-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-4-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-5-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-6.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-1.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-2-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-3-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-4-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-5-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-6.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-1.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-2-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-3-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-4-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-5-cropped.webp" },
        { url: "src/assets/images/marqueeSlide/marquee-6.webp" },
      ],
      handlePlay: false,
    };
  },
  // computed: {
  //   handleSlideEvent() {
  //     return this.stopSlider();
  //   },
  // },
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
  // width: 1920px;
  margin: 80px auto;
  // border: 1px solid blue;
  justify-content: center;
  align-items: center;
}

.marqueeImage {
  // display: flex;
  flex: 0 0 200px;
  // width: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px 8px 8px 0;
  transition: 0.5s all ease-in-out;

  // position: relative;
  // height: 300px;

  &:nth-child(2n) {
    // max-width: 100%;
    height: 300px;
  }
  &:nth-child(2n + 1) {
    // border: 1px solid aqua;
    // max-width: 100%;
    height: 200px;
    margin-top: 50px;
  }

  &:hover {
    transform: scale(1.1);
  }
}
</style>
