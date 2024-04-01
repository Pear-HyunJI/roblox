<template>
  <div class="boardWrite" :class="{ dark: changeDarkMode }">
    <div class="write__title">
      <h2>
        <i class="fa-regular fa-pen-to-square"></i>&nbsp;{{
          $t("[3].boarddetail.ask")
        }}
      </h2>
    </div>
    <form @submit.prevent="onSubmit">
      <table border="1">
        <colgroup>
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <td>{{ $t("[3].boarddetail.writer") }}</td>
            <td>
              <input
                type="text"
                v-model="writer"
                disabled
                :class="{ dark: changeDarkMode }"
              />
            </td>
            <td>
              <input
                type="text"
                v-model="date"
                disabled
                :class="{ dark: changeDarkMode }"
              />
            </td>
          </tr>
          <tr>
            <td>{{ $t("[3].boarddetail.title") }}</td>

            <td colspan="2">
              <input
                type="text"
                v-model="subject"
                maxlength="55"
                :class="{ dark: changeDarkMode }"
              />
            </td>
          </tr>
          <tr>
            <td>{{ $t("[3].boarddetail.content") }}</td>
            <td colspan="2">
              <textarea
                v-model="content"
                :class="{ dark: changeDarkMode }"
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="btn">
        <button type="submit">{{ $t("[3].boarddetail.writingout") }}</button>
        <router-link to="/qna">{{ $t("[3].boarddetail.list") }}</router-link>
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
        status: false,
      });
      this.$router.push("/qna");
    },
  },
  created() {
    this.writer = this.$store.getters.fnGetLogined.name;
    this.date = dayjs().format("YYYY-MM-DD");
  },
  computed: {
    changeDarkMode() {
      return this.$store.getters.fnGetDark;
    },
  },
};
</script>

<style lang="scss" scoped>
.boardWrite {
  color: #dee2e6;
  max-width: 900px;
  margin: 0 auto 50px;
  &.dark {
    color: #121110;
  }
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
        &.dark {
          color: #121110;
          background: #dee2e6;
        }
      }
      textarea {
        width: 100%;
        border: 1px solid #ddd;
        padding: 5px;
        height: 200px;
        &.dark {
          background: #dee2e6;
        }
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
  @media screen and (max-width: 390px) {
    margin: 0 10px;
    .write__title {
      font-size: 20px;
      text-align: center;
      h2 {
        margin-bottom: 80px;
      }
    }
  }
}
</style>
