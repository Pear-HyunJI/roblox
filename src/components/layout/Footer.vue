<template>
  <footer :class="{ dark: changeDarkMode }">
    <div class="row">
      <h2>
        <img src="../../assets/images/roblox_logo_white_new.svg" alt="1" />
      </h2>
      <div class="info__wrapper">
        <nav>
          <h4 @click="companyClick">
            {{ $t("[2].company") }}
            <i
              class="fa-solid fa-angle-down"
              :class="{ 'fa-solid fa-angle-up': companyUpDown }"
            ></i>
          </h4>
          <ul
            class="info__wrapper__company"
            :class="{ company__on: companyUpDown }"
          >
            <li>
              <router-link to="/careers">{{ $t("[2].careers") }}</router-link>
            </li>
            <li>
              <a
                href="https://ir.roblox.com/overview/default.aspx"
                target="_blank"
                >{{ $t("[2].investor relations") }}</a
              >
            </li>
            <li>
              <a href="https://blog.roblox.com/" target="_blank">{{
                $t("[2].blog")
              }}</a>
            </li>
          </ul>
        </nav>
        <nav>
          <h4 @click="resourcesClick">
            {{ $t("[2].resources") }}
            <i
              class="fa-solid fa-angle-down"
              :class="{ 'fa-solid fa-angle-up': resourcesUpDown }"
            ></i>
          </h4>
          <ul
            class="info__wrapper__resources"
            :class="{ resources__on: resourcesUpDown }"
          >
            <li>
              <router-link to="/education">{{
                $t("[2].education")
              }}</router-link>
            </li>
            <li>
              <a href="https://corporate.roblox.com/faq/" target="_blank">{{
                $t("[2].faq")
              }}</a>
            </li>
            <li>
              <a href="https://corporate.roblox.com/contact/" target="_blank">{{
                $t("[2].contact")
              }}</a>
            </li>
            <li>
              <a
                href="https://en.help.roblox.com/hc/en-us/articles/115004647846-Roblox-Terms-of-Use"
                target="_blank"
                >{{ $t("[2].terms") }}</a
              >
            </li>
            <li>
              <a
                href="https://en.help.roblox.com/hc/en-us/articles/115004630823-Roblox-Privacy-and-Cookie-Policy"
                target="_blank"
                >{{ $t("[2].privacy") }}</a
              >
            </li>
          </ul>
          <ul class="notice">
            <li>
              <a
                href="https://corporate.roblox.com/job-applicant-privacy-notice/"
                target="_blank"
                >{{ $t("[2].applications") }}</a
              >
            </li>
            <li>
              <a href="#" target="_blank">{{ $t("[2].accessibility") }}</a>
            </li>
          </ul>
        </nav>
        <span
          >&#169; &#38; &#8482; 2024 Roblox Corporation. All Rights
          Reserved.</span
        >
      </div>
      <div>
        <div class="info__sns">
          <a href="#" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" target="_blank"><i class="fa-brands fa-twitter"></i></a>
          <a href="#" target="_blank"><i class="fa-brands fa-youtube"></i></a>
          <a href="#" target="_blank"><i class="fa-brands fa-twitch"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      companyUpDown: false,
      resourcesUpDown: false,
    };
  },
  computed: {
    changeDarkMode() {
      return this.$store.getters.fnGetDark;
    },
  },
  methods: {
    companyClick() {
      this.companyUpDown = !this.companyUpDown;
    },
    resourcesClick() {
      this.resourcesUpDown = !this.resourcesUpDown;
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  footer {
    color: white;
    padding: 7rem 0;
    &.dark {
      background: radial-gradient(circle, #dfdfdf 1px, transparent 1px), white;
      background-position: 0 0, 25px 25px;
      background-size: 2rem 2rem;
      color: #121110;
    }
    .row {
      max-width: calc(1280px - 9rem);
      h2 {
        img {
          background: #121110;
          padding: 10px;
          border-radius: 8px;
          width: 120px;
        }
      }
      .info__wrapper {
        position: relative;
        display: flex;
        justify-content: space-between;
        padding: 3rem 0 0;
        font-size: 1rem;
        nav {
          padding-bottom: calc(1rem + 1px);
          margin-bottom: 1rem;
          h4 {
            padding: 1rem 0 0.5rem;
            font-size: 1.25rem;
          }
          span {
            i {
              color: white;
            }
          }
          .info__wrapper__company {
            display: flex;
          }
          .info__wrapper__resources {
            display: flex;
          }
          p {
            padding-top: 5rem;
            margin-top: 1rem;
          }
          .notice {
            display: flex;
            padding-top: 5rem;
            margin-top: 1rem;
          }
        }
        span {
          position: absolute;
          bottom: 3rem;
          right: unset;
          font-size: 0.75rem;
        }
      }
      .info__wrapper::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 8rem;
        background: linear-gradient(
          90deg,
          rgba(99, 71, 255, 0) 0%,
          #6347ff 52.99%,
          rgba(99, 71, 255, 0) 100%
        );
        height: 1px;
      }
      .info__sns {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #162227;
        border-radius: 8px;
        margin-top: 1rem;
        padding: 0 24px;
        min-height: 5rem;
        color: white;
        a {
          cursor: default;
        }
        i {
          margin: 20px 40px;
        }
        i:hover {
          color: #6347ff;
          cursor: pointer;
        }
      }
    }
  }
  @media screen and (max-width: 390px) {
    footer {
      text-align: center;
      padding: 0;
      margin-top: 7rem;
      .row {
        h2 {
          img {
            width: 160px;
          }
        }
        .info__wrapper {
          display: block;
          nav {
            .info__wrapper__company {
              display: none;
              &.company__on {
                display: block;
              }
            }
            .info__wrapper__resources {
              display: none;
              &.resources__on {
                display: block;
              }
            }
            .notice {
              justify-content: center;
              font-size: 0.7rem;
              a {
                padding: 0 1rem;
              }
            }
          }
          span {
            bottom: 4rem;
            right: 0;
            left: 0;
            text-align: center;
          }
        }
      }
    }
  }
}

li {
  padding: 1rem 0;
}

li:not(:last-child) {
  padding-right: 2.25rem;
  @media screen and (max-width: 390px) {
    padding-right: 0;
  }
}

a:hover {
  color: #6347ff;
}
</style>
