<template>
  <div class="news__main">
    <div class="row">
      <div class="news__main__wrapper">
        <h3 :class="{ dark: changeDarkMode }">{{ $t("[6].latestnews") }}</h3>
        <div class="header__news">
          <div class="header__news__right" :class="{ on: !windowWidth }">
            <img
              :src="getImg(headerNews[currentPage - 1][0]?.urlToImage)"
              :alt="headerNews[currentPage - 1][0]?.source.name"
            />
          </div>
          <div class="header__news__left">
            <h3>{{ headerNews[currentPage - 1][0]?.title }}</h3>
            <p>{{ headerNews[currentPage - 1][0]?.description }}</p>
            <a :href="headerNews[currentPage - 1][0]?.url" target="_blank"
              >계속 읽기</a
            >
          </div>
          <div class="header__news__right" :class="{ on: windowWidth }">
            <img
              :src="getImg(headerNews[currentPage - 1][0]?.urlToImage)"
              :alt="headerNews[currentPage - 1][0]?.source.name"
            />
          </div>
        </div>
        <div class="news__wrapper">
          <div
            class="news__card"
            v-for="(item, idx) in pageNews[currentPage - 1]"
            :key="idx"
          >
            <div class="card__img">
              <img :src="getImg(item.urlToImage)" :alt="item.source.name" />
            </div>
            <h3>{{ item.title }}</h3>
            <a :href="item.url" target="_blank">{{ $t("[6].readmore") }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsMain",
  props: ["newsData", "headerNews", "pageNews", "currentPage"],
  data() {
    return {
      placeholder: "./assets/images/cardnews-1/TechTalks_evergreen_2x.jpg",
      winWidth: 0,
    };
  },
  created() {
    this.winWidth = window.innerWidth;
  },
  computed: {
    changeDarkMode() {
      return this.$store.getters.fnGetDark;
    },
    windowWidth() {
      return window.innerWidth > 390 ? true : false;
    },
  },
  methods: {
    getImg(src) {
      return src ? src : this.placeholder;
    },
  },
};
</script>

<style lang="scss" scoped>
.news__main {
  color: #f2f4f3;
  .row {
    .news__main__wrapper {
      max-width: calc(1280px - 9rem);
      margin: 0 auto;
      h3 {
        font-size: 2.5rem;
        &.dark {
          color: #121110;
        }
      }
      .header__news {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 3rem;
        padding: 4rem;
        background: #162227;
        border-radius: 8px 8px 8px 0;
        transition: all 0.3s;
        &:hover {
          transform: scale(1.1);
        }
        .header__news__left {
          flex: 1 1 55%;
          margin-left: 30px;
          h3 {
            margin-bottom: 2.25rem;
            word-break: keep-all;
          }
          p {
            font-size: 1rem;
          }
          a {
            position: relative;
            bottom: unset;
            left: unset;
            margin-top: 2rem;
            transition: all 0.5s;
            &:hover::before {
              max-width: 100%;
              background-color: #6347ff;
            }
            &::before {
              content: "";
              position: absolute;
              height: 2px;
              width: 100%;
              bottom: -10px;
              transition: 0.25s all ease-out;
              background-color: currentColor;
              max-width: 3rem;
            }
          }
        }
        .header__news__right {
          flex: 0 1 40%;
          &.on {
            display: none;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px 8px 8px 0;
          }
        }
      }
      .news__wrapper {
        display: flex;
        flex-wrap: wrap;
        .news__card {
          position: relative;
          flex: 0 1 27.6%;
          margin: 3rem 2rem;
          background: #dee2e6;
          border-radius: 8px 8px 8px 0;
          padding: 2rem 2rem 6rem;
          transition: all 0.3s;
          &:hover {
            transform: scale(1.1);
          }
          .card__img {
            margin-bottom: 2rem;
            img {
              width: 100%;
              height: 200px;
              object-fit: cover;
              border-radius: 8px 8px 8px 0;
            }
          }
          h3 {
            word-break: keep-all;
            font-size: 1.5rem;
            color: #121110;
            margin-bottom: 2.25rem;
          }
          a {
            position: absolute;
            bottom: 2rem;
            left: 2rem;
            transition: all 0.5s;
            color: #121110;
            &:hover::before {
              max-width: 100%;
              background-color: #6347ff;
            }
            &::before {
              content: "";
              position: absolute;
              height: 2px;
              width: 100%;
              bottom: -10px;
              transition: 0.25s all ease-out;
              background-color: currentColor;
              max-width: 3rem;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 390px) {
    color: #f2f4f3;
    .row {
      .news__main__wrapper {
        & > h3 {
          text-align: center;
        }
        .header__news {
          display: block;
          .header__news__left {
            margin-left: 0px;
            h3 {
              margin-bottom: 2rem;
              font-size: 1.5rem;
            }
            p {
              font-size: 0.7rem;
            }
          }
        }
        .news__wrapper {
          display: block;
          .news__card {
            h3 {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
}
</style>
