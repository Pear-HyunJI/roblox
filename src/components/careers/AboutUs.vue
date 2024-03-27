<template>
  <div class="about__us">
    <div class="row">
      <div class="card__wrapper" v-for="(item, idx) in data" :key="idx">
        <div class="text" :class="{ dark: changeDarkMode }">
          <h3>{{ $t(item.h3Text) }}</h3>
          <p>{{ $t(item.pText) }}</p>
          <a :href="item.aRink" v-if="item.aText">{{ $t(item.aText) }}</a>
        </div>
        <div class="photo__card">
          <div class="photo__card__img">
            <img :src="item.img" :alt="item.h3Text" />
          </div>
          <div
            class="photo__card__text"
            :class="{ dark: changeDarkMode }"
            v-if="item.cardP1"
          >
            <p class="p1">{{ $t(item.cardP1) }}</p>
            <p class="p2">{{ $t(item.cardP2) }}</p>
            <p class="p3">{{ $t(item.cardP3) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      data: [
        {
          img: "./assets/images/careers-about-us/com_ (2).jpg",
          h3Text: "[0].aboutus.h3text1",
          pText: "[0].aboutus.ptext1",
          aText: "[0].aboutus.atext",
          aRink: "https://careers.roblox.com/work-at-roblox",
          cardP1: "",
          cardP2: "",
          cardP3: "",
        },
        {
          img: "./assets/images/careers-about-us/com_.jpg",
          h3Text: "[0].aboutus.h3text2",
          pText: "[0].aboutus.ptext2",
          aText: "",
          aRink: "",
          cardP1: "[0].aboutus.second-cardp1",
          cardP2: "[0].aboutus.second-cardp2",
          cardP3: "[0].aboutus.second-cardp3",
        },
        {
          img: "./assets/images/careers-about-us/com_ (4).jpg",
          h3Text: "[0].aboutus.h3text3",
          pText: "[0].aboutus.ptext3",
          aText: "",
          aRink: "",
          cardP1: "[0].aboutus.third-cardp1",
          cardP2: "[0].aboutus.third-cardp2",
          cardP3: "[0].aboutus.third-cardp3",
        },
        {
          img: "./assets/images/careers-about-us/com_ (1).jpg",
          h3Text: "[0].aboutus.h3text4",
          pText: "[0].aboutus.ptext4",
          aText: "",
          aRink: "",
          cardP1: "[0].aboutus.fourth-cardp1",
          cardP2: "[0].aboutus.fourth-cardp2",
          cardP3: "[0].aboutus.fourth-cardp3",
        },
        {
          img: "./assets/images/careers-about-us/com_ (3).jpg",
          h3Text: "[0].aboutus.h3text5",
          pText: "[0].aboutus.ptext5",
          aText: "",
          aRink: "",
          cardP1: "",
          cardP2: "",
          cardP3: "",
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
.about__us {
  margin: 50px 0 150px 0;
  .row {
    .card__wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      padding: 2rem 0;
      &:nth-child(2n + 1) {
        display: flex;
        flex-direction: row-reverse;
      }
      .text {
        flex: 0 0 40%;
        padding: 0 2.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #f2f4f3;
        word-break: keep-all;
        gap: 1.5rem;
        &.dark {
          color: #121110;
        }
        h3 {
          font-size: 2.5rem;
          line-height: 3rem;
        }
        p {
          font-size: 18px;
          margin: 18px 0;
        }
        a {
          width: 140px;
          text-align: center;
          font-size: 1rem;
          padding: 1rem;
          border: 2px solid rgba(242, 244, 243, 0.75);
          border-radius: 8px;
          transition: all 0.5s;
          &:hover {
            border-color: rgba(99, 71, 255, 0.25);
            box-shadow: 0 0 1rem rgba(99, 71, 255, 0.25);
            background: conic-gradient(
              from 95.27deg at 51.3% 51.96%,
              #150d44 -0.95deg,
              #121110 62.41deg,
              #0f0c1c 134.15deg,
              #0a042e 181.84deg,
              #0f0d1a 237.07deg,
              #121110 317.05deg,
              #150d44 359.05deg,
              #121110 422.41deg
            );
          }
        }
      }
      .photo__card {
        flex: 0 0 28.8%;
        padding: 0 2.5rem;
        .photo__card__img {
          width: 500px;
          img {
            border-radius: 1rem 1rem 0 0;
          }
        }
        .photo__card__text {
          width: 500px;
          color: #dee2e6;
          word-break: keep-all;
          padding: 1.5rem;
          background: #222;
          border-radius: 0 0 1rem 0;
          &.dark {
            color: #121110;
            background: #bdbdbd;
          }
          .p1 {
            font-size: 1.125rem;
          }
          .p2 {
            margin-top: 1.5rem;
            font-size: 1.125rem;
          }
          .p3 {
            font-size: 12px;
          }
        }
      }
      @media screen and (max-width: 390px) {
        display: flex;
        flex-direction: column;
        &:nth-child(n) {
          display: flex;
          flex-direction: column-reverse;
        }
        .text {
          flex: 0 0 40%;
          padding: 20px 2rem 0;

          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #f2f4f3;
          word-break: keep-all;
          gap: 1.5rem;
          &.dark {
            color: #121110;
          }
          h3 {
            font-size: 2rem;
            line-height: 2.5rem;
          }
          p {
            font-size: 18px;
            margin: 10px 0;
          }
          a {
            width: 140px;
            text-align: center;
            font-size: 1rem;
            padding: 1rem;
            border: 2px solid rgba(242, 244, 243, 0.75);
            border-radius: 8px;
            transition: all 0.5s;
            &:hover {
              border-color: rgba(99, 71, 255, 0.25);
              box-shadow: 0 0 1rem rgba(99, 71, 255, 0.25);
              background: conic-gradient(
                from 95.27deg at 51.3% 51.96%,
                #150d44 -0.95deg,
                #121110 62.41deg,
                #0f0c1c 134.15deg,
                #0a042e 181.84deg,
                #0f0d1a 237.07deg,
                #121110 317.05deg,
                #150d44 359.05deg,
                #121110 422.41deg
              );
            }
          }
        }
        .photo__card {
          flex: 0 0 28.8%;
          padding: 0 1rem;
          .photo__card__img {
            width: 360px;
            img {
              border-radius: 1rem 1rem 0 0;
            }
          }
          .photo__card__text {
            width: 360px;
            color: #dee2e6;
            word-break: keep-all;
            padding: 1rem;
            background: #222;
            border-radius: 0 0 1rem 0;
            .p1 {
              font-size: 1.125rem;
            }
            .p2 {
              margin-top: 1.5rem;
              font-size: 1.125rem;
            }
            .p3 {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
