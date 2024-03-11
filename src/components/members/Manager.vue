<template>
  <section class="row">
    <h2>경영진</h2>
    <div class="card__wrapper">
      <div class="card" v-for="(item, index) in cardData" :key="index">
        <div class="image" :data-category="item.position">
          <img :src="item.img" :alt="item.name" />
        </div>

        <h3>{{ item.name }}</h3>

        <p>{{ item.content }}</p>
        <button @click="showDetailManager(item.name)">계속 읽기</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Manager",

  data() {
    return {
      cardData: [
        {
          img: "src/assets/images/members-1/managers/Dave_Baszucki_Thumbnail_Large.jpg",
          position: "창업자 겸 최고 경영자",
          name: "데이비드 바주키(David Baszucki)",
          content:
            "데이비드 바주키는 Roblox의 창업자이자 최고 경영자입니다. 바주키의 비전은 수십억의 사용자가 서로의 경험을 공유할 수 있는 플랫폼을 구축하는 것입니다.",
        },
        {
          img: "src/assets/images/members-1/managers/Manuel_Bronstein_Thumbnail_Large.jpg",
          position: "최고 제품 책임자",
          name: "마누엘 브론스테인(Manuel Bronstein)",
          content:
            "마누엘 브론스테인은 Roblox의 최고 제품 책임자로서 제품, 디자인, 데이터 과학 부문을 이끌고 있습니다.",
        },
        {
          img: "src/assets/images/members-1/managers/Mike_Guthrie_Thumbnail_Large.jpg",
          position: "최고 재무 책임자",
          name: "마이크 거스리(Mike Guthrie)",
          content:
            "마이크 거스리는 Roblox의 최고 재무 책임자입니다. 글로벌 기업으로의 확장을 위한 전반적인 재무 전략을 수립하고, 지속 가능한 수익의 성장을 견인하며, 새로운 비즈니스 기회 확보에 주력하고 있습니다. 이를 위해 재무, 회계, 비즈니스 및 사업 개발 부서를 두루 관장합니다.",
        },
        {
          img: "src/assets/images/members-1/managers/Matt_Kaufman_Thumbnail_Large.jpg",
          position: "최고 안전 책임자",
          name: "맷 코프먼(Matt Kaufman)",
          content:
            "맷 코프먼은 Roblox의 최고 안전 책임자입니다. Roblox의 안전 및 매너 관련 사안을 관장하고 제품 및 운영, 정책 관련 혁신을 주도함으로써 이곳이 모두를 위한 안전한 플랫폼이 되도록 하고, 매너 있는 가상 공간 조성을 향한 비전을 현실화하고자 노력하고 있습니다.",
        },
        {
          img: "src/assets/images/members-1/managers/Arvind_KC2.jpg",
          position: "최고 인사·시스템 책임자",
          name: "아빈드 KC(Arvind KC)",
          content:
            "아빈드 KC는 Roblox의 최고 인사·시스템 책임자로, Roblox의 프로세스, 시스템, 경험, 문화를 발전시켜 직원이 성장하고 팀이 번창하며 최고의 잠재력을 발휘할 수 있도록 돕는 조직을 이끌고 있습니다.",
        },
        {
          img: "src/assets/images/members-1/managers/Manuel_Bronstein_Thumbnail_Large.jpg",
          position: "최고 제품 책임자",
          name: "마누엘 브론스테인(Manuel Bronstein)",
          content:
            "마누엘 브론스테인은 Roblox의 최고 제품 책임자로서 제품, 디자인, 데이터 과학 부문을 이끌고 있습니다.",
        },
        {
          img: "src/assets/images/members-1/managers/Mark_Reinstra_Thumbnail_Large.jpg",
          position: "법무실장",
          name: "마크 레인스트라(Mark Reinstra)",
          content:
            "마크 레인스트라는 Roblox의 법무실장입니다. Roblox의 해외 시장 확장 및 개인정보 보호, 데이터 보안, 돌봄 및 안전 관련 업무를 총괄하며, Roblox의 글로벌 성장을 추진하고 이를 지원하는 팀을 이끌고 있습니다..",
        },
        {
          img: "src/assets/images/members-1/managers/Dan_Sturman_Thumbnail_Large.jpg",
          position: "최고 기술 책임자",
          name: "대니얼 스터먼(Daniel Sturman)",
          content:
            "Roblox의 최고 기술 책임자인 대니얼 스터먼은 앱, 엔진, 개발자, 해외 시장, 경제, 안전, 플랫폼 엔지니어링 부문에서 전 세계 최고 수준의 엔지니어링 관리자들을 이끌고 있습니다.",
        },
        {
          img: "src/assets/images/members-1/managers/Christina_Wootton.png",
          position: "최고 파트너십 책임자",
          name: "크리스티나 우튼(Christina Wootton)",
          content:
            "크리스티나 우튼은 Roblox의 최고 파트너십 책임자로 재직하며 브랜드 파트너십, 비즈니스 개발, 교육 부문을 주도하고 있습니다. 디지털 패션 및 뷰티를 통해 자신을 표현하고, 함께 배우며, 인기 브랜드 및 인재와 더불어 엔터테인먼트 및 음악, 스포츠를 체험할 수 있는 새로운 생태계를 만드는 데 중점을 두고 있습니다.",
        },
        {
          img: "src/assets/images/members-1/managers/Shobhana_Ahluwalia.jpg",
          position: "부사장 겸 최고 정보 책임자",
          name: "쇼바나 알루왈리아(Shobhana Ahluwalia)",
          content:
            "Roblox의 최고 정보 책임자인 쇼바나 (숍즈) 알루왈리아(Shobhana (Shobz) Ahluwalia)는 원활한 소비자급 기술 경험을 제공해 전 세계 Roblox 직원에게 최고 수준의 생산성과 혁신을 제공하는 일을 담당하고 있습니다.",
        },
        {
          img: "src/assets/images/members-1/managers/Brooks_Evans.png",
          position: "부사장 겸 최고 정보 보안 책임자",
          name: "브룩스 에반스(Brooks Evans)",
          content:
            "Roblox의 부사장 겸 최고 정보 보안 책임자인 에반스는 Roblox를 안전한 회사 및 플랫폼으로 유지하는 데 필요한 모든 요소를 담당하고 있습니다.",
        },
        {
          img: "src/assets/images/members-1/managers/Morgan_McGuire.png",
          position: "부사장 겸 최고 과학자",
          name: "모건 맥과이어(Morgan McGuire)",
          content:
            "맥과이어 교수는 Roblox의 모든 연구 그룹을 조율하고 Roblox 연구 및 게임 엔진 제품의 엔지니어링 개발을 직접 관리함으로써 Roblox의 혁신을 가속화합니다.",
        },
      ],
    };
  },
  methods: {
    showDetailManager(name) {
      this.$emit("showDetailManager", name);
      // this.clickedCard = name;
      // this.$emit("update: clickedCard", name);
      console.log(name);

      // console.log(this.clickedCard);
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  padding: 80px 0;
}
h2 {
  margin: 0 150px;
  color: #dee2e6;
  font-size: 40px;
  font-weight: 500;
  padding-bottom: 15px;
}
.card__wrapper {
  color: #162227;

  margin: 0 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .card {
    margin: 30px 0;
    flex: 33%;
    max-width: 360px;
    height: 592px;
    background: #dee2e6;
    border-radius: 8px 8px 8px 0;
    padding: 32px 32px 96px;
    position: relative;
    transition: all 250ms ease-in;
    &:hover {
      transform: scale(1.1);
    }

    .image::before {
      content: attr(data-category);
      position: absolute;
      bottom: 0;
      width: calc(100% - 2rem);
      text-align: right;
      transform: rotate(-90deg);
      transform-origin: bottom left;
      line-height: 1;
      text-transform: uppercase;
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 0.08em;
    }
    img {
      border-radius: 8px 8px 8px 0;
      padding: 0 0 0 10px;
    }

    h3 {
      font-size: 24px;
      padding: 36px 0 36px;
    }

    p {
      font-size: 1rem;
      opacity: 0;
      overflow: hidden;
      max-height: 0px;
      transition: all 250ms ease-in;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      white-space: normal;
      display: -webkit-box !important;
    }

    &:hover p {
      opacity: 1;
      max-height: 5em;
    }

    button {
      font-size: 1rem;
      opacity: 0;
      overflow: hidden;
      max-height: 0px;
      // transition: all 250ms ease-in;
      text-overflow: ellipsis;
      white-space: nowrap;
      position: absolute;
      bottom: 20px;
      background: none;
      padding-bottom: 20px;
      // border-bottom: 1px solid #162227;
      border: none;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 50%; /* 초기 너비 */
        height: 2px;
        background-color: #162227;
        transition: width 250ms ease-in;
      }

      &:hover {
        &::after {
          width: 100%;
          background-color: #6347ff;
        }
      }
    }

    &:hover button {
      opacity: 1;
      max-height: 2em;
      // border-bottom: 1px solid black;
    }
  }
}
</style>
