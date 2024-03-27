<template>
  <div class="boardList">
    <div class="board__title">
      <h2>Q&A</h2>
    </div>
    <div class="write__wrapper">
      <router-link to="/qnawrite" class="goToWrite">글쓰기</router-link>
    </div>
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
          <th>작성일</th>
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
            <router-link :to="{ name: 'qnadetail', params: { id: item.id } }">{{
              item.subject
            }}</router-link>
          </td>
          <td>{{ item.writer }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.hit }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      count: 0,
    };
  },
  computed: {
    showList() {
      this.count = this.$store.getters.fnGetBoardList.length;
      return this.$store.getters.fnGetBoardList;
    },
  },
  methods: {
    countMinus(index) {
      return this.count - index;
    },
  },
};
</script>

<style lang="scss" scoped>
.boardList {
  color: #dee2e6;
  margin: 0px 0 50px;
  .board__title {
    text-align: center;
    font-size: 30px;
  }
  .write__wrapper {
    text-align: right;
    margin: 30px 0 20px;
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
    th {
      padding: 10px 0;
    }
    td {
      padding: 15px 0;
      text-align: center;
      &:nth-child(2) {
        text-align: left;
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
}
</style>
