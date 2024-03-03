<template>
  <section>
    <div class="row">
      <h2>
        Reimagining the way <br />
        people come together.
      </h2>
      <div class="tileBox">
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
};
</script>

<style lang="scss" scoped>
.imgContainer::before {
  position: absolute;
  filter: blur(10px);
  top: 10;
  bottom: 10;
  right: 0;
  left: 0;
  z-index: -1;
}
.row {
  h2 {
    color: #fff;
    text-align: center;
  }
  .tileBox {
    display: flex;
    position: relative;
    height: 720px;
    // background: linear-gradient(rgba(0, 0, 0, 0.5));
    align-items: center;
    overflow: hidden;
    .imgContainer {
      display: flex;
      flex-direction: column;
      transform: rotate(15deg);
      .imgBox1 {
        margin: 0 7px;
        .imgBox2 {
          margin: 7px 0;
          img {
            border-radius: 10px;
          }
        }
      }
    }
  }
}
</style>
