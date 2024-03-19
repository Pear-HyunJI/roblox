<template>
  <section id="ceo" class="row">
    <div class="ceo__wrap">
      <div class="ceoImg">
        <img
          src="../../assets/images/members-1/ceo/Dave_TechTalks_Comp_cropped_Large.jpg"
          alt="CEO image"
        />
      </div>
      <div class="textBox" :class="{ dark: changeDarkMode }">
        <div class="text__wrapper">
          <span>데이비드 바주키(DAVID BAZUCKI) 진행</span>
          <h3>Tech Talks 팟캐스트</h3>
          <p>
            CEO 데이비드 바주키 및 인간 상호 작용의 미래를 구축해 가는 사람들의
            대화를 통해, 현재의 기술적 과제 및 획기적인 아이디어, 혁신에 대해
            자세히 알아보세요.
          </p>
          <ul class="iconBox">
            <li>
              <a
                href="https://podcasts.apple.com/us/podcast/roblox-tech-talks/id1576801701"
                target="_blank"
                ><i class="fa-solid fa-podcast"></i
              ></a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/show/6MEbDMxt2IXoTRvQegwmVf"
                target="_blank"
                ><i class="fa-brands fa-spotify"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=Uq0UlIw8B8M"
                target="_blank"
                ><i class="fa-brands fa-youtube"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Host",
  computed: {
    changeDarkMode() {
      return this.$store.getters.fnGetDark;
    },
  },
};
</script>

<style lang="scss" scoped>
.ceo__wrap {
  display: flex;
  .textBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
    flex: 50%;
    color: #dee2e6;
    word-break: keep-all;
    &.dark {
      color: #121110;
    }
    .text__wrapper {
      max-width: calc(640px - 11rem);
      font-size: 20px;
      h3 {
        font-size: 50px;
        font-weight: 500;
        padding: 10px 0 42px 0;
      }
      p {
        font-size: 16px;
      }
      .iconBox {
        display: flex;
        li {
          padding: 30px 20px 0 0;
          font-size: 30px;
          transition: all 250ms ease-in;
          &:hover {
            color: #6347ff;
          }
        }
      }
    }
  }
  .ceoImg {
    flex: 50%;
    position: relative;
    &::before {
      position: absolute;
      content: "";
      height: 15%;
      left: 0;
      right: 0;
      z-index: 10;
      top: -2px;
      background: linear-gradient(
        180deg,
        #121110 0%,
        #121110 5%,
        rgba(18, 17, 16, 0) 100%
      );
    }
    &::after {
      position: absolute;
      content: "";
      height: 15%;
      left: 0;
      right: 0;
      z-index: 99;
      bottom: -2px;
      background: linear-gradient(
        0deg,
        #121110 0%,
        #121110 5%,
        rgba(18, 17, 16, 0) 100%
      );
    }
  }
}
</style>
