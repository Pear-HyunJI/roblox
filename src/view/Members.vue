<template>
  <div>
    <members-tile />
    <value-of-roblox />
    <manager
      v-if="showManager"
      class="manager"
      @showDetailManager="showDetailManager"
      :clickedCard.sync="clickedCard"
      :class="{ active: showDetail }"
    />
    <detail-manager
      class="detailManager"
      :clickedCard.sync="clickedCard"
      :class="{ active: showDetail }"
      @closeDetail="closeDetail"
    />
    <ceo />
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
      clickedCard: "",
    };
  },
  methods: {
    showDetailManager(name) {
      this.showDetail = true;
      this.clickedCard = name;
    },
    closeDetail() {
      this.showDetail = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#detailView {
  position: fixed;
  right: 0;
  top: 15px;
  z-index: 9999;
  color: #121110;
  transform: translateX(800px);
  transition: all 0.5s;
  &.active {
    transform: translateX(0px);
  }
}

.manager {
  &.active {
    opacity: 0.5;
  }
}
</style>
