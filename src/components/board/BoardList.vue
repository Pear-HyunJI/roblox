<template>
  <div class="boardList">
    <table border="1">
      <colgroup>
        <col />
        <col />
        <col />
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in showList" :key="idx">
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
  color: #fff;
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
    th {
      padding: 5px;
    }
    td {
      padding: 5px;
      text-align: center;
      &:nth-child(2) {
        text-align: left;
      }
    }
  }
  .btn {
    text-align: center;
    margin: 20px 0;
    a {
      padding: 10px 20px;
      background: red;
      color: #fff;
    }
  }
}
</style>
