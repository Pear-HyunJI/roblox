import dayjs from "dayjs";

export default {
  state: {
    boardList: [
      {
        id: 13,
        subject: "자녀의 계정을 보호하고 싶어요.",
        writer: "user1",
        date: "2024-04-03",
        content:
          "자녀의 계정을 더욱 안전하게 보호하기 위해 할 수 있는 일은 무엇인가요?",
        hit: 1,
        status: false,
      },
      {
        id: 12,
        subject: "채팅 시스템 문의",
        writer: "user1",
        date: "2024-04-02",
        content: "Roblox의 채팅 시스템은 어떤 방식으로 작동하나요?",
        hit: 0,
        status: false,
      },
      {
        id: 11,
        subject: "타사 프로그램 동시 사용 문의",
        writer: "user1",
        date: "2024-04-02",
        content:
          "자녀가 Roblox 외부에서 다른 사람과 이야기하기 위해 타사 프로그램을 사용하는 경우 어떻게 해야 할까요?",
        hit: 0,
        status: false,
      },
      {
        id: 10,
        subject: "다른 공식 사이트 문의",
        writer: "user1",
        date: "2024-04-02",
        content: "또 다른 공식 Roblox 웹사이트가 있나요?",
        hit: 2,
        status: false,
      },
      {
        id: 9,
        subject: "요금 문의",
        writer: "user1",
        date: "2024-04-01",
        content: "Roblox의 이용 요금은 얼마인가요?",
        hit: 0,
        status: false,
      },
      {
        id: 8,
        subject: "자녀 보호 기능 문의",
        writer: "user1",
        date: "2024-04-01",
        content: "Roblox의 자녀 보호 기능으로는 어떤 것들이 있나요?",
        hit: 0,
        status: false,
      },
      {
        id: 7,
        subject: "Roblox는 어떤 면에서 교육적인가요?",
        writer: "user1",
        date: "2024-03-31",
        content: "Roblox는 어떤 면에서 교육적인가요?",
        hit: 0,
        status: false,
      },
      {
        id: 6,
        subject: "채팅 시스템 문의",
        writer: "user1",
        date: "2024-03-29",
        content: "Roblox의 문자 채팅 시스템은 어떻게 운영되나요?",
        hit: 3,
        status: false,
      },
      {
        id: 5,
        subject: "인증 시스템 문의",
        writer: "user1",
        date: "2024-03-28",
        content: "Roblox의 연령 인증 시스템은 어떻게 운영되나요?",
        hit: 6,
        status: false,
      },
      {
        id: 4,
        subject: "제 계정이 해킹을 당했어요. 어떻게 해야 하나요?",
        writer: "user1",
        date: "2024-03-28",
        content: "비밀번호 재설정이 불가능할 경우 복구 방법 알려주세요.",
        hit: 0,
        status: false,
      },
      {
        id: 3,
        subject: "PIN을 변경하려면 어떻게 하면 되나요?",
        writer: "user1",
        date: "2024-03-28",
        content: "계정 PIN을 추가 혹은 삭제하려면 어떻게 하면 되나요?",
        hit: 0,
        status: false,
      },
      {
        id: 2,
        subject: "제 계정이 해킹을 당했어요. 어떻게 해야 하나요?",
        writer: "user1",
        date: "2024-03-27",
        content: "다른 사람이 내 계정에 PIN을 추가했다면 어떻게 해야 하나요?",
        hit: 0,
        status: false,
      },
      {
        id: 1,
        subject: "번호 추가 문의",
        writer: "user1",
        date: "2024-03-26",
        content: "전화번호를 추가하거나 변경하려면 어떻게 하면 되나요?",
        hit: 0,
        status: false,
      },
    ], // { id: 연번호, subject: 제목, writer: 작성자, date: 날짜, content: 내용, hit: 0, status: false }
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
