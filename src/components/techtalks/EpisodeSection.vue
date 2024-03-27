<template>
  <section class="row">
    <div class="card__wrapper">
      <div class="card" v-for="(item, index) in loadItem" :key="index">
        <div class="flexBox">
          <div class="span__wrap">
            <span v-if="item.num"
              >{{ $t("[7].section.span") }} {{ $t(item.num) }}</span
            >
          </div>
          <div class="image">
            <img src="/assets/images/techtalks/ep1.jpg" alt="techtalks image" />
          </div>
          <div class="text">
            <div class="topicRow">
              <h3>{{ $t(item.topic) }}</h3>
              <a :href="item.href" target="_blank"
                ><i :class="item.iconClass"></i
              ></a>
            </div>
            <h4>{{ $t("[7].section.h4") }} : {{ $t(item.guest) }}</h4>
            <p>{{ $t(item.content) }}</p>
          </div>
        </div>
      </div>
      <button class="loadMore" @click="loadMore">
        {{ $t("[7].section.leadmore") }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "EpisodeSection",
  data() {
    return {
      episodes: [
        {
          num: 1,
          topic: "[7].section.first-topic",
          guest: "[7].section.first-guest",
          content: "[7].section.first-content",
          iconClass: "fa-solid fa-podcast",
          href: "https://podcasts.apple.com/us/podcast/roblox-tech-talks/id1576801701",
        },
        {
          num: 2,
          topic: "[7].section.second-topic",
          guest: "[7].section.second-guest",
          content: "[7].section.second-content",
          iconClass: "fa-brands fa-spotify",
          href: "https://open.spotify.com/show/6MEbDMxt2IXoTRvQegwmVf",
        },
        {
          num: 3,
          topic: "[7].section.third-topic",
          guest: "[7].section.third-guest",
          content: "[7].section.third-content",
          iconClass: "fa-brands fa-spotify",
          href: "https://open.spotify.com/show/6MEbDMxt2IXoTRvQegwmVf",
        },
        {
          num: 4,
          topic: "[7].section.fourth-topic",
          guest: "[7].section.fourth-guest",
          content: "[7].section.fourth-content",
          iconClass: "fa-brands fa-spotify",
          href: "https://open.spotify.com/show/6MEbDMxt2IXoTRvQegwmVf",
        },
        {
          num: 5,
          topic: "[7].section.fifth-topic",
          guest: "[7].section.fifth-guest",
          content: "[7].section.fifth-content",
          iconClass: "fa-brands fa-youtube",
          href: "https://www.youtube.com/watch?v=Uq0UlIw8B8M",
        },
        {
          num: 6,
          topic: "[7].section.sixth-topic",
          guest: "[7].section.sixth-guest",
          content: "[7].section.sixth-content",
          iconClass: "fa-brands fa-youtube",
          href: "https://www.youtube.com/watch?v=Uq0UlIw8B8M",
        },
        {
          num: 7,
          topic: "[7].section.seventh-topic",
          guest: "[7].section.seventh-guest",
          content: "[7].section.seventh-content",
          iconClass: "fa-solid fa-podcast",
          href: "https://podcasts.apple.com/us/podcast/roblox-tech-talks/id1576801701",
        },
        {
          num: 8,
          topic: "[7].section.eighth-topic",
          guest: "[7].section.eighth-guest",
          content: "[7].section.eighth-content",
          iconClass: "fa-solid fa-podcast",
          href: "https://podcasts.apple.com/us/podcast/roblox-tech-talks/id1576801701",
        },
        {
          num: 9,
          topic: "[7].section.ninth-topic",
          guest: "[7].section.ninth-guest",
          content: "[7].section.ninth-content",
          iconClass: "fa-brands fa-youtube",
          href: "https://www.youtube.com/watch?v=Uq0UlIw8B8M",
        },
        {
          num: 10,
          topic: "[7].section.tenth-topic",
          guest: "[7].section.tenth-guest",
          content: "[7].section.tenth-content",
          iconClass: "fa-solid fa-podcast",
          href: "https://podcasts.apple.com/us/podcast/roblox-tech-talks/id1576801701",
        },
        {
          num: 11,
          topic: "[7].section.eleventh-topic",
          guest: "[7].section.eleventh-guest",
          content: "[7].section.eleventh-content",
          iconClass: "fa-brands fa-youtube",
          href: "https://www.youtube.com/watch?v=Uq0UlIw8B8M",
        },
        {
          num: 12,
          topic: "[7].section.twelfth-topic",
          guest: "[7].section.twelfth-guest",
          content: "[7].section.twelfth-content",
          iconClass: "fa-solid fa-podcast",
          href: "https://podcasts.apple.com/us/podcast/roblox-tech-talks/id1576801701",
        },
        {
          num: 13,
          topic: "[7].section.thirteenth-topic",
          guest: "[7].section.thirteenth-guest",
          content: "[7].section.thirteenth-content",
          iconClass: "fa-brands fa-spotify",
          href: "https://open.spotify.com/show/6MEbDMxt2IXoTRvQegwmVf",
        },
        {
          num: 14,
          topic: "[7].section.fourteenth-topic",
          guest: "[7].section.fourteenth-guest",
          content: "[7].section.fourteenth-content",
          iconClass: "fa-solid fa-podcast",
          href: "https://podcasts.apple.com/us/podcast/roblox-tech-talks/id1576801701",
        },
        {
          num: 15,
          topic: "[7].section.fifteenth-topic",
          guest: "[7].section.fifteenth-guest",
          content: "[7].section.fifteenth-content",
          iconClass: "fa-solid fa-podcast",
          href: "https://www.youtube.com/watch?v=Uq0UlIw8B8M",
        },
        {
          num: 16,
          topic: "[7].section.sixteenth-topic",
          guest: "[7].section.sixteenth-guest",
          content: "[7].section.sixteenth-content",
          iconClass: "fa-brands fa-youtube",
          href: "https://open.spotify.com/show/6MEbDMxt2IXoTRvQegwmVf",
        },
        {
          num: 17,
          topic: "[7].section.seventeenth-topic",
          guest: "[7].section.seventeenth-guest",
          content: "[7].section.seventeenth-content",
          iconClass: "fa-brands fa-youtube",
          href: "https://www.youtube.com/watch?v=Uq0UlIw8B8M",
        },
        {
          num: 18,
          topic: "[7].section.eighteenth-topic",
          guest: "[7].section.eighteenth-guest",
          content: "[7].section.eighteenth-content",
          iconClass: "fa-brands fa-youtube",
          href: "https://www.youtube.com/watch?v=Uq0UlIw8B8M",
        },
        {
          num: 19,
          topic: "[7].section.nineteenth-topic",
          guest: "[7].section.nineteenth-guest",
          content: "[7].section.nineteenth-content",
          iconClass: "fa-solid fa-podcast",
          href: "https://podcasts.apple.com/us/podcast/roblox-tech-talks/id1576801701",
        },
        {
          num: 20,
          topic: "[7].section.twentieth-topic",
          guest: "[7].section.twentieth-guest",
          content: "[7].section.twentieth-content",
          iconClass: "fa-brands fa-youtube",
          href: "https://www.youtube.com/watch?v=Uq0UlIw8B8M",
        },
      ],

      itemsPerPage: 4,
      currentPage: 1,
      loadItemPage: [],
    };
  },
  props: ["keyword"],

  computed: {
    loadItem() {
      this.currentPage = this.$store.getters.fnGetCurrent;

      if (!this.keyword) {
        this.loadItemPage = this.episodes.filter(
          (item, index) => index < this.itemsPerPage * this.currentPage
        );
      } else {
        let items = this.episodes.filter(
          (item) =>
            this.$t(item.topic).indexOf(this.keyword) > -1 ||
            this.$t(item.content).indexOf(this.keyword) > -1 ||
            this.$t(item.guest).indexOf(this.keyword) > -1 ||
            item.iconClass.indexOf(this.keyword) > -1
        );
        this.loadItemPage = items.filter(
          (item, index) => index < this.itemsPerPage * this.currentPage
        );
      }

      return this.loadItemPage;
    },
  },

  methods: {
    loadMore() {
      this.currentPage = this.$store.getters.fnGetCurrent;
      this.$store.commit("on__UpdateCurrent", ++this.currentPage);
    },
  },
};
</script>

