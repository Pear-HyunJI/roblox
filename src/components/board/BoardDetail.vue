<template>
  <div class="board__detail" :class="{ dark: changeDarkMode }">
    <div class="detail__title">
      <h2>Q&A</h2>
    </div>
    <div class="go__to__list">
      <router-link to="/qna" :class="{ dark: changeDarkMode }"
        >목록</router-link
      >
    </div>
    <table border="1">
      <colgroup>
        <col />
        <col />
      </colgroup>
      <tbody>
        <tr>
          <td colspan="2">제목 {{ item.subject }}</td>
          <td colspan="1" v-if="!answerList">답변 대기중</td>
          <td colspan="1" v-else>답변 완료</td>
        </tr>
        <tr>
          <td>작성자: {{ item.writer }}</td>
          <td>작성일: {{ item.date }}</td>
          <td>조회수: {{ item.hit }}</td>
        </tr>
        <tr>
          <td colspan="3" class="content">
            <pre>{{ item.content }}</pre>
          </td>
        </tr>
      </tbody>
    </table>

    <table
      v-if="answerList"
      class="answer__list"
      :class="{ dark: changeDarkMode }"
    >
      <tbody>
        <tr>
          <td class="answer__top">
            <p>답변입니다.</p>
            <p>작성일: {{ answerList?.date }}</p>
          </td>
        </tr>
        <tr>
          <td>
            <pre>{{ answerList?.answer }}</pre>
          </td>
        </tr>
      </tbody>
    </table>
    <form
      @submit.prevent="answerPost"
      v-if="show && !answerList"
      class="answer__post"
    >
      <p>'{{ item.subject }}'에 답변달기</p>
      <textarea v-model="answer"></textarea>
      <div class="answer__btn">
        <button type="submit">답변 올리기</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: null,
      managerDate: "",
      answer: "",
      answerList: null,
      managerEamil: "",
    };
  },
  created() {
    this.$store.commit("hit__Update", this.$route.params.id);
    this.item = this.$store.getters.fnGetBoardList.find(
      (item) => item.id === this.$route.params.id
    );
    this.answerList = this.$store.getters.fnGetAnswerList.find(
      (item) => item.id === this.$route.params.id
    );
    this.managerEamil = this.$store.getters.fnGetLogined.email;
  },
  computed: {
    show() {
      if (this.managerEamil === "manager@gmail.com") {
        return true;
      } else {
        return false;
      }
    },
    changeDarkMode() {
      return this.$store.getters.fnGetDark;
    },
  },
  methods: {
    answerPost() {
      this.$store.commit("on__answer", {
        answer: this.answer,
        id: this.$route.params.id,
      });
      this.answerList = this.$store.getters.fnGetAnswerList.find(
        (item) => item.id === this.$route.params.id
      );
      console.log(this.answerList);
    },
  },
};
</script>

<style lang="scss" scoped>
.board__detail {
  color: #dee2e6;
  max-width: 900px;
  margin: 0 auto 50px;
  &.dark {
    color: #121110;
  }
  .detail__title {
    font-size: 30px;
    text-align: center;
  }
  table {
    .content {
      color: #000;
      height: 300px;
      vertical-align: top;
      background: #dbdee0;
      padding: 10px;
      pre {
        white-space: pre-wrap;
      }
    }
    td {
      padding: 10px;
    }
  }
  .go__to__list {
    text-align: right;
    margin: 30px 0 20px;
    a {
      transition: all 0.3s;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      padding: 10px;
      &:hover {
        transform: translateY(-3px);
      }
      &.dark {
        border-color: #121110;
      }
    }
  }
  textarea {
    width: 100%;
    height: 400px;
    background: #fff;
  }
  .answer__list {
    margin-top: 20px;
    border: 1px solid #dee2e6;
    &.dark {
      border-color: #121110;
    }
    .answer__top {
      padding: 20px 10px;
      p {
        &:nth-child(1) {
          font-weight: bold;
          font-size: 20px;
        }
        &:nth-child(2) {
          font-size: 13px;
        }
      }
    }
  }
  .answer__post {
    margin-top: 20px;
    p {
      font-weight: bold;
      font-size: 20px;
    }
    textarea {
      height: 250px;
    }
    .answer__btn {
      text-align: right;
      margin-top: 10px;
      button {
        padding: 10px 20px;
        border-radius: 8px;
        background: #dee2e6;
        font-size: 14px;
        color: #121110;
        font-weight: bold;
        border: 1px solid #dee2e6;
        &:hover {
          border: 1px solid #bebebe;
        }
      }
    }
  }
  @media screen and (max-width: 390px) {
    margin: 0 10px;
    .detail__title {
      font-size: 20px;
      text-align: center;
    }
    table {
      tr {
        font-size: 13px;
        td {
          &:nth-child(1) {
            width: 275px;
          }
          &:nth-child(2) {
            width: auto;
          }
          &:nth-child(3) {
            width: 20px;
          }
        }
      }
    }
  }
}
</style>
