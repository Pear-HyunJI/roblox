<template>
  <div class="join__section">
    <form @submit.prevent="fnRegisterUser">
      <div class="wrapper">
        <div class="wrapper__title" :class="{ dark: changeDarkMode }">
          ROBLOX 회원가입
        </div>
        <div class="wrapper__info">
          <i class="fa-solid fa-envelope" :class="{ dark: changeDarkMode }"></i>
          <input
            class="wrapper__input"
            :class="{ dark: changeDarkMode }"
            placeholder="이메일을 입력해 주세요."
            v-model="dEmail"
            ref="email"
            @input="inputEmail()"
          />
          <div class="error" :class="{ on: existEmailClass }">
            중복된 이메일입니다.
          </div>
          <div class="error" :class="{ on: emailClass }">
            올바른 형식의 이메일을 입력해주세요.
          </div>
        </div>
        <div class="wrapper__info">
          <i class="fa-solid fa-user" :class="{ dark: changeDarkMode }"></i>
          <input
            class="wrapper__input"
            :class="{ dark: changeDarkMode }"
            placeholder="이름을 입력해 주세요."
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
            placeholder="비밀번호를 입력해 주세요."
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
            placeholder="비밀번호를 다시 입력해 주세요."
            v-model="dPasswordOk"
            ref="pwOk"
            @input="inputPwOk"
          />
          <div class="error" :class="{ on: passwordMismatch }">
            비밀번호가 일치하지 않습니다.
          </div>
        </div>

        <div class="divideLine" :class="{ dark: changeDarkMode }"></div>
        <button class="registerBtn" type="submit">가입하기</button>
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
        alert("이메일을 입력하세요.");
        return false;
      } else if (this.dEmail.indexOf("@") < 0) {
        this.$refs.email.focus();
        alert("올바른 형식의 이메일을 입력해주세요.");
        return false;
      } else if (!this.dName) {
        this.$refs.name.focus();
        alert("이름을 입력하세요.");
        return false;
      } else if (!this.dPassword) {
        this.$refs.pw.focus();
        alert("비밀번호를 입력하세요.");
        return false;
      } else if (!this.dPasswordOk) {
        this.$refs.pwOk.focus();
        alert("비밀번호를 입력하세요.");
        return false;
      } else if (this.dPassword !== this.dPasswordOk) {
        this.$refs.pwOk.focus();
        alert("비밀번호가 일치하지 않습니다.");
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
        alert("회원가입이 완료되었습니다.");
      } else {
        alert("중복된이메일입니다.");
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
