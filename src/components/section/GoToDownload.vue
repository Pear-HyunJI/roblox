<template>
  <div class="go__to__download" :class="{ dark: changeDarkMode }">
    <div class="row">
      <div class="row__wrapper">
        <h2>{{ $t("[4].gotodownload.h2") }}</h2>
        <h5>{{ $t("[4].gotodownload.h5") }}</h5>
        <p>
          {{ $t("[4].gotodownload.p") }}
        </p>
        <div class="row__wrapper__link1">
          <a
            :href="val.link"
            target="_blank"
            v-for="(val, idx) in imgLink1"
            :key="idx"
          >
            <img :src="val.img" :alt="val.img" />
          </a>
        </div>
        <div class="row__wrapper__link2">
          <a
            :href="val.link"
            target="_blank"
            v-for="(val, idx) in imgLink2"
            :key="idx"
          >
            <img :src="val.img" :alt="val.img" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoToDownload",
  data() {
    return {
      imgLink1: [
        {
          img: "./assets/images/download-1/app-store-no-border.svg",
          link: "https://apps.apple.com/us/app/roblox/id431946152",
        },
        {
          img: "./assets/images/download-1/google-play-badge-no-border.svg",
          link: "https://play.google.com/store/apps/details?id=com.roblox.client&hl=en",
        },
        {
          img: "./assets/images/download-1/amazon-badge-no-border.svg",
          link: "https://www.amazon.com/Roblox-Corporation-ROBLOX/dp/B00NUF4YOA",
        },
      ],
      imgLink2: [
        {
          img: "./assets/images/download-2/Xbox_2019_horizontal_White_RGB-cropped.png",
          link: "https://www.microsoft.com/en-us/store/p/roblox/bq1tn1t79v9k",
        },
        {
          img: "./assets/images/download-2/microsoft-store-no-border.svg",
          link: "https://www.xbox.com/en-us/games/store/roblox/9nblgggzm6wm",
        },
        {
          img: "./assets/images/download-2/Meta_Quest.svg",
          link: "https://www.meta.com/ko-kr/experiences/5804350719675181/",
        },
        {
          img: "./assets/images/download-2/playstation.svg",
          link: "https://store.playstation.com/en-us/product/UP1821-CUSA06122_00-0000040810600000",
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
.go__to__download {
  padding: 5rem 0;
  color: #dee2e6;
  text-align: center;
  &.dark {
    background: #162227;
  }
  .row {
    max-width: calc(1280px - 9rem);
    .row__wrapper {
      h2 {
        font-size: 3rem;
        margin-bottom: 2.25rem;
      }
      h5 {
        font-size: 1.125rem;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1rem;
      }
      .row__wrapper__link1 {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
        margin: 2.75rem auto 1.5rem;
        a {
          flex: 1 0 15%;
          border: 2px solid #dee2e6;
          border-radius: 8px;
          padding: 1rem 1.5rem;
          text-align: center;
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
          img {
            height: 24px;
          }
        }
      }
      .row__wrapper__link2 {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
        margin: 0 auto 1.5rem;
        a {
          flex: 1 0 15%;
          border: 2px solid #dee2e6;
          border-radius: 8px;
          padding: 1rem 1.5rem;
          text-align: center;
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
          img {
            height: 24px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 390px) {
    padding: 3rem 0;
    .row {
      .row__wrapper {
        h2 {
          font-size: 2.5rem;
          margin-bottom: 2.25rem;
        }
        .row__wrapper__link1 {
          display: block;
          margin: 2.75rem auto 0;
          a {
            width: 80%;
            margin-bottom: 20px;
          }
        }
        .row__wrapper__link2 {
          display: block;
          margin: 0 auto;
          a {
            width: 80%;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
}
</style>
