<template>
  <section>
    <div class="row">
      <div class="textBox" :class="{ dark: changeDarkMode }">
        <h3>{{ $t("[5].memberstile.h3") }}</h3>
        <h4>{{ $t("[5].memberstile.h4") }}</h4>
        <p>
          {{ $t("[5].memberstile.p") }}
        </p>
      </div>
      <div class="tileBox" :class="{ dark: changeDarkMode }">
        <div class="tileBoxHidden">
          <div
            class="imgContainer"
            v-for="(item, idx) in colContainer"
            :key="idx"
          >
            <div class="imgBox1" v-for="(val, idx) in item.col" :key="idx">
              <div class="imgBox2"><img :src="val.image" :alt="val.alt" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MembersTile",
  data() {
    return {
      colContainer: [
        {
          col: [
            {
              image: "./images/members-1/people_1_Thumbnail.jpg",
              alt: "멤버 이미지1",
            },
            {
              image: "./images/members-1/people_2_Thumbnail.jpg",
              alt: "멤버 이미지2",
            },
            {
              image: "./images/members-1/people_3_Thumbnail.jpg",
              alt: "멤버 이미지3",
            },
            {
              image: "./images/members-1/people_4_Thumbnail.jpg",
              alt: "멤버 이미지4",
            },
          ],
        },
        {
          col: [
            {
              image: "./images/members-1/people_5_Thumbnail.jpg",
              alt: "멤버 이미지5",
            },
            {
              image: "./images/members-1/people_6_Thumbnail.jpg",
              alt: "멤버 이미지6",
            },
            {
              image: "./images/members-1/people_7_Thumbnail.jpg",
              alt: "멤버 이미지7",
            },
            {
              image: "./images/members-1/people_8_1_Thumbnail.jpg",
              alt: "멤버 이미지8",
            },
            {
              image: "./images/members-1/people_9_Thumbnail.jpg",
              alt: "멤버 이미지9",
            },
          ],
        },
        {
          col: [
            {
              image: "./images/members-1/people_10_Thumbnail.jpg",
              alt: "멤버 이미지10",
            },
            {
              image: "./images/members-1/people_11_Thumbnail.jpg",
              alt: "멤버 이미지11",
            },
            {
              image: "./images/members-1/people_12_Thumbnail.jpg",
              alt: "멤버 이미지12",
            },
            {
              image: "./images/members-1/people_13_Thumbnail.jpg",
              alt: "멤버 이미지13",
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
  display: flex;
  .textBox {
    word-break: keep-all;
    flex: 50%;
    color: #dee2e6;
    font-weight: normal;
    padding: 100px 0;
    margin: 64px 80px 64px 176px;
    &.dark {
      color: #121110;
    }
    h3 {
      font-size: 15px;
      font-weight: 400;
    }
    h4 {
      font-size: 48px;
      font-weight: 500;
      padding: 52px 0 32px 0;
    }
    p {
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 20px;
    }
  }
  .tileBox {
    flex: 50%;
    position: relative;
    overflow: hidden;
    height: 640px;
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
    &.dark {
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
          white 0%,
          white 5%,
          rgba(255, 255, 255, 0) 100%
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
          white 0%,
          white 5%,
          rgba(255, 255, 255, 0) 100%
        );
      }
    }
    .tileBoxHidden {
      position: absolute;
      top: -150px;
      right: -100px;
      display: flex;

      align-items: center;
      overflow: hidden;

      .imgContainer {
        display: flex;
        flex-direction: column;
        transform: rotate(15deg);
        width: 100%;
        height: 100%;

        .imgBox1 {
          // margin: 0 7px;
          margin: 0 4%;
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
  @media screen and (max-width: 390px) {
    display: block;
    .textBox {
      padding: 0px 0;
      margin: 20px;
      h3 {
        font-size: 15px;
        font-weight: 400;
      }
      h4 {
        font-size: 48px;
        font-weight: 500;
        padding: 30px 0 16px 0;
      }
      p {
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 20px;
      }
    }
    .tileBox {
      position: relative;
      overflow: hidden;
      height: 300px;
      .tileBoxHidden {
        position: absolute;
        top: -150px;
        right: 10px;
        left: 10px;
        display: flex;

        align-items: center;
        overflow: hidden;

        .imgContainer {
          display: flex;
          flex-direction: column;
          transform: rotate(15deg);
          width: 100%;
          height: 100%;

          .imgBox1 {
            // margin: 0 7px;
            margin: 0 4%;
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
  }
}
</style>
