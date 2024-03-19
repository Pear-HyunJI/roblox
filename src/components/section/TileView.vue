<template>
  <section>
    <div class="row">
      <h2 :class="{ dark: changeDarkMode }">
        사람들을 한자리에 모으는
        <br />
        새로운 방법
      </h2>
      <div class="tileBox" :class="{ dark: changeDarkMode }">
        <div
          class="imgContainer"
          v-for="(item, idx) in colContainer"
          :key="idx"
        >
          <div class="imgBox1" v-for="(val, idx) in item.col" :key="idx">
            <div class="imgBox2"><img :src="val.image1" :alt="val.alt" /></div>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TileView",
  data() {
    return {
      colContainer: [
        {
          col: [
            {
              image1: "./images/tile-1/header_1_Thumbnail.jpg",
              alt: "타일 이미지1",
            },
            {
              image1: "./images/tile-1/header_2_Thumbnail.jpg",
              alt: "타일 이미지2",
            },
            {
              image1: "./images/tile-1/experience_2_Thumbnail.jpg",
              alt: "타일 이미지3",
            },
          ],
        },
        {
          col: [
            {
              image1: "./images/tile-2/experience_5_Thumbnail.jpg",
              alt: "타일 이미지4",
            },
            {
              image1: "./images/tile-2/header_5_Thumbnail.jpg",
              alt: "타일 이미지5",
            },
            {
              image1: "./images/tile-2/header_6_Thumbnail.jpg",
              alt: "타일 이미지6",
            },
            {
              image1: "./images/tile-2/temp_1_Thumbnail.jpg",
              alt: "타일 이미지7",
            },
          ],
        },
        {
          col: [
            {
              image1: "./images/tile-3/header_8_Thumbnail.jpg",
              alt: "타일 이미지4",
            },
            {
              image1: "./images/tile-3/header_9_Thumbnail.jpg",
              alt: "타일 이미지5",
            },
            {
              image1: "./images/tile-3/header_10_2_Thumbnail.jpg",
              alt: "타일 이미지6",
            },
            {
              image1: "./images/tile-3/header_11_Thumbnail.jpg",
              alt: "타일 이미지7",
            },
          ],
        },
        {
          col: [
            {
              image1: "./images/tile-4/header_11_Thumbnail (1).jpg",
              alt: "타일 이미지8",
            },
            {
              image1: "./images/tile-4/header_14_Thumbnail.jpg",
              alt: "타일 이미지9",
            },
            {
              image1: "./images/tile-4/header_20_Thumbnail.jpg",
              alt: "타일 이미지10",
            },
          ],
        },
        {
          col: [
            {
              image1: "./images/tile-5/header_15_Thumbnail.jpg",
              alt: "타일 이미지11",
            },
            {
              image1: "./images/tile-5/header_16_Thumbnail.jpg",
              alt: "타일 이미지12",
            },
            {
              image1: "./images/tile-5/header_18_Thumbnail.jpg",
              alt: "타일 이미지13",
            },
            {
              image1: "./images/tile-5/temp_2_Thumbnail.jpg",
              alt: "타일 이미지14",
            },
          ],
        },
        {
          col: [
            {
              image1: "./images/tile-6/experience_1_Thumbnail.jpg",
              alt: "타일 이미지15",
            },
            {
              image1: "./images/tile-6/experience_3_Thumbnail.jpg",
              alt: "타일 이미지16",
            },
            {
              image1: "./images/tile-6/header_3_2_Thumbnail.jpg",
              alt: "타일 이미지17",
            },
            {
              image1: "./images/tile-6/header_12_Thumbnail.jpg",
              alt: "타일 이미지18",
            },
          ],
        },
        {
          col: [
            {
              image1: "./images/tile-7/experience_9_Thumbnail.jpg",
              alt: "타일 이미지19",
            },
            {
              image1: "./images/tile-7/header_24_Thumbnail.jpg",
              alt: "타일 이미지20",
            },
            {
              image1: "./images/tile-7/temp_4_Thumbnail.jpg",
              alt: "타일 이미지21",
            },
          ],
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
.row {
  h2 {
    color: #dee2e6;
    text-align: center;
    font-size: 4rem;
    margin: 5.5rem 0;
    &.dark {
      color: #121110;
    }
  }

  .tileBox {
    display: flex;
    position: relative;
    height: 720px;
    align-items: center;
    overflow: hidden;
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
      z-index: 10;
      bottom: -2px;
      background: linear-gradient(
        0deg,
        #121110 0%,
        #121110 5%,
        rgba(18, 17, 16, 0) 100%
      );
    }
    &.dark {
      &::before {
        background: linear-gradient(
          180deg,
          white 0%,
          white 5%,
          rgba(255, 255, 255, 0) 100%
        );
      }
      &::after {
        background: linear-gradient(
          0deg,
          white 0%,
          white 5%,
          rgba(255, 255, 255, 0) 100%
        );
      }
    }

    .imgContainer {
      display: flex;
      flex-direction: column;
      transform: rotate(15deg);
      animation: fadeInUp 3s;
      .imgBox1 {
        margin: 0 7px;
        .imgBox2 {
          margin: 7px 0;
          img {
            border-radius: 10px;
            transition: all 0.3s;
          }
          img:hover {
            transform: scale(1.05);
          }
        }
      }
    }
  }
}

@keyframes fadeInUp {
  0% {
    transform: translateY(175%); /* Combine translate and rotate */
  }
  to {
    transform: translateY(0%) rotate(15deg); /* Combine translateZ and rotate */
  }
}
</style>
