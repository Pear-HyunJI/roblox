<template>
  <div class="login__section">
    <form @submit.prevent="fnLogin">
      <div class="wrapper">
        <div class="wrapper__title">ROBLOX 로그인</div>
        <div class="wrapper__info">
          <i class="fa-solid fa-envelope"></i>
          <input
            class="wrapper__input"
            placeholder="이메일을 입력해 주세요."
            v-model="dEmail"
            ref="email"
          />
        </div>
        <div class="wrapper__info">
          <i class="fa-solid fa-lock"></i>
          <input
            type="password"
            class="wrapper__input"
            placeholder="비밀번호를 입력해 주세요."
            v-model="dPassword"
            ref="pw"
          />
        </div>
        <div class="divideLine"></div>
        <button class="registerBtn" type="submit">로그인</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dEmail: "",
      dPassword: "",
    };
  },
  methods: {
    fnLogin() {
      if (!this.dEmail) {
        alert("이메일을 입력하세요.");
        this.$refs.email.focus();
        return false;
      } else if (!this.dPassword) {
        alert("비밀번호를 입력하세요.");
        this.$refs.pw.focus();
        return false;
      }
      this.$store.commit("fnLogin", {
        email: this.dEmail,
        pw: this.dPassword,
      });
      if (this.$store.getters.fnGetLogined) {
        this.$router.push("/");
      } else {
        alert("회원이 아닙니다.");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login__section {
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
    }
    .wrapper__info {
      margin: 15px 0;
      i {
        color: #dadada;
        margin-right: 20px;
        font-size: 20px;
      }
      .wrapper__input {
        width: 340px;
        height: 60px;
        border-radius: 7px;
        border: 1px solid #dadada;
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
}
</style>
