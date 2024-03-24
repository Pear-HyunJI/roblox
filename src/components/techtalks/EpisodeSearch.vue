<template>
  <section class="episode__search">
    <h2 :class="{ dark: changeDarkMode }">{{ $t("[7].search.h2") }}</h2>
    <div class="tech__search">
      <input
        ref="inputRef"
        type="search"
        :placeholder="$t('[7].search.placeholder')"
        @keypress="onKeyPress"
      />
      <button type="button" @click="onClick">
        {{ $t("[7].search.button") }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "EpisodeSearch",
  computed: {
    changeDarkMode() {
      return this.$store.getters.fnGetDark;
    },
  },
  methods: {
    onKeyPress(event) {
      if (event.key === "Enter") {
        this.onSearch();
      }
    },
    onClick() {
      this.onSearch();
    },
    onSearch() {
      let value = this.$refs.inputRef.value;
      if (value) {
        this.$emit("onSearch", value);
        this.$refs.inputRef.value = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.episode__search {
  padding-top: 80px;
  max-width: 1100px;
  margin: 0 auto;
}
h2 {
  color: #dee2e6;
  font-size: 40px;
  font-weight: 500;
  padding-bottom: 30px;
  &.dark {
    color: #121110;
  }
  @media screen and (max-width: 390px) {
    padding-left: 10px;
  }
}
.tech__search {
  text-align: center;
  margin-bottom: 70px;
  input {
    border: 1px solid rgba(99, 71, 255, 0.2);
    box-shadow: 0 0 1rem rgba(99, 71, 255, 0.2);
    font-size: 16px;
    padding: 10px 30px;
    border-radius: 8px;
    max-width: 300px;
    margin-right: 10px;
  }
  button {
    color: #dee2e6;
    background: #6347ff;
    border-radius: 8px;
    padding: 10px 20px;
    border: 2px solid rgba(99, 71, 255, 0.2);
    box-shadow: 0 0 1rem rgba(99, 71, 255, 0.2);
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
</style>
