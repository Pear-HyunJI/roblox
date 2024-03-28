import dayjs from "dayjs";

export default {
  state: {
    boardList: [], // { id: 연번호, subject: 제목, writer: 작성자, date: 날짜, content: 내용, hit: 0, status: false }
    answerList: [], // {answer: "답변", id: 2, date: "날짜"}
  },
  mutations: {
    on__Insert(state, payload) {
      let { writer, date, subject, content, status } = payload;
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
        status,
      });
    },
    on__answer(state, payload) {
      let date = dayjs().format("YYYY-MM-DD");
      state.answerList.push({ answer: payload.answer, id: payload.id, date });
      state.boardList.filter((item) => item.id === payload.id)[0].status = true;
    },
    hit__Update(state, payload) {
      state.boardList.map((item) => {
        if (item.id == payload) {
          console.log(item.id, item.hit);
          item.hit = item.hit + 1;
        }
      });
    },
  },

  getters: {
    fnGetBoardList: (state) => state.boardList,
    fnGetAnswerList: (state) => state.answerList,
  },
};
