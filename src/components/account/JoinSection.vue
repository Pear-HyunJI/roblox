<template>
  <div class="join__section">
    <form @submit.prevent="fnRegisterUser">
      <div class="wrapper">
        <div class="wrapper__title" :class="{ dark: changeDarkMode }">
          {{ $t("[3].joinSection.RJoin") }}
        </div>
        <div class="wrapper__info">
          <i class="fa-solid fa-envelope" :class="{ dark: changeDarkMode }"></i>
          <input
            class="wrapper__input"
            :class="{ dark: changeDarkMode }"
            :placeholder="$t('[3].joinSection.emailPlaceholder')"
            v-model="dEmail"
            ref="email"
            @input="inputEmail()"
          />
          <div class="error" :class="{ on: existEmailClass }">
            {{ $t("[3].joinSection.errorExistEmail") }}
          </div>
          <div class="error" :class="{ on: emailClass }">
            {{ $t("[3].joinSection.errorFormatEmail") }}
          </div>
        </div>
        <div class="wrapper__info">
          <i class="fa-solid fa-user" :class="{ dark: changeDarkMode }"></i>
          <input
            class="wrapper__input"
            :class="{ dark: changeDarkMode }"
            :placeholder="$t('[3].joinSection.namePlaceholder')"
            v-model="dName"
            ref="name"
          />
          <div class="error"></div>
        </div>
        <div class="wrapper__info">
          <i class="fa-solid fa-lock" :class="{ dark: changeDarkMode }"></i>
          <input
            type="password"
            class="wrapper__input"
            :class="{ dark: changeDarkMode }"
            :placeholder="$t('[3].joinSection.pwPlaceholder')"
            v-model="dPassword"
            ref="pw"
          />
          <div class="error"></div>
        </div>
        <div class="wrapper__info">
          <i class="fa-solid fa-check" :class="{ dark: changeDarkMode }"></i>
          <input
            type="password"
            class="wrapper__input"
            :class="{ dark: changeDarkMode }"
            :placeholder="$t('[3].joinSection.pwConfirmPlaceholder')"
            v-model="dPasswordOk"
            ref="pwOk"
            @input="inputPwOk"
          />
          <div class="error" :class="{ on: passwordMismatch }">
            {{ $t("[3].joinSection.errorMismatch") }}
          </div>
        </div>

        <div class="divideLine" :class="{ dark: changeDarkMode }"></div>
        <button class="registerBtn" type="submit">{{ $t("[3].join") }}</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dEmail: "",
      dName: "",
      dPassword: "",
      dPasswordOk: "",

      existEmailClass: false,
      isValidEmail: true,

      passwordMismatch: false,
      existEmail: [],
    };
  },
  created() {
    this.existEmail = this.$store.getters.fnGetOuser;
  },
  computed: {
    emailClass() {
      return !this.isValidEmail && !this.emailEmpty;
    },
    changeDarkMode() {
      return this.$store.getters.fnGetDark;
    },
  },
  methods: {
    fnRegisterUser() {
      if (!this.dEmail) {
        this.$refs.email.focus();
        alert(this.$t("[3].joinSection.emailPlaceholder"));
        return false;
      } else if (this.dEmail.indexOf("@") < 0) {
        this.$refs.email.focus();
        alert(this.$t("[3].joinSection.errorFormatEmail"));
        return false;
      } else if (!this.dName) {
        this.$refs.name.focus();
        alert(this.$t("[3].joinSection.namePlaceholder"));
        return false;
      } else if (!this.dPassword) {
        this.$refs.pw.focus();
        alert(this.$t("[3].joinSection.pwPlaceholder"));
        return false;
      } else if (!this.dPasswordOk) {
        this.$refs.pwOk.focus();
        alert(this.$t("[3].joinSection.pwPlaceholder"));
        return false;
      } else if (this.dPassword !== this.dPasswordOk) {
        this.$refs.pwOk.focus();
        alert(this.$t("[3].joinSection.errorMismatch"));
        return false;
      }
      this.$store.commit("fnRegisterUser", {
        email: this.dEmail,
        name: this.dName,
        pw: this.dPassword,
      });
      if (this.$store.getters.fnGetMessage) {
        this.dEmail = "";
        this.dName = "";
        this.dPassword = "";
        this.dPasswordOk = "";
        this.$router.push("/loginView");
        alert(this.$t("[3].joinSection.joinDone"));
      } else {
        alert(this.$t("[3].joinSection.errorExistEmail"));
      }
    },
    inputEmail(e) {
      if (this.dEmail.indexOf("@") > -1) {
        this.isValidEmail = true;
      } else {
        this.isValidEmail = false;
      }

      this.existEmail.map((item) => {
        if (item.email !== this.dEmail) {
          this.existEmailClass = false;
        } else {
          this.existEmailClass = true;
          e.preventDefault();
        }
      });
      console.log(this.existEmail);
    },
    inputPwOk() {
      if (this.dPassword !== this.dPasswordOk) {
        this.passwordMismatch = true;
      } else {
        this.passwordMismatch = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.join__section {
  display: flex;
  justify-content: center;
  .wrapper {
    width: 540px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    .wrapper__title {
      font-size: 32px;
      font-weight: 700;
      line-height: 47px;
      letter-spacing: 0em;
      text-align: left;
      color: #dadada;
      margin: 60px 0px;
      &.dark {
        color: #121110;
      }
    }
    .wrapper__info {
      margin: 15px 0;
      i {
        color: #dadada;
        margin-right: 20px;
        font-size: 20px;
        &.dark {
          color: #121110;
        }
      }
      .wrapper__input {
        width: 340px;
        height: 60px;
        border-radius: 7px;
        border: 1px solid #dadada;
        &.dark {
          border-color: #121110;
        }
      }
      .error {
        display: none;
        color: red;
        height: 10px;
        font-size: 14px;
        margin: 5px 0 10px 40px;
        &.on {
          display: block;
        }
      }
    }
    .divideLine {
      width: 380px;
      border-bottom: 1px solid #dadada;
      margin: 30px 0px 20px 0px;
      &.dark {
        border-color: #121110;
      }
    }
    .registerBtn {
      width: 380px;
      height: 75px;
      border: 1px solid #121110;
      border-radius: 10px;
      background-color: white;
      color: #121110;
      cursor: pointer;
      font-weight: bold;
    }
  }
  @media screen and (max-width: 390px) {
    .wrapper {
      width: 100%;
    }
  }
}
</style>
