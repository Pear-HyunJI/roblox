<template>
  <div class="community__fund">
    <div class="row">
      <div class="text">
        <h2>Roblox 커뮤니티 펀드</h2>
        <p>
          Roblox 커뮤니티 펀드(RCF)는 Roblox에 대한 영향력 있는 이니셔티브를
          지원하기 위해 1000만 달러의 초기 자금을 지원하는 공익 유한 책임
          회사입니다. 주요 교육 기관 및 개발자에 대한 자금 지원을 통해,
          2030년까지 1억 명의 학생에게 Roblox에서의 학습 기회를 제공하는 것을
          목표로 하고 있습니다.
        </p>
        <a href="#" target="_blank">
          <span>자세히 보기</span>
          <i class="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>
      <div class="img">
        <img
          src="@/assets/images/education-fund/Edu_Hub_Home_Mobile_08.jpg"
          alt="fund_image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommunityFund",
};
</script>

<style lang="scss" scoped>
.community__fund {
  margin-top: 200px;
  color: #dee2e6;
  .row {
    display: flex;
    align-items: center;
    .text {
      padding-right: 30px;
      h2 {
        font-size: 55px;
        word-break: keep-all;
        margin-bottom: 20px;
      }
      p {
        font-size: 20px;
        line-height: 2em;
        margin-bottom: 1.5em;
      }
      a {
        padding: 13px 40px;
        border: 2px solid #f2f4f3;
        border-radius: 8px;
        font-size: 14px;
        transition: all 0.3s;
        &:hover {
          transform: translateY(-3px);
        }
      }
    }
    .img {
      padding-left: 60px;
    }
  }
}
</style>
