<template>
  <header id="header">
    <nav id="header__nav">
      <h1 class="header__logo">
        <router-link to="/"
          ><img src="/images/roblox_logo_white_new.svg" alt="roblox logo"
        /></router-link>
      </h1>
      <ul class="header__menuBar">
        <li v-for="(menu, index) in menus" :key="index">
          <router-link
            :to="menu.to"
            v-if="!menu.submenus"
            @click="toggleSubMenu(index)"
          >
            {{ menu.name }}
          </router-link>

          <p v-else @click="toggleSubMenu(index)" class="globe">
            <i class="fa-solid fa-globe"></i>
          </p>

          <ul v-if="activeMenu === index" class="globeLanguage">
            <li v-for="(submenu, subIndex) in menu.submenus" :key="subIndex">
              {{ submenu }}
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menus: [
        { name: "구성원소개", to: "/members" },
        { name: "뉴스", to: "/news" },
        { name: "TECH TALKS", to: "/techtalks" },
        { name: "에듀케이션", to: "education" },
        { name: "인재채용", to: "careers" },
        {
          name: "globe",
          submenus: ["한국어", "English"],
        },
      ],
      activeMenu: null,
    };
  },
  methods: {
    toggleSubMenu(index) {
      if (this.activeMenu === index) {
        this.activeMenu = null;
      } else {
        this.activeMenu = index;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#header {
  position: fixed;
  width: 100%;
  top: 10px;
  left: 0;
  z-index: 99;
}

#header__nav {
  margin: 0 auto;
  max-width: 960px;
  height: 80px;
  display: flex;
  align-items: center;
  background: #30303099;
  border-radius: 15px;
  // justify-content: left;
  position: relative;

  .header__logo {
    // aspect-ratio: 200/37;
    width: 15%;
    img {
      height: 16px;
      padding-left: 30px;
    }
  }
  .header__menuBar {
    font-size: 16px;

    width: 85%;
    display: flex;
    justify-content: space-around;
    li {
      a,
      p {
        position: relative;
        padding: 0px 12px;
        line-height: 80px;
        color: #f2f3f4;
        border-bottom: 3px solid transparent;

        &:hover {
          &::before,
          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            height: 3px;
            width: 50%;
          }

          &::before {
            left: 0;
            background: linear-gradient(
              to left,
              rgba(255, 0, 0, 1),
              rgba(255, 0, 0, 0)
            );
          }

          &::after {
            right: 0;
            background: linear-gradient(
              to right,
              rgba(255, 0, 0, 1),
              rgba(255, 0, 0, 0)
            );
          }
        }
      }
    }
  }
}

.globe {
  // position: relative;
}
.globeLanguage {
  // display: none;
  position: absolute;
  top: 110%;
  right: 0px;
  background: #000000;
  border-radius: 15px;
  color: #f2f3f4;
  display: flex;
  justify-content: space-around;
  width: 150px;
  li {
    padding: 0px;
    line-height: 50px;
    &:hover {
      color: #f00;
    }
  }
}
</style>
