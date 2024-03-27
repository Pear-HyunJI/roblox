<template>
  <section id="section">
    <div
      id="info__wrapper"
      class="row"
      v-for="(item, idx) in infoData"
      :key="idx"
    >
      <div class="text" :class="{ dark: changeDarkMode }">
        <h3>{{ $t(item.title) }}</h3>
        <p>{{ $t(item.content) }}</p>
      </div>
      <div class="sticky__img" :style="{ opacity: item.imgOpacityValue }">
        <img :src="item.image" alt="이미지1" />
      </div>
    </div>
  </section>
</template>

<script>
console.log;
export default {
  name: "StickyInfo",
  data() {
    return {
      infoData: [
        {
          image: "./assets/images/sticky-1/RBLX_Carousel_1.jpg",
          title: "[4].stickyinfo.script-title1",
          content: "[4].stickyinfo.script-content1",
          imgOpacityValue: 0,
          textOpacityValue: 0.1,
        },
        {
          image: "./assets/images/sticky-1/Edu_Hub_Home_Desktop_06.jpg",
          title: "[4].stickyinfo.script-title2",
          content: "[4].stickyinfo.script-content2",
          imgOpacityValue: 0,
          textOpacityValue: 0.1,
        },
        {
          image: "./assets/images/sticky-1/RBLX_Carousel_3.jpg",
          title: "[4].stickyinfo.script-title3",
          content: "[4].stickyinfo.script-content3",
          imgOpacityValue: 0,
          textOpacityValue: 0.1,
        },
      ],
      imgNum: 0,
      scrollValue: 300,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  computed: {
    changeDarkMode() {
      return this.$store.getters.fnGetDark;
    },
  },
  methods: {
    handleScroll() {
      let data = this.infoData;
      if (window.scrollY >= 1800 && window.scrollY < 2600) {
        data[0].imgOpacityValue = 1;
        data[1].imgOpacityValue = 0;
        data[2].imgOpacityValue = 0;
      } else if (window.scrollY >= 2700 && window.scrollY < 3600) {
        data[0].imgOpacityValue = 0;
        data[1].imgOpacityValue = 1;
        data[2].imgOpacityValue = 0;
      } else if (window.scrollY >= 4000 && window.scrollY < 4900) {
        data[0].imgOpacityValue = 0;
        data[1].imgOpacityValue = 0;
        data[2].imgOpacityValue = 1;
      } else {
        data[0].imgOpacityValue = 0;
        data[1].imgOpacityValue = 0;
        data[2].imgOpacityValue = 0;
      }
      if (window.scrollY < 1700) {
        data[0].imgOpacityValue = 1;
        data[1].imgOpacityValue = 1;
        data[2].imgOpacityValue = 1;
      }
      console.log(window.scrollY);
    },
  },
};
</script>

<style lang="scss" scoped>
#section {
  margin: 200px 0 200px;
  #info__wrapper {
    display: flex;
    padding: 50px 0;
    margin: 300px auto;
    color: rgba(255, 255, 255, 0.8);
    height: 842px;
    .text {
      display: flex;
      flex: 40%;
      flex-direction: column;
      justify-content: center;
      align-items: end;
      margin: 0 2rem 0 0;
      text-align: right;
      transition: all 0.3s;
      word-break: keep-all;
      &.dark {
        color: #121110;
      }
      h3 {
        font-size: 2rem;
        margin-bottom: 2rem;
        word-break: keep-all;
      }
      p {
        max-width: 400px;
        font-size: 1rem;
        word-break: keep-all;
      }
    }
    .sticky__img {
      flex: 40%;
      transition: opacity 0.3s ease;
      img {
        position: sticky;
        top: 40vh;
        height: 350px;
        border-radius: 5px;
      }
    }
  }
  @media screen and (max-width: 390px) {
    margin: 0;
    #info__wrapper {
      display: block;
      margin: 0 auto;
      padding: 25px 0;
      height: 350px;
      .text {
        text-align: center;
        align-items: center;
        margin: 0;
        h3 {
          font-size: 1.5rem;
          margin-bottom: 0;
        }
        p {
          display: none;
        }
      }
      .sticky__img {
        img {
          top: 80vh;
          height: 100%;
        }
      }
    }
  }
}
</style>
