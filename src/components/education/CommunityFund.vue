<template>
  <div class="community__fund" :class="{ dark: changeDarkMode }">
    <div class="row">
      <div class="text">
        <h2>{{ $t("[1].community.h2") }}</h2>
        <p>
          {{ $t("[1].community.p") }}
        </p>
        <a
          href="https://blog.roblox.com/2021/11/introducing-roblox-community-fund/"
          target="_blank"
          :class="{ dark: changeDarkMode }"
        >
          <span>{{ $t("[1].community.span") }}</span>
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
  computed: {
    changeDarkMode() {
      return this.$store.getters.fnGetDark;
    },
  },
};
</script>

<style lang="scss" scoped>
.community__fund {
  margin-top: 200px;
  color: #dee2e6;
  &.dark {
    color: #121110;
  }
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
        &.dark {
          border-color: #121110;
        }
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
