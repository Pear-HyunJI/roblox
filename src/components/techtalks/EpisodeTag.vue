<template>
  <section id="ep__tag">
    <div class="tag__list" v-for="(item, index) in mediaTag" :key="index">
      <button
        :class="{ active: activeName == item.class }"
        type="button"
        @click="onClick(item.class)"
      >
        <i :class="item.class"></i>
        <p>{{ item.name }}</p>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "EpisodeTag",
  data() {
    return {
      activeName: "",
      mediaTag: [
        { name: "팟캐스트", class: "fa-solid fa-podcast" },
        { name: "스포티파이", class: "fa-brands fa-spotify" },
        { name: "유튜브", class: "fa-brands fa-youtube" },
      ],
    };
  },
  methods: {
    onClick(value) {
      this.activeName = value;
      this.$emit("onSearch", value);
      this.$store.commit("on__UpdateCurrent", 1);
    },
  },
};
</script>

<style lang="scss" scoped>
#ep__tag {
  display: flex;
  justify-content: center;
  .tag__list {
    padding: 0 40px;
    margin-bottom: 50px;
    button {
      background: none;
      color: #dee2e6;
      border: 2px solid #dee2e6;
      border-radius: 8px 8px 8px 0;
      padding: 1rem 1.5rem;
      transition: all 0.5s;
      &.active,
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
      i {
        font-size: 40px;
        padding: 5px;
      }
    }
  }
}
</style>
