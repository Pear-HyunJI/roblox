<template>
  <section id="section">
    <div
      id="info__wrapper"
      class="row"
      v-for="(item, idx) in infoData"
      :key="idx"
    >
      <div class="text" :class="{ dark: changeDarkMode }">
        <h3>{{ item.title }}</h3>
        <p>{{ item.content }}</p>
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
          image: "src/assets/images/sticky-1/RBLX_Carousel_1.jpg",
          title: "함께 세상을 만들어 가요.",
          content:
            "Roblox는 자신만의 몰입형 체험을 제작할 수 있는 툴 및 플랫폼을 제공해, 각자가 꿈꾸는 세상을 생생히 구현할 수 있도록 지원합니다. Roblox의 비전은 사람들이 함께 만들고, 놀고, 탐험하고, 배우며, 서로 소통하는 방식을 재창조하는 것입니다.",
          imgOpacityValue: 0,
          textOpacityValue: 0.1,
        },
        {
          image: "src/assets/images/sticky-1/Edu_Hub_Home_Desktop_06.jpg",
          title: "Roblox를 만드는 건 저희가 아닙니다. 바로 여러분이죠.",
          content:
            "수천만 명의 개발자 및 크리에이터가 활동 중인 Roblox의 글로벌 커뮤니티는 지금 이 시간에도 끊임없이 사용자를 위한 새로운 체험을 제작하고 있습니다. 이들은 Roblox가 제공하는 툴 및 기술을 사용해 사람들이 매일 소통할 수 있는 새로운 방법을 창조해 나가고 있습니다.",
          imgOpacityValue: 0,
          textOpacityValue: 0.1,
        },
        {
          image: "src/assets/images/sticky-1/RBLX_Carousel_3.jpg",
          title: "수천만의 사람들을 연결합니다.",
          content:
            "Roblox에서는 매일 수천만 명의 사람들이 기존의 친구 및 새 친구들과 함께 소통하고 만들며 탐험을 즐기고 있습니다. 지금 이 시간에도 Roblox는 수억 명의 사람들을 긍정적이고 매너 있는 방식으로 연결한다는 미션을 향해 더 가까이 나아가고 있습니다.",
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
    },
  },
};
</script>

<style lang="scss" scoped>
#section {
  margin: 200px 0 200px;
}
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
</style>
