<template>
  <div>
    <members-tile />
    <value-of-roblox />
    <manager
      v-if="showManager"
      class="manager"
      @showDetailManager="showDetailManager"
    />
    <DetailManager
      v-if="showDetail"
      class="detailManager"
      :clickedCard="clickedCard"
    />
    <ceo />
    <button @click="abc">123</button>
  </div>
</template>

<script>
import MembersTile from "@/components/members/MembersTile.vue";
import ValueOfRoblox from "@/components/members/ValueOfRoblox.vue";
import Manager from "@/components/members/Manager.vue";
import Ceo from "@/components/members/Ceo.vue";
import DetailManager from "@/components/members/DetailManager.vue";
export default {
  name: "Members",
  components: { MembersTile, ValueOfRoblox, Manager, DetailManager, Ceo },
  data() {
    return {
      showManager: true,
      showDetail: false,
      // zIndex1: 1,
      // zIndex2: 0,
      clickedCard: "",
    };
  },
  methods: {
    showDetailManager(name) {
      // this.showManager = false;
      this.showDetail = true;
      this.clickedCard = name;
      // this.zIndex1 = 0;
      // this.zIndex2 = 1;
    },
    abc() {
      console.log(this.clickedCard);
    },
  },
};
</script>

<style lang="scss" scoped>
// .manager {
//   position: relative;
// }
// .detailManager {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// }
</style>
