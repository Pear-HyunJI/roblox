<template>
  <div class="board__detail">
    <div class="go__to__list">
      <router-link to="/qna">목록</router-link>
    </div>
    <table border="1">
      <colgroup>
        <col />
        <col />
      </colgroup>
      <tbody>
        <tr>
          <td colspan="2">제목 {{ item.subject }}</td>
          <td colspan="1">답변 기다리는 중</td>
        </tr>
        <tr>
          <td>작성자: {{ item.writer }}</td>
          <td>작성일: {{ item.date }}</td>
          <td>조회수: {{ item.hit }}</td>
        </tr>
        <tr>
          <td colspan="3">{{ item.content }}</td>
        </tr>
      </tbody>
    </table>

    <table border="1" v-if="answerList">
      <tbody>
        <tr>
          <td>답변입니다.</td>
        </tr>
        <tr>
          <td>작성일: {{ answerList?.date }}</td>
        </tr>
        <tr>
          <td>내용{{ answerList?.answer }}</td>
        </tr>
      </tbody>
    </table>
    <form @submit.prevent="answerPost" v-if="show && !answerList">
      <p>'{{ item.subject }}'에 답변달기</p>
      <textarea v-model="answer"></textarea>
      <button type="submit">답변 올리기</button>
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
      if (this.managerEamil === "manger@gmail.com") {
        return true;
      } else {
        return false;
      }
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
  color: #fff;
  max-width: 1000px;
  margin: 0 auto 50px;
  .go__to__list {
    text-align: right;
    margin-bottom: 20px;
    a {
      border: 1px solid #fff;
      border-radius: 8px;
      padding: 10px;
    }
  }
  textarea {
    width: 100%;
    height: 400px;
    background: #fff;
  }
}
</style>
