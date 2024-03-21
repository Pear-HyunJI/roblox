<template>
  <section class="row">
    <h2 :class="{ dark: changeDarkMode }">
      {{ $t("[5].manager.leadership") }}
    </h2>
    <div class="card__wrapper">
      <div
        class="card"
        :class="{ dark: changeDarkMode }"
        v-for="(item, index) in cardData"
        :key="index"
      >
        <div class="card__media__wrapper">
          <div class="image" :data-category="$t(item.position)">
            <img :src="item.img" :alt="item.name" />
          </div>
        </div>

        <h3>{{ $t(item.name) }}</h3>

        <p>{{ $t(item.content) }}</p>
        <button @click="showDetailManager(item.name)">
          {{ $t("[5].manager.readmore") }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Manager",

  data() {
    return {
      cardData: [
        {
          img: "src/assets/images/members-1/managers/Dave_Baszucki_Thumbnail_Large.jpg",
          position: "[5].detailmanager.first-position",
          name: "[5].detailmanager.first-name",
          content: "[5].detailmanager.first-content",
        },
        {
          img: "src/assets/images/members-1/managers/Manuel_Bronstein_Thumbnail_Large.jpg",
          position: "[5].detailmanager.second-position",
          name: "[5].detailmanager.second-name",
          content: "[5].detailmanager.second-content",
        },
        {
          img: "src/assets/images/members-1/managers/Mike_Guthrie_Thumbnail_Large.jpg",
          position: "[5].detailmanager.third-position",
          name: "[5].detailmanager.third-name",
          content: "[5].detailmanager.third-content",
        },
        {
          img: "src/assets/images/members-1/managers/Matt_Kaufman_Thumbnail_Large.jpg",
          position: "[5].detailmanager.fourth-position",
          name: "[5].detailmanager.fourth-name",
          content: "[5].detailmanager.fourth-content",
        },
        {
          img: "src/assets/images/members-1/managers/Arvind_KC2.jpg",
          position: "[5].detailmanager.fifth-position",
          name: "[5].detailmanager.fifth-name",
          content: "[5].detailmanager.fifth-content",
        },
        {
          img: "src/assets/images/members-1/managers/Manuel_Bronstein_Thumbnail_Large.jpg",
          position: "[5].detailmanager.sixth-position",
          name: "[5].detailmanager.sixth-name",
          content: "[5].detailmanager.sixth-content",
        },
        {
          img: "src/assets/images/members-1/managers/Mark_Reinstra_Thumbnail_Large.jpg",
          position: "[5].detailmanager.seventh-position",
          name: "[5].detailmanager.seventh-name",
          content: "[5].detailmanager.seventh-content",
        },
        {
          img: "src/assets/images/members-1/managers/Dan_Sturman_Thumbnail_Large.jpg",
          position: "[5].detailmanager.eighth-position",
          name: "[5].detailmanager.eighth-name",
          content: "[5].detailmanager.eight-content",
        },
        {
          img: "src/assets/images/members-1/managers/Christina_Wootton.png",
          position: "[5].detailmanager.ninth-position",
          name: "[5].detailmanager.ninth-name",
          content: "[5].detailmanager.ninth-content",
        },
        {
          img: "src/assets/images/members-1/managers/Shobhana_Ahluwalia.jpg",
          position: "[5].detailmanager.tenth-position",
          name: "[5].detailmanager.tenth-name",
          content: "[5].detailmanager.ten-content",
        },
        {
          img: "src/assets/images/members-1/managers/Brooks_Evans.png",
          position: "[5].detailmanager.eleventh-position",
          name: "[5].detailmanager.eleventh-name",
          content: "[5].detailmanager.eleventh-content",
        },
        {
          img: "src/assets/images/members-1/managers/Morgan_McGuire.png",
          position: "[5].detailmanager.twelfth-position",
          name: "[5].detailmanager.twelfth-name",
          content: "[5].detailmanager.twelfth-content",
        },
      ],
    };
  },
  computed: {
    changeDarkMode() {
      return this.$store.getters.fnGetDark;
    },
  },
  methods: {
    showDetailManager(name) {
      this.$emit("showDetailManager", name);
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  padding: 80px 0;
}
h2 {
  margin: 0 150px;
  color: #dee2e6;
  font-size: 40px;
  font-weight: 500;
  padding-bottom: 15px;
  &.dark {
    color: #121110;
  }
}
.card__wrapper {
  color: #162227;

  margin: 0 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .card {
    margin: 30px 1%;
    flex: 0 0 29%;
    max-width: 360px;
    height: 592px;
    background: #dee2e6;
    border-radius: 8px 8px 8px 0;
    padding: 32px 32px 96px;
    transition: all 250ms ease-in;
    &:hover {
      transform: scale(1.1);
    }
    &.dark {
      background: #bdbdbd;
      color: #3b4447;
    }

    .card__media__wrapper {
      position: relative;
      .image::before {
        content: attr(data-category);
        position: absolute;
        bottom: 0;
        width: calc(100% - 1rem);
        text-align: right;
        transform: rotate(-90deg);
        transform-origin: bottom left;
        line-height: 1;
        text-transform: uppercase;
        font-size: 0.75rem;
        font-weight: 500;
        letter-spacing: 0.08em;
      }
      img {
        border-radius: 8px 8px 8px 0;
        padding: 0 0 0 10px;
      }
    }

    h3 {
      font-size: 24px;
      padding: 36px 0 36px;
    }

    p {
      font-size: 1rem;
      opacity: 0;
      overflow: hidden;
      max-height: 0px;
      transition: all 250ms ease-in;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      white-space: normal;
      display: -webkit-box !important;
    }

    &:hover p {
      opacity: 1;
      max-height: 5em;
    }

    button {
      font-size: 1rem;
      opacity: 0;
      overflow: hidden;
      max-height: 0px;
      text-overflow: ellipsis;
      white-space: nowrap;
      position: absolute;
      bottom: 20px;
      background: none;
      padding-bottom: 20px;
      border: none;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 50%; /* 초기 너비 */
        height: 2px;
        background-color: #162227;
        transition: width 250ms ease-in;
      }

      &:hover {
        &::after {
          width: 100%;
          background-color: #6347ff;
        }
      }
    }

    &:hover button {
      opacity: 1;
      max-height: 2em;
    }
  }
}
</style>
