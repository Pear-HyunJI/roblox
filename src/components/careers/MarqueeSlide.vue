<template>
  <vue-marquee-slider id="marquee-slider-loop" :speed="50000" :space="100">
    <div
      class="marqueeImage"
      v-for="item in bgImage"
      :key="item"
      :style="{ 'background-image': `url(${item.url})` }"
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
    };
  },
};
</script>

<style lang="scss" scoped>
#marquee-slider-loop {
  display: flex;
  display: block;
  overflow: hidden;
  position: relative;
  padding: 2rem 0;
  width: 1920px;
  margin: 0 auto;
}

.marqueeImage {
  position: absolute;
  // display: flex;
  flex: 0 0 20%;
  width: 100%;
  // padding-bottom: 68%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px 8px 8px 0;
  &:nth-child(2n) {
    max-width: 100%;
    height: 300px;
  }
  &:nth-child(2n + 1) {
    max-width: 100%;
    height: 200px;
  }
}
// border-radius: 8px 8px 8px 0;
// &:nth-child(2n) {
//   max-width: 500px;
//   height: 500px;
// }
// &:nth-child(2n + 1) {
//   max-width: 200px;
//   height: 200px;
// }
</style>
