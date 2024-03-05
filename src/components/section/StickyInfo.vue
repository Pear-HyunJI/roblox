<template>
  <section id="section">
    <div
      id="info__wrapper"
      class="row"
      v-for="(item, idx) in infoData"
      :key="idx"
    >
      <div class="abc">
        <h3>{{ item.title }}</h3>
        <p>{{ item.content }}</p>
      </div>
      <div class="sticky__img" :style="{ opacity: item.opacityValue }">
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
          opacityValue: 0,
        },
        {
          image: "src/assets/images/sticky-1/RBLX_Carousel_1.jpg",
          title: "Roblox를 만드는 건 저희가 아닙니다. 바로 여러분이죠.",
          content:
            "수천만 명의 개발자 및 크리에이터가 활동 중인 Roblox의 글로벌 커뮤니티는 지금 이 시간에도 끊임없이 사용자를 위한 새로운 체험을 제작하고 있습니다. 이들은 Roblox가 제공하는 툴 및 기술을 사용해 사람들이 매일 소통할 수 있는 새로운 방법을 창조해 나가고 있습니다.",
          opacityValue: 0,
        },
        {
          image: "src/assets/images/sticky-1/RBLX_Carousel_1.jpg",
          title: "수천만의 사람들을 연결합니다.",
          content:
            "Roblox에서는 매일 수천만 명의 사람들이 기존의 친구 및 새 친구들과 함께 소통하고 만들며 탐험을 즐기고 있습니다. 지금 이 시간에도 Roblox는 수억 명의 사람들을 긍정적이고 매너 있는 방식으로 연결한다는 미션을 향해 더 가까이 나아가고 있습니다.",
          opacityValue: 0,
        },
      ],
      imgNum: 0,
      scrollValue: 300,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // 최소값이 0이 되도록 설정
      //   this.opacityValue = Math.max(
      //     0,
      //     1 - window.scrollY / window.scrollY < 650
      //       ? this.infoData[0].scrollValue
      //       : window.scrollY < 1250
      //       ? this.infoData[1].scrollValue
      //       : this.infoData[2].scrollValue
      //   );
      //   this.opacityValue =
      //     window.scrollY < 50
      //       ? Math.max(0, 1 - window.scrollY / this.infoData[0].scrollValue)
      //       : window.scrollY < 1500
      //       ? Math.max(0, 1 - window.scrollY / this.infoData[1].scrollValue)
      //       : Math.max(0, 1 - window.scrollY / this.infoData[2].scrollValue);

      // if (window.scrollY < 1000) {
      //   this.infoData[0].opacityValue = Math.max(
      //     0,
      //     1 - window.scrollY / this.scrollValue
      //   );
      //   this.infoData[1].opacityValue = 0;
      //   this.infoData[2].opacityValue = 0;
      // } else if (window.scrollY < 1500) {
      //   this.scrollValue = 3000;
      //   this.infoData[1].opacityValue = Math.max(
      //     0,
      //     1 - window.scrollY / this.scrollValue
      //   );
      //   this.infoData[0].opacityValue = 0;
      //   this.infoData[2].opacityValue = 0;
      // } else {
      //   this.scrollValue = 5000;
      //   this.infoData[2].opacityValue = Math.max(
      //     0,
      //     1 - window.scrollY / this.scrollValue
      //   );
      //   this.infoData[0].opacityValue = 0;
      //   this.infoData[1].opacityValue = 0;
      // }
      let data = this.infoData;
      if (window.scrollY >= 800 && window.scrollY < 1200) {
        data[0].opacityValue = 1;
        data[1].opacityValue = 0;
        data[2].opacityValue = 0;
      } else if (window.scrollY >= 1400 && window.scrollY < 1800) {
        data[0].opacityValue = 0;
        data[1].opacityValue = 1;
        data[2].opacityValue = 0;
      } else if (window.scrollY >= 2300 && window.scrollY < 2700) {
        data[0].opacityValue = 0;
        data[1].opacityValue = 0;
        data[2].opacityValue = 1;
      } else {
        data[0].opacityValue = 0;
        data[1].opacityValue = 0;
        data[2].opacityValue = 0;
      }
    },
  },
};

// window.addEventListener("scroll", function () {
//   const stickyImg = document.querySelector(".sticky__img");
//   const opacityValue = 1 - window.scrollY / 650;

//   // 최소값이 0이 되도록 설정
//   stickyImg.style.opacity = opacityValue > 0 ? opacityValue : 0;
// });
</script>

<style lang="scss" scoped>
#section {
  margin-top: 300px;
}
#info__wrapper {
  // border: 1px solid yellow;
  //   position: relative;
  display: flex;
  height: 800px;
  color: white;
  .abc {
    display: flex;
    flex: 60%;
    flex-direction: column;
    justify-content: left;
    margin-top: 100px;
    p {
      max-width: 300px;
    }
  }
  .sticky__img {
    flex: 40%;
    transition: opacity 0.5s ease;
    img {
      position: sticky;
      top: 50vh;
      height: 200px;
    }
  }
}
</style>
