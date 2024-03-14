<template>
  <vue-marquee-slider
    id="marquee-slider-loop"
    :speed="15000"
    :space="100"
    :paused="handlePlay"
  >
    <div
      class="marqueeImage"
      v-for="(item, index) in bgImage"
      :key="index"
      :style="{ 'background-image': `url(${item.url})` }"
      @mouseenter="stopSlider"
      @mouseleave="startSlider"
    ></div>
  </vue-marquee-slider>
</template>

<script>
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
  display: block;
  overflow: hidden;
  padding: 2rem 0;
  // width: 1920px;
  margin: 0 auto;
  border: 1px solid blue;
}

.marqueeImage {
  display: flex;
  flex: 0 0 20%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px 8px 8px 0;
  transition: 0.5s all ease-in-out;

  // position: relative;
  // height: 300px;

  &:nth-child(2n) {
    max-width: 100%;
    height: 300px;
  }
  &:nth-child(2n + 1) {
    border: 1px solid aqua;
    max-width: 100%;
    height: 200px;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    transform: scale(1.1);
  }
}
</style>
