<template>
  <section class="row" id="detailView">
    <div class="detail__wrapper">
      <div v-for="(detailItem, index) in detailCardData" :key="index">
        <div class="detail__card" v-if="clickedCard === detailItem.name">
          <img :src="detailItem.img" :alt="detailItem.name" />
          <h3>{{ $t(detailItem.name) }}</h3>
          <span>{{ $t(detailItem.position) }}</span>
          <div class="all__content">
            <p>{{ $t(detailItem.content) }}</p>
            <br />
            <br />
            <p>{{ $t(detailItem.detail1) }}</p>
            <br />
            <br />
            <p>{{ $t(detailItem.detail2) }}</p>
          </div>
          <button @click="closeDetail">
            {{ $t("[5].detailmanager.close") }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DetailManager",
  props: ["clickedCard"],
  data() {
    return {
      detailCardData: [
        {
          img: "./assets/images/members-1/managers/Dave_Baszucki_Thumbnail_Large.jpg",
          position: "[5].detailmanager.first-position",
          name: "[5].detailmanager.first-name",
          content: "[5].detailmanager.first-content",
          detail1: "[5].detailmanager.first-detail1",
          detail2: "[5].detailmanager.first-detail2",
        },
        {
          img: "./assets/images/members-1/managers/Manuel_Bronstein_Thumbnail_Large.jpg",
          position: "[5].detailmanager.second-position",
          name: "[5].detailmanager.second-name",
          content: "[5].detailmanager.second-content",
          detail1: "[5].detailmanager.second-detail1",
          detail2: "[5].detailmanager.second-detail2",
        },
        {
          img: "./assets/images/members-1/managers/Mike_Guthrie_Thumbnail_Large.jpg",
          position: "[5].detailmanager.third-position",
          name: "[5].detailmanager.third-name",
          content: "[5].detailmanager.third-content",
          detail1: "[5].detailmanager.third-detail1",
          detail2: "[5].detailmanager.third-detail2",
        },
        {
          img: "./assets/images/members-1/managers/Matt_Kaufman_Thumbnail_Large.jpg",
          position: "[5].detailmanager.fourth-position",
          name: "[5].detailmanager.fourth-name",
          content: "[5].detailmanager.fourth-content",
          detail1: "[5].detailmanager.fourth-detail1",
          detail2: "[5].detailmanager.fourth-detail2",
        },
        {
          img: "./assets/images/members-1/managers/Arvind_KC2.jpg",
          position: "[5].detailmanager.fifth-position",
          name: "[5].detailmanager.fifth-name",
          content: "[5].detailmanager.fifth-content",
          detail1: "[5].detailmanager.fifth-detail1",
          detail2: "[5].detailmanager.fifth-detail2",
        },
        {
          img: "./assets/images/members-1/managers/Manuel_Bronstein_Thumbnail_Large.jpg",
          position: "[5].detailmanager.sixth-position",
          name: "[5].detailmanager.sixth-name",
          content: "[5].detailmanager.sixth-content",
          detail1: "[5].detailmanager.sixth-detail1",
          detail2: "[5].detailmanager.sixth-detail2",
        },
        {
          img: "./assets/images/members-1/managers/Mark_Reinstra_Thumbnail_Large.jpg",
          position: "[5].detailmanager.seventh-position",
          name: "[5].detailmanager.seventh-name",
          content: "[5].detailmanager.seventh-content",
          detail1: "[5].detailmanager.seventh-detail1",
          detail2: "[5].detailmanager.seventh-detail2",
        },
        {
          img: "./assets/images/members-1/managers/Dan_Sturman_Thumbnail_Large.jpg",
          position: "[5].detailmanager.eighth-position",
          name: "[5].detailmanager.eighth-name",
          content: "[5].detailmanager.eighth-content",
          detail1: "[5].detailmanager.eighth-detail1",
          detail2: "[5].detailmanager.eighth-detail2",
        },
        {
          img: "./assets/images/members-1/managers/Christina_Wootton.png",
          position: "[5].detailmanager.ninth-position",
          name: "[5].detailmanager.ninth-name",
          content: "[5].detailmanager.ninth-content",
          detail1: "[5].detailmanager.ninth-detail1",
          detail2: "[5].detailmanager.ninth-detail2",
        },
        {
          img: "./assets/images/members-1/managers/Shobhana_Ahluwalia.jpg",
          position: "[5].detailmanager.tenth-position",
          name: "[5].detailmanager.tenth-name",
          content: "[5].detailmanager.tenth-content",
          detail1: "[5].detailmanager.tenth-detail1",
          detail2: "[5].detailmanager.tenth-detail2",
        },
        {
          img: "./assets/images/members-1/managers/Brooks_Evans.png",
          position: "[5].detailmanager.eleventh-position",
          name: "[5].detailmanager.eleventh-name",
          content: "[5].detailmanager.eleventh-content",
          detail1: "[5].detailmanager.eleventh-detail1",
          detail2: "[5].detailmanager.eleventh-detail2",
        },
        {
          img: "./assets/images/members-1/managers/Morgan_McGuire.png",
          position: "[5].detailmanager.twelfth-position",
          name: "[5].detailmanager.twelfth-name",
          content: "[5].detailmanager.twelfth-content",
          detail1: "[5].detailmanager.twelfth-detail1",
          detail2: "[5].detailmanager.twelfth-detail2",
        },
      ],
    };
  },
  methods: {
    closeDetail() {
      this.$emit("closeDetail");
    },
  },
};
</script>

<style lang="scss" scoped>
#detailView {
  .detail__wrapper {
    overflow: hidden;
    .detail__card {
      overflow-y: scroll;
      max-width: 800px;
      height: calc(100vh - 7rem);
      padding: 4rem 0.5rem 6rem 4rem;
      background: #c5c7c6;
      border-radius: 8px 8px 8px 0;
      img {
        border-radius: 8px 8px 8px 0;
        margin-bottom: 3rem;
        width: 245px;
        height: 245px;
      }
      h3 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      span {
        display: block;
        font-size: 1rem;
        margin-bottom: 3rem;
      }
      .all__content {
        p {
          font-size: 1rem;
        }
      }
      button {
        position: absolute;
        top: 30px;
        right: 50px;
        font-size: 18px;
        padding-bottom: 12px;
        background: none;
        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 3px;
          background-color: #162227;
          transition: width 250ms ease-in;
        }

        &:hover {
          &::after {
            background-color: #6347ff;
          }
        }
      }
      @media screen and (max-width: 390px) {
        width: 390px;
        height: calc(100vh);
        padding: 3rem 3rem 6rem 3rem;
        button {
          top: 10px;
          right: 15px;
          font-size: 15px;
        }
      }
    }
  }
}
</style>
