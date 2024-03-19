<template>
  <div class="educational__exp" :class="{ dark: changeDarkMode }">
    <div class="row">
      <div class="exp__title">
        <h3>추천 교육 체험</h3>
        <a
          :class="{ dark: changeDarkMode }"
          href="https://www.roblox.com/discover#/sortName/Curated_67"
          target="_blank"
        >
          <span>전체 보기</span>
          <i class="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>
      <div class="card__wrapper">
        <div
          class="card"
          :class="{ dark: changeDarkMode }"
          v-for="(item, idx) in data"
          :key="idx"
        >
          <div class="img">
            <img :src="item.imgUrl" alt="image" />
          </div>
          <p class="img__source">사진 제공: {{ item.imgSource }}</p>
          <div class="text">
            <h4>{{ item.text1 }}</h4>
            <p>{{ item.text2 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationalExp",
  data() {
    return {
      data: [
        {
          imgUrl: "src/assets/images/education-exp/Edu_Hub_Home_Desktop_05.jpg",
          imgSource: "FIRST® Robotics",
          text1: "FIRST® Robotics",
          text2:
            "학생들은 Roblox에서 가상 로봇을 만들고 실력을 겨룰 수 있습니다.",
        },
        {
          imgUrl: "src/assets/images/education-exp/Edu_Hub_Home_Desktop_06.jpg",
          imgSource: "Project Lead The Way",
          text1: "Project Lead the Way",
          text2:
            "Project Lead The Way가 Roblox와 함께 STEM 교육 콘텐츠를 제공합니다.",
        },
        {
          imgUrl: "src/assets/images/education-exp/Edu_Hub_Home_Desktop_07.jpg",
          imgSource: "보스턴 과학 박물관",
          text1: "보스턴 과학 박물관",
          text2:
            "학생들은 ‘데스티네이션 마스: 뉴 프런티어’에서 아이디어를 얻고 화성에서의 삶에 필요한 인프라를 기획하고 구축합니다.",
        },
      ],
    };
  },
  computed: {
    changeDarkMode() {
      return this.$store.getters.fnGetDark;
    },
  },
};
</script>

<style lang="scss" scoped>
.educational__exp {
  color: #dee2e6;
  &.dark {
    color: #121110;
  }
  .row {
    .exp__title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 70px;
      h3 {
        font-size: 2rem;
      }
      a {
        border: 2px solid #dee2e6;
        border-radius: 8px;
        padding: 13px 20px;
        transition: all 0.3s;
        &.dark {
          border-color: #121110;
        }
        span {
          margin-right: 15px;
        }
        &:hover {
          transform: translateY(-3px);
        }
      }
    }
    .card__wrapper {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .card {
        flex: 0 0 30%;
        margin: 0 20px;
        background: #000;
        &.dark {
          background: #bdbdbd;
        }
        .img {
          margin-bottom: 1.5em;
        }
        .img__source {
          font-size: 8.42px;
          margin-bottom: 1.5em;
          padding: 0 20px;
        }
        .text {
          h4 {
            padding: 0 20px;
            margin-bottom: 1.5em;
          }
          p {
            padding: 0 20px 32px;
          }
        }
      }
    }
  }
}
</style>
