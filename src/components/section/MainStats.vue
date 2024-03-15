<template>
  <div
    class="main__stats"
    data-asterisk="*As of 3 months ended December 31, 2023"
  >
    <div class="main__stats__wrapper">
      <div class="main__stats__stat" v-for="(val, idx) in statsData" :key="idx">
        <h5>{{ val.num }}</h5>
        <p>{{ val.text1 }}</p>
        <p>{{ val.text2 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainStats",
  data() {
    return {
      statsData: [
        { num: 71.5, text1: "백만", text2: "일일 활성 사용자*" },
        { num: 15.5, text1: "십억", text2: "참여 시간*" },
        { num: 2.4, text1: "백만", text2: "개발자*" },
        { num: 4.4, text1: "백만", text2: "활성 체험*" },
      ],
      maxNum: [{ num: 71.5 }, { num: 15.5 }, { num: 2.4 }, { num: 4.4 }],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    /* 33번으로 나눠서 카운트 업 */

    handleScroll() {
      let scrollY = window.scrollY;
      // console.log(scrollY);
      if (scrollY === 4900) {
        for (let i in this.statsData) {
          // console.log(this.statsData[i].num);
          if (this.statsData[i].num == 0) {
            this.statsData[i].num = 0;
          } else {
            /* 입력한 숫자를 33번에 걸쳐 0부터 올림. */
            let time = 0;

            for (let j = 0; j <= this.statsData[i].num; j += 1) {
              setTimeout(() => {
                this.statsData[i].num = j;
              }, 50 * time);
              /* 딱 떨어지지 않는 숫자를 마지막에 그 숫자로 만들어주기 위함 */
              if (j + 1 > this.statsData[i].num) {
                setTimeout(() => {
                  this.statsData[i].num = this.maxNum[i].num;
                }, 50 * (time + 1));
              }
              time++;
            }
          }
        }
      }
    },
  },
  // beforeDestroy() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // },
};
</script>

<style lang="scss" scoped>
.main__stats {
  position: relative;
  width: 100%;
  background: #162227;
  padding: 96px 0;
  &::after {
    content: attr(data-asterisk);
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    width: 100%;
    text-align: center;
    color: #f2f4f3;
  }
  .main__stats__wrapper {
    display: flex;
    justify-content: center;
    max-width: 1440px;
    margin: 0 auto;
    .main__stats__stat {
      position: relative;
      width: 100%;
      flex: 1 1 25%;
      padding: 32px;
      text-align: center;
      color: #f2f4f3;
      &::after {
        content: "";
        width: 0.5rem;
        height: 0.5rem;
        background-color: #fff;
        position: absolute;
        transform: rotate(-45deg);
        right: 0;
        top: 5rem;
      }
      &:nth-child(4)::after {
        display: none;
      }
      h5 {
        font-size: 4rem;
        line-height: 1;
        margin-bottom: 12px;
      }
      p {
        font-size: 1.125rem;
      }
    }
  }
}
</style>
