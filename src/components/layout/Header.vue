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
            <li
              v-for="(submenu, subIndex) in menu.submenus"
              :key="subIndex"
              @click="changeLanguage(submenu.en)"
            >
              {{ submenu.ko }}
            </li>
          </ul>
        </li>
        <p :class="a ? 'dark__mode' : 'light__mode'" @click="onOff">
          <i class="fa-solid fa-moon"></i>
          <span>다크 모드</span>
        </p>
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
          submenus: [
            { ko: "한국어", en: "ko" },
            { ko: "English", en: "en" },
          ],
        },
      ],
      activeMenu: null,
      a: false,
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

    changeLanguage(locale) {
      this.$i18n.locale = locale; // 언어 변경
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
    a {
      display: flex;
      align-items: center;
      img {
        height: 16px;
        padding-left: 30px;
      }
    }
  }
  .header__menuBar {
    font-size: 16px;
    width: 85%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      a {
        position: relative;
        padding: 0px 12px;
        line-height: 80px;
        color: #f2f3f4;

        &::before,
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          height: 3px;
          width: 50%;
          transition: all 0.5s;
          opacity: 0;
        }
        &::before {
          left: 0;
          background: linear-gradient(
            to left,
            rgba(99, 71, 255, 1),
            rgba(255, 0, 0, 0)
          );
        }

        &::after {
          right: 0;
          background: linear-gradient(
            to right,
            rgba(99, 71, 255, 1),
            rgba(255, 0, 0, 0)
          );
        }

        &:hover,
        &.router-link-exact-active {
          &::before,
          &::after {
            opacity: 1;
          }
        }
      }
      p {
        position: relative;
        padding: 0px 12px;
        line-height: 80px;
        color: #f2f3f4;
        cursor: pointer;
      }
    }
    .dark__mode {
      padding: 0px 12px;
      line-height: 80px;
      color: rgb(242, 243, 244);
      display: flex;
      align-items: center;
      cursor: pointer;
      border-radius: 20px;
      box-shadow: 0 0 1rem rgba(242, 243, 244, 0.2);
      height: 50px;
      i {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        background: rgb(211, 202, 191);
        color: #f2f3f4;
        font-size: 14px;
        margin-right: 10px;
        border-radius: 50%;
      }
      span {
        font-size: 14px;
        font-weight: bold;
        color: #f2f3f4;
      }
    }
    .light__mode {
      padding: 0px 12px;
      line-height: 80px;
      color: #fff;
      display: flex;
      align-items: center;
      cursor: pointer;
      border-radius: 20px;
      // box-shadow: 0 0 1rem rgba(242, 243, 244, 0.2);
      height: 50px;
      i {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        background: rgb(77, 77, 77);
        color: rgb(182, 182, 182);
        font-size: 14px;
        margin-right: 10px;
        border-radius: 50%;
      }
      span {
        font-size: 14px;
        font-weight: bold;
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
  right: 10%;
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
      color: #6347ff;
    }
  }
}
</style>
