<template>
  <div>
    <div class="board__title">
      <h2>Q&A</h2>
      <div class="write__wrapper">
        <router-link to="/qnawrite" class="goToWrite" v-if="logined"
          >글쓰기</router-link
        >
      </div>
    </div>
    <div class="boardList">
      <table>
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr style="border-bottom: 2px solid #ddd">
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>진행현황</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, idx) in showList"
            :key="idx"
            style="border-bottom: 1px solid #d3d3d355"
          >
            <td>{{ countMinus(idx) }}</td>
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
    <div class="MboardList">
      <div class="mobile__wrapper" v-for="(item, idx) in showList" :key="idx">
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
  },
  computed: {
    showList() {
      this.count = this.$store.getters.fnGetBoardList.length;
      return this.$store.getters.fnGetBoardList;
    },
    // matchedItem(id) {
    //   return this.answerList.map(item=>item).includes(id);
    // },
  },
  methods: {
    countMinus(index) {
      return this.count - index;
    },
  },
};
</script>

<style lang="scss" scoped>
.board__title {
  text-align: center;
  font-size: 30px;
  color: #dee2e6;
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
    }
  }
  @media screen and (max-width: 390px) {
    font-size: 25px;
    margin: 0 10px;

    // padding-bottom: 30px;
    border-bottom: 1px solid #fff;
    .write__wrapper {
      font-size: 13px;
    }
  }
}
.boardList {
  color: #dee2e6;
  margin: 0px 0 50px;

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
    .mobile__wrapper {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ffffff50;
      padding: 15px 10px;
      .board__left {
        a {
          margin-bottom: 10px;
          font-weight: bold;
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
