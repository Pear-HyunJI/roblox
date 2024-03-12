<template>
  <div class="education__news">
    <div class="row">
      <div class="title">
        <h2>Roblox 에듀케이션 관련 뉴스</h2>
        <p>교육 이니셔티브에 대한 최신 뉴스를 읽어 보세요.</p>
      </div>
      <div class="card__wrapper">
        <div class="card" v-for="(item, idx) in data" :key="idx">
          <div class="card__left">
            <div class="img">
              <img src="" alt="" />
            </div>
            <div class="text">
              <p></p>
            </div>
          </div>
          <div class="card__right">
            <div class="img">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationNews",
  data() {
    return {
      data: [
        {
          imgUrl1:
            "src/assets/images/education-news/Roblox_High_School-scaled.jpg",
          imgUrl2:
            "src/assets/images/education-news/Roblox_Logo_Gray_new_small.svg",
          text: "Roblox 커뮤니티 펀드 소개",
        },
        {
          imgUrl1:
            "src/assets/images/education-news/Community_Space-scaled.jpg",
          imgUrl2:
            "src/assets/images/education-news/Roblox_Logo_Gray_new_small.svg",
          text: "Roblox 교수 학습의 새로운 도약",
        },
        {
          imgUrl1: "src/assets/images/education-news/RobloxPitchArt1.jpg",
          imgUrl2: "src/assets/images/education-news/WSJ_Logo.svg",
          text: "Roblox, 학교에 교육용 비디오 게임 도입",
        },
        {
          imgUrl1: "src/assets/images/education-news/iStock-1312439265.jpg",
          imgUrl2: "src/assets/images/education-news/Education_week.svg",
          text: "Roblox 커뮤니티 펀드 소개",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.education__news {
  margin-top: 200px;
  color: #dee2e6;
  .row {
    .title {
      text-align: center;
      h2 {
        font-size: 55px;
        margin-bottom: 7px;
      }
      p {
        font-size: 14px;
      }
    }
  }
}
</style>