<style lang="scss" scoped>
.card__wrapper {
  color: #162227;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 20px 150px;

  .card {
    margin: 10px 0;
    height: 344px;
    background: #dee2e6;
    border-radius: 8px 8px 8px 0;
    padding: 50px;
    position: relative;

    .span__wrap {
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      text-align: right;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 20px;
      letter-spacing: 0.08em;
      padding-left: 1rem;
    }
  }

  .flexBox {
    display: flex;

    .image {
      position: relative;
      flex: 23%;
      img {
        border-radius: 8px 8px 8px 0;
      }
    }
    .text {
      padding: 0 50px 0 50px;
      flex: 75%;
      .topicRow {
        display: flex;
        justify-content: space-between;
        font-size: 25px;
        a {
          padding-left: 50px;
          font-size: 35px;
          &:hover {
            color: #6347ff;
          }
        }
      }
      h4 {
        padding: 25px 0 16px 0;
      }
      p {
        font-size: 1rem;
        overflow: hidden;
        transition: all 250ms ease-in;
        text-overflow: ellipsis;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        white-space: normal;
        display: -webkit-box !important;
      }
    }
  }

  .loadMore {
    margin-top: 30px;
    font-size: 16px;
    // width: 180px;
    // height: 50px;
    padding: 15px 50px;
    color: #dee2e6;
    background: #0f0d1a;
    border: 2px solid rgba(242, 244, 243, 0.75);
    border-radius: 8px;
    text-transform: uppercase;
    transition: all 250ms linear;
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
  @media screen and (max-width: 390px) {
    margin: 10px;
    .card {
      margin: 10px 0;
      height: 500px;
      //     background: #dee2e6;
      //     border-radius: 8px 8px 8px 0;
      padding: 20px;
      //     position: relative;

      .span__wrap {
        writing-mode: horizontal-tb;
        transform: rotate(0);
        text-align: center;
        padding-bottom: 10px;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 20px;
        letter-spacing: 0.08em;
        padding-left: 0rem;
      }
    }
    .flexBox {
      height: 100%;
      display: block;
      flex-direction: column;

      .image {
        position: static;
        width: 50%;
        margin: auto;
        img {
          border-radius: 8px 8px 8px 0;
        }
      }
      .text {
        padding: 5px;
        .topicRow {
          display: flex;
          justify-content: space-between;
          font-size: 20px;
          align-items: center;
          a {
            padding-left: 50px;
            font-size: 35px;
            &:hover {
              color: #6347ff;
            }
          }
        }
        h4 {
          padding: 10px 0 16px 0;
        }
        p {
          font-size: 1rem;
          overflow: hidden;
          transition: all 250ms ease-in;
          text-overflow: ellipsis;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          white-space: normal;
          display: -webkit-box !important;
        }
      }
    }
  }
}
</style>
