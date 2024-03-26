import dayjs from "dayjs";
export default {
  state: {
    boardList: [], // { id: 연번호, subject: 제목, writer: 작성자, date: 날짜, content: 내용, hit: 0 }
  },
  mutations: {
    on__Insert(state, payload) {
      let { writer, subject, content } = payload;
      let date = dayjs().format("YYYY-MM-DD");
      let id;
      if (!state.boardList.length) {
        id = 0;
      } else {
        id = state.boardList[0].id;
      }
      state.boardList.unshift({
        id: ++id,
        subject,
        writer,
        content,
        date,
        hit: 0,
      });
    },
  },
  getters: {
    fnGetBoardList: (state) => state.boardList,
  },
};
