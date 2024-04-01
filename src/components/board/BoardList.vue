<template>
  <div>
    <div class="board__title" :class="{ dark: changeDarkMode }">
      <h2>Q&amp;A</h2>
      <div class="write__wrapper">
        <router-link
          to="/qnawrite"
          class="goToWrite"
          :class="{ dark: changeDarkMode }"
          v-if="logined"
          >글쓰기</router-link
        >
      </div>
    </div>
    <div class="boardList" :class="{ dark: changeDarkMode }">
      <table>
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr :class="{ dark: changeDarkMode }">
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>진행현황</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, idx) in qnaData[currentPage - 1]"
            :key="idx"
            :class="{ dark: changeDarkMode }"
          >
            <td>{{ item.id }}</td>
            <td>
              <router-link
                :to="{ name: 'qnadetail', params: { id: item.id } }"
                >{{ item.subject }}</router-link
              >
            </td>
            <td>{{ item.writer }}</td>
            <td v-if="!item.status">답변 대기중</td>
            <td v-else>답변 완료</td>
            <td>{{ item.hit }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="MboardList" :class="{ dark: changeDarkMode }">
      <div
        class="mobile__wrapper"
        :class="{ dark: changeDarkMode }"
        v-for="(item, idx) in qnaData[currentPage - 1]"
        :key="idx"
      >
        <div class="board__left">
          <router-link :to="{ name: 'qnadetail', params: { id: item.id } }">{{
            item.subject
          }}</router-link>
          <p>{{ item.writer }}</p>
        </div>
        <div class="board__right">
          <p v-if="!item.status">답변 대기중</p>
          <p v-else>답변완료</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["qnaData", "currentPage"],
  data() {
    return {
      name: "",
      count: 0,
      answerList: null,
      logined: false,
    };
  },
  created() {
    this.logined = this.$store.getters.fnGetLogined;
    this.count = this.$store.getters.fnGetBoardList.length;
    console.log(this.qnaData[0]);
  },
  // computed: {
  //   showList() {
  //     return this.$store.getters.fnGetBoardList;
  //   },
  //   // matchedItem(id) {
  //   //   return this.answerList.map(item=>item).includes(id);
  //   // },
  // },
  methods: {
    countMinus(index) {
      return this.count - index;
    },
  },
  computed: {
    changeDarkMode() {
      return this.$store.getters.fnGetDark;
    },
  },
};
</script>

<style lang="scss" scoped>
.board__title {
  text-align: center;
  font-size: 30px;
  color: #dee2e6;
  &.dark {
    color: #121110;
  }
  .write__wrapper {
    text-align: right;
    margin: 30px 0 20px;
    font-size: 16px;
    a {
      transition: all 0.3s;
      &:hover {
        transform: translateY(-3px);
      }
    }
    .goToWrite {
      border: 1px solid #dee2e6;
      border-radius: 8px;
      padding: 10px;
      &.dark {
        border-color: #121110;
      }
    }
  }
  @media screen and (max-width: 390px) {
    font-size: 25px;
    margin: 0 10px;

    // padding-bottom: 30px;
    border-bottom: 1px solid #fff;
    &.dark {
      border-color: #121110;
    }
    .write__wrapper {
      font-size: 13px;
    }
  }
}
.boardList {
  color: #dee2e6;
  margin: 0px 0 50px;
  &.dark {
    color: #121110;
  }
  table {
    col:nth-child(1) {
      width: 50px;
    }
    col:nth-child(2) {
      width: auto;
    }
    col:nth-child(3) {
      width: 200px;
    }
    col:nth-child(4) {
      width: 100px;
    }
    col:nth-child(5) {
      width: 100px;
    }
    col:nth-child(6) {
      width: 100px;
    }
    th {
      padding: 10px 0;
    }
    td {
      padding: 15px 0;
      text-align: center;
      &:nth-child(2) {
        text-align: left;
        padding-left: 20px;
      }
    }
    thead {
      tr {
        border-bottom: 2px solid #ddd;
        &.dark {
          border-color: #121110;
        }
      }
    }
    tbody {
      tr {
        border-bottom: 1px solid #d3d3d355;
        &.dark {
          border-color: #121110;
        }
      }
    }
  }
  // .btn {
  //   text-align: center;
  //   margin: 20px 0;
  //   a {
  //     padding: 10px 20px;
  //     background: red;
  //     color: #dee2e6;
  //   }
  // }
  @media screen and (max-width: 390px) {
    display: none;
  }
}
.MboardList {
  display: none;
  @media screen and (max-width: 390px) {
    display: block;
    color: #dee2e6;
    margin: 0 10px;
    &.dark {
      color: #121110;
    }
    .mobile__wrapper {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ffffff50;
      padding: 15px 10px;
      &.dark {
        border-color: #12111055;
      }
      .board__left {
        a {
          width: 230px;
          margin-bottom: 10px;
          font-weight: bold;
          word-break: keep-all;
        }
        p {
          font-size: 12px;
        }
      }
      .board__right {
        display: flex;
        align-items: center;
        p {
          font-size: 14px;
          padding: 7px;
          border-radius: 8px;
          background: #ddd;
          color: #000;
        }
      }
    }
  }
}
</style>
