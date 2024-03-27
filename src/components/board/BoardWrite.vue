<template>
  <div class="boardWrite">
    <div class="write__title">
      <h2><i class="fa-regular fa-pen-to-square"></i>&nbsp;질문하기</h2>
    </div>
    <form @submit.prevent="onSubmit">
      <table border="1">
        <colgroup>
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <td>작성자</td>
            <td><input type="text" v-model="writer" disabled /></td>
            <td><input type="text" v-model="date" disabled /></td>
          </tr>
          <tr>
            <td>제목</td>

            <td colspan="2">
              <input type="text" v-model="subject" maxlength="55" />
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td colspan="2"><textarea v-model="content"></textarea></td>
          </tr>
        </tbody>
      </table>
      <div class="btn">
        <button type="submit">작성</button>
        <router-link to="/qna">목록</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      writer: "",
      date: "",
      subject: "",
      content: "",
    };
  },
  methods: {
    onSubmit() {
      this.$store.commit("on__Insert", {
        writer: this.writer,
        subject: this.subject,
        content: this.content,
        date: this.date,
      });
      this.$router.push("/qna");
    },
  },
  created() {
    this.writer = this.$store.getters.fnGetLogined.name;
    this.date = dayjs().format("YYYY-MM-DD");
  },
};
</script>

<style lang="scss" scoped>
.boardWrite {
  color: #dee2e6;
  max-width: 900px;
  margin: 0 auto 50px;
  .write__title {
    font-size: 30px;
    text-align: center;
    h2 {
      margin-bottom: 93px;
    }
  }
  table {
    col:nth-child(1) {
      width: 100px;
    }
    col:nth-child(2) {
      width: auto;
    }
    td {
      padding: 5px;
      input {
        width: 100%;
        height: 30px;
        padding: 5px;
        color: #dee2e6;
        background: #121110;
      }
      textarea {
        width: 100%;
        border: 1px solid #ddd;
        padding: 5px;
        height: 200px;
      }
    }
  }
  .btn {
    text-align: center;
    margin-top: 20px;
    button,
    a {
      margin: 0 10px;
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
</style>
