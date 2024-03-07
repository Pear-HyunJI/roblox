<template>
  <div>
    <members-tile />
    <value-of-roblox />
    <manager />
    <ceo />
  </div>
</template>

<script>
import MembersTile from "@/components/members/MembersTile.vue";
import ValueOfRoblox from "@/components/members/ValueOfRoblox.vue";
import Manager from "@/components/members/Manager.vue";
import Ceo from "@/components/members/Ceo.vue";
export default {
  name: "Members",
  components: { MembersTile, ValueOfRoblox, Manager, Ceo },
};
</script>

<style lang="scss" scoped></style>
