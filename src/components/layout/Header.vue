<template>
  <header id="header">
    <div class="member" v-if="token">
      <a href="#" @click.prevent="logOut"
        >로그아웃&nbsp;&nbsp;<i class="fa-solid fa-right-from-bracket"></i
      ></a>
    </div>
    <div class="member" v-else>
      <router-link to="/loginView">로그인</router-link>
      <router-link to="/joinView">회원가입</router-link>
    </div>
    <nav id="header__nav">
      <h1 class="header__logo">
        <router-link to="/"
          ><img src="/images/roblox_logo_white_new.svg" alt="roblox logo"
        /></router-link>
      </h1>
      <div class="menu__open" @click="menuOpen">
        <span class="blind">메뉴 열기</span>
        <i :class="openClass"></i>
      </div>
      <ul class="header__menuBar" :class="{ on: openNav }">
        <li v-for="(menu, index) in menus" :key="index" @click="closeNav">
          <router-link :to="menu.to" v-if="!menu.submenus">
            {{ $t(menu.name) }}
          </router-link>

          <p v-else @click="toggleSubMenu(index)" class="globe" @click.stop>
            <i class="fa-solid fa-globe"></i>
          </p>
          <ul v-if="activeMenu === index" class="globeLanguage">
            <li
              v-for="(submenu, subIndex) in menu.submenus"
              :key="subIndex"
              @click="changeLanguage(submenu.en, index)"
              style="cursor: pointer"
            >
              {{ $t(submenu.ko) }}
            </li>
          </ul>
        </li>
        <li>
          <p
            class="dark dark__mode"
            :class="{ light: changeDarkMode }"
            @click="onOff"
            @click.stop
          >
            <i class="fa-solid fa-moon"></i>
            <span>{{ $t("[3].darkmode") }}</span>
          </p>
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
        { name: "[3].name1", to: "/members" },
        { name: "[3].name2", to: "/news" },
        { name: "[3].name3", to: "/techtalks" },
        { name: "[3].name4", to: "education" },
        { name: "[3].name5", to: "careers" },
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
      openClass: "fa-solid fa-bars",
      openNav: false,
    };
  },
  methods: {
    closeNav() {
      this.openNav = false;
      this.$emit("openNav", false);
      this.openClass = "fa-solid fa-bars";
    },
    menuOpen() {
      if (this.openClass === "fa-solid fa-bars") {
        this.openClass = "fa-solid fa-times";
        this.openNav = true;
        this.$emit("openNav", true);
      } else {
        this.openClass = "fa-solid fa-bars";
        this.openNav = false;
        this.$emit("openNav", false);
      }
    },
    toggleSubMenu(index) {
      if (this.activeMenu === index) {
        this.activeMenu = null;
      } else {
        this.activeMenu = index;
      }
      if (this.activeMenu === 1) {
      }
    },
    onOff() {
      this.$store.commit("on__ChangeDark");
    },
    changeLanguage(locale, index) {
      this.$i18n.locale = locale; // 언어 변경
      this.$store.commit("on__Click", locale);
      if (this.activeMenu === index) {
        this.activeMenu = null;
      } else {
        this.activeMenu = index;
      }
      if (this.activeMenu === 1) {
      }
    },
    logOut() {
      this.token = false;
      this.$store.commit("fnLogout");
      this.$router.push("/");
    },
  },
  computed: {
    changeDarkMode() {
      return this.$store.getters.fnGetDark;
    },
    token() {
      if (this.$store.getters.fnGetLogined) {
        return true;
      } else {
        return false;
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
  z-index: 9999999;
  .member {
    width: 960px;
    margin: 0 auto;

    text-align: right;
    color: #fff;
    a {
      padding: 10px;
    }
  }
  #header__nav {
    margin: 0 auto;
    max-width: 960px;
    height: 80px;
    display: flex;
    align-items: center;
    background: #30303099;
    border-radius: 15px;
    position: relative;

    .header__logo {
      width: 150px;
      a {
        display: flex;
        align-items: center;
        img {
          height: 16px;
          padding-left: 30px;
        }
      }
    }
    .menu__open {
      display: none;
      i {
        color: #f2f3f4;
      }
    }
    .header__menuBar {
      font-size: 16px;
      width: 85%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li {
        // border: 1px solid green;
        z-index: 999999;

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
      .globeLanguage {
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
      .dark {
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
      .light {
        padding: 0px 12px;
        line-height: 80px;
        color: #000;
        display: flex;
        align-items: center;
        cursor: pointer;
        border-radius: 20px;
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
          color: #121110;
        }
      }
    }
  }
  @media screen and (max-width: 390px) {
    position: static;
    #header__nav {
      position: relative;
      display: block;
      z-index: 99999999;
      .header__logo {
        height: 80px;
        a {
          img {
            height: 80px;
          }
        }
      }
      .menu__open {
        position: absolute;
        top: 50%;
        right: 5%;
        transform: translateY(-50%);
        display: block;
        font-size: 23px;
      }
      .header__menuBar {
        position: absolute;
        display: block;
        width: 90%;
        top: 120%;
        left: 5%;
        right: 5%;
        z-index: 9999999;
        // transform: translateY(-150%);
        background: #121110;
        border-radius: 8px;
        transition: all 0.5s;
        opacity: 0;
        overflow: hidden;
        height: 0;
        &.on {
          // transform: translateY(0);
          display: block;
          opacity: 1;
          height: auto;
        }
        li {
          width: 100%;
          display: block;
          a {
            display: block;
            width: 100%;
            text-align: center;
          }
          .dark__mode {
            display: flex;
            justify-content: center;
          }
        }
        .globeLanguage {
          // display: block;
          position: static;
          width: 100%;
          text-align: center;
        }
        .globe {
          text-align: center;
        }
      }
    }
  }
}
</style>
