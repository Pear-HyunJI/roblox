<template>
  <div class="video__1">
    <div class="row">
      <div class="img__box">
        <img :src="imgUrl" alt="비디오1" />
        <a
          href="https://www.youtube.com/watch?v=HDow_siGsI4"
          target="_blank"
          class="play__btn"
          type="button"
        >
          <i class="fa-solid fa-play"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video1",
  data() {
    return {
      imgUrl: "./assets/images/video1/brand_video_poster.jpg",
    };
  },
  methods: {
    videoPlay() {},
  },
};
</script>

<style lang="scss" scoped>
.video__1 {
  .row {
    margin: 50px auto;
    .img__box {
      position: relative;
      width: 100%;
    }
    img {
      width: 100%;
      border-radius: 8px;
    }
    .play__btn {
      position: absolute;
      padding: 22px 27px 20px 27px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 2px solid #f2f4f3;
      border-radius: 10px;
      color: #fff;
      font-size: 24px;
      transition: all 0.5s;
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
      &:hover {
        border-color: rgba(99, 71, 255, 0.25);
        box-shadow: 0 0 1rem rgba(99, 71, 255, 0.25);
      }
    }
  }
  @media screen and (max-width: 390px) {
    .row {
      margin: 50px 20px;
      .play__btn {
        padding: 12px 18px 12px 20px;
        font-size: 18px;
      }
    }
  }
}
</style>
