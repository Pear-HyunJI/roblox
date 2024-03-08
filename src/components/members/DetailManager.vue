<template>
  <section class="row">
    <div class="detail__wrapper">
      <div v-for="(detailItem, index) in detailCardData" :key="index">
        <div class="detail__card" v-if="clickedCard === detailItem.name">
          <img :src="detailItem.img" :alt="detailItem.name" />
          <h3>{{ detailItem.name }}</h3>
          <span>{{ detailItem.position }}</span>
          <div class="all__content">
            <p>{{ detailItem.content }}</p>
            <br />
            <br />
            <p>{{ detailItem.detail1 }}</p>
            <br />
            <br />
            <p>{{ detailItem.detail2 }}</p>
          </div>
          <button>창닫기</button>
          <button @click="goPrev">이전</button>
          <button @click="goNext">다음</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DetailManager",
  props: ["clickedCard"],
  data() {
    return {
      detailCardData: [
        {
          img: "src/assets/images/members-1/managers/Dave_Baszucki_Thumbnail_Large.jpg",
          position: "창업자 겸 최고 경영자",
          name: "데이비드 바주키(David Baszucki)",
          content:
            "데이비드 바주키는 Roblox의 창업자이자 최고 경영자입니다. 바주키의 비전은 수십억의 사용자가 서로의 경험을 공유할 수 있는 플랫폼을 구축하는 것입니다.",
          detail1:
            "Roblox는 바주키의 리더십 아래 이룩해 나가는 혁신과 비전으로 널리 인정받고 있습니다. TIME에서는 Roblox를 '가장 영향력 있는 100대 회사' 중 하나로 선정한 바 있으며, Fast Company에서는 '가장 혁신적인 회사' 및 '가장 혁신적인 게임 회사' 목록에 Roblox를 올린 바 있습니다. Roblox는 또한 Fast Company의 '혁신가를 위한 최고의 직장' 목록에도 올랐고, '디자인 부문 혁신 달성' 목록에도 이름을 올려 기술의 혁신을 인정받은 바 있습니다.",
          detail2:
            "Roblox 창업 이전에 바주키는 형제인 그레그와 함께 Knowledge Revolution이라는 회사를 설립하기도 했습니다. 당시 구축한 Interactive Physics는 교육용 물리학 및 기계 설계 시뮬레이션 소프트웨어의 선두 주자로 자리매김한 바 있습니다. 바주키는 스탠퍼드대학교 전기공학과를 제너럴 모터스 장학생으로 졸업했습니다.",
        },
        {
          img: "src/assets/images/members-1/managers/Manuel_Bronstein_Thumbnail_Large.jpg",
          position: "최고 제품 책임자",
          name: "마누엘 브론스테인(Manuel Bronstein)",
          content:
            "마누엘 브론스테인은 Roblox의 최고 제품 책임자로서 제품, 디자인, 데이터 과학 부문을 이끌고 있습니다.",
          detail1:
            "브론스테인은 소비자 및 엔터테인먼트 공간 부문의 제품 분야에서 20년 이상의 경력을 보유하고 있는 인재로, 가장 최근에는 Google의 제품 부문 부사장으로 Google 어시스턴트 부서를 이끈 바 있습니다. 이전에는 YouTube의 제품 부문 부사장으로 활약하며 YouTube의 모바일 및 데스크톱, 거실 애플리케이션 부문과 더불어 라이브 스트리밍, 성장 및 커뮤니티 부문을 두루 진두지휘했습니다. 또한 YouTube Kids, YouTube Music 및 YouTube Games 출시를 이끌기도 했습니다. YouTube 이전에 브론스테인은 Zynga 및 Xbox에서 여러 고위 관리직 직책을 역임하며 게임 분야에서의 커리어를 다져 왔습니다.",
          detail2:
            "브론스테인은 시몬볼리바르대학교에서 전자공학 학사 학위를, 캘리포니아대학교 버클리 캠퍼스의 하스경영대학원에서 MBA를 취득했습니다.",
        },
        {
          img: "src/assets/images/members-1/managers/Mike_Guthrie_Thumbnail_Large.jpg",
          position: "최고 재무 책임자",
          name: "마이크 거스리(Mike Guthrie)",
          content:
            "마이크 거스리는 Roblox의 최고 재무 책임자입니다. 글로벌 기업으로의 확장을 위한 전반적인 재무 전략을 수립하고, 지속 가능한 수익의 성장을 견인하며, 새로운 비즈니스 기회 확보에 주력하고 있습니다. 이를 위해 재무, 회계, 비즈니스 및 사업 개발 부서를 두루 관장합니다.",
          detail1:
            "Roblox 합류 전 TrueCar에서 최고 재무 책임자로 재직 당시에는 여러 차례의 민간 투자 유치로 2014년 초기 기업 공모를 진두지휘하기도 했습니다. TrueCar 이전에는 TPG 및 Garnette & Helfrich Capital에서 사모펀드 투자 전문가로 근무하며 성장자산 투자 및 미들마켓 인수를 중점적으로 담당한 바 있습니다.",
          detail2:
            "거스리는 버지니아대학교에서 경제학 학사 학위를, 스탠퍼드대학교 경영대학원에서 MBA를 취득했습니다.",
        },
        {
          img: "src/assets/images/members-1/managers/Matt_Kaufman_Thumbnail_Large.jpg",
          position: "최고 안전 책임자",
          name: "맷 코프먼(Matt Kaufman)",
          content:
            "맷 코프먼은 Roblox의 최고 안전 책임자입니다. Roblox의 안전 및 매너 관련 사안을 관장하고 제품 및 운영, 정책 관련 혁신을 주도함으로써 이곳이 모두를 위한 안전한 플랫폼이 되도록 하고, 매너 있는 가상 공간 조성을 향한 비전을 현실화하고자 노력하고 있습니다.",
          detail1:
            "20년 이상 경영진의 구성원으로 활약해 오고 있는 코프먼은 Crunchbase, Oodle, edgeio, There.com 등을 거치며, 성공적인 마켓플레이스 플랫폼, 엔터프라이즈 SaaS 애플리케이션, 대규모 멀티 플레이어 게임 구축 등을 진두지휘한 바 있습니다.",
          detail2:
            "코프먼은 캘리포니아대학교 데이비스 캠퍼스에서 기계항공공학 학사 학위를, 버지니아 공과대학교에서 항공공학 석사 학위를 취득했습니다.",
        },
        {
          img: "src/assets/images/members-1/managers/Arvind_KC2.jpg",
          position: "최고 인사·시스템 책임자",
          name: "아빈드 KC(Arvind KC)",
          content:
            "아빈드 KC는 Roblox의 최고 인사·시스템 책임자로, Roblox의 프로세스, 시스템, 경험, 문화를 발전시켜 직원이 성장하고 팀이 번창하며 최고의 잠재력을 발휘할 수 있도록 돕는 조직을 이끌고 있습니다.",
          detail1:
            "KC는 25년 이상 경영진의 구성원으로서 내부 제품 개발 팀을 지휘한 경험을 보유하고 있습니다. 경력 초기에는 반도체 기업의 공급망 시스템 구축 분야에 종사했으며, Facebook에서는 조직과 팀에서 탁월한 성과를 내는 요소를 터득하고 기술을 통해 이를 가속화하는 데 탁월한 성과를 낸 바 있습니다. Palantir에서는 최고 정보 책임자 겸 인사 책임자를 역임했으며, 최근에는 Google의 엔지니어링 부문 부사장으로서 인사 프로세스와 문화를 형성하는 제품 구축을 주도하기도 했습니다.",
          detail2:
            "KC는 뭄바이의 화학 기술 공과대학교에서 화학 공학 학사 학위를, 산타클라라 대학교에서 MBA를 취득했습니다.",
        },
        {
          img: "src/assets/images/members-1/managers/Manuel_Bronstein_Thumbnail_Large.jpg",
          position: "최고 제품 책임자",
          name: "마누엘 브론스테인(Manuel Bronstein)",
          content:
            "마누엘 브론스테인은 Roblox의 최고 제품 책임자로서 제품, 디자인, 데이터 과학 부문을 이끌고 있습니다.",
          detail1:
            "Roblox 합류 전 TrueCar에서 최고 재무 책임자로 재직 당시에는 여러 차례의 민간 투자 유치로 2014년 초기 기업 공모를 진두지휘하기도 했습니다. TrueCar 이전에는 TPG 및 Garnette & Helfrich Capital에서 사모펀드 투자 전문가로 근무하며 성장자산 투자 및 미들마켓 인수를 중점적으로 담당한 바 있습니다.",
          detail2:
            "거스리는 버지니아대학교에서 경제학 학사 학위를, 스탠퍼드대학교 경영대학원에서 MBA를 취득했습니다.",
        },
        {
          img: "src/assets/images/members-1/managers/Mark_Reinstra_Thumbnail_Large.jpg",
          position: "법무실장",
          name: "마크 레인스트라(Mark Reinstra)",
          content:
            "마크 레인스트라는 Roblox의 법무실장입니다. Roblox의 해외 시장 확장 및 개인정보 보호, 데이터 보안, 돌봄 및 안전 관련 업무를 총괄하며, Roblox의 글로벌 성장을 추진하고 이를 지원하는 팀을 이끌고 있습니다..",
          detail1:
            "Roblox 입사 전 레인스트라는 Wilson Sonsini Goodrich & Rosati에서 파트너를 지냈으며, 25년 동안 기업 및 증권법 분야에서 법무 경력을 쌓았습니다. 2005년부터는 Roblox의 외부 변호사로 일하기 시작했습니다. 현재 캘리포니아대학교 버클리 캠퍼스 법대에서 벤처 파이낸스 과목을 가르치고 있고, 스탠퍼드대학교 로스쿨 및 경영전문대학원, 그리고 캘리포니아대학교 버클리 캠퍼스의 경영대학에서 강의하기도 했습니다.",
          detail2:
            "레인스트라는 위스콘신대학교 매디슨 캠퍼스에서 산업공학 학사 학위를, 스탠퍼드대학교 로스쿨에서 법학 박사 학위를 받았습니다.",
        },
        {
          img: "src/assets/images/members-1/managers/Dan_Sturman_Thumbnail_Large.jpg",
          position: "최고 기술 책임자",
          name: "대니얼 스터먼(Daniel Sturman)",
          content:
            "Roblox의 최고 기술 책임자인 대니얼 스터먼은 앱, 엔진, 개발자, 해외 시장, 경제, 안전, 플랫폼 엔지니어링 부문에서 전 세계 최고 수준의 엔지니어링 관리자들을 이끌고 있습니다.",
          detail1:
            "Roblox 합류 전 스터먼은 Cloudera에서 엔지니어링 및 지원 부문 부사장으로 재직했고, 600명 이상의 엔지니어로 구성된 부서를 이끌며 모든 소프트웨어 개발 및 고객 지원 업무를 주도했습니다. 뿐만 아니라 Google에서 엔지니어링 부문 부사장으로 활약하며 Google Compute Engine, Google App Engine, Kubernetes를 비롯한 클라우드 제품 개발과 Google 서버를 관리하는 내부 클러스터 관리 시스템 개발을 지휘하기도 했습니다.",
          detail2:
            "스터먼은 코넬대학교에서 컴퓨터공학 학사 학위를, 일리노이대학교 어바나·샴페인 캠퍼스에서 컴퓨터공학 박사 학위를 취득했습니다.",
        },
        {
          img: "src/assets/images/members-1/managers/Christina_Wootton.png",
          position: "최고 파트너십 책임자",
          name: "크리스티나 우튼(Christina Wootton)",
          content:
            "크리스티나 우튼은 Roblox의 최고 파트너십 책임자로 재직하며 브랜드 파트너십, 비즈니스 개발, 교육 부문을 주도하고 있습니다. 디지털 패션 및 뷰티를 통해 자신을 표현하고, 함께 배우며, 인기 브랜드 및 인재와 더불어 엔터테인먼트 및 음악, 스포츠를 체험할 수 있는 새로운 생태계를 만드는 데 중점을 두고 있습니다.",
          detail1:
            "15년 이상의 파트너십 및 디지털 광고 분야의 경력을 바탕으로 우튼은 각 브랜드가 이곳 몰입형 공간에서 전 세계 사람들과 어울려 함께 참여하며 소통하는 방식을 혁신하는 데 중요한 역할을 해왔습니다. 특히 Fortune 500대 기업과 최고의 브랜드 및 인재(Gucci, Nike, Netflix, Disney, Warner Bros, NFL, 칼리 클로스, 엘튼 존 등)와 협업하며 혁신 및 창의적인 파트너십을 주도한 바 있습니다. Roblox 합류 이전에는 Stardoll Media에서 각 브랜드와의 파트너십을 통한 엔터테인먼트 혁신과 디지털 광고 부문을 이끌며 아바타 맞춤 설정, 디지털 패션 아이템 쇼핑, 브랜드의 가상 캐릭터 및 제품과의 상호 작용이 가능한 콘텐츠 제작을 담당하기도 했습니다.",
          detail2: "우튼은 캘리포니아 롱비치주립대학교를 졸업했습니다.",
        },
        {
          img: "src/assets/images/members-1/managers/Shobhana_Ahluwalia.jpg",
          position: "부사장 겸 최고 정보 책임자",
          name: "쇼바나 알루왈리아(Shobhana Ahluwalia)",
          content:
            "Roblox의 최고 정보 책임자인 쇼바나 (숍즈) 알루왈리아(Shobhana (Shobz) Ahluwalia)는 원활한 소비자급 기술 경험을 제공해 전 세계 Roblox 직원에게 최고 수준의 생산성과 혁신을 제공하는 일을 담당하고 있습니다.",
          detail1:
            "Roblox 합류 이전에 알루왈리아는 온디맨드 피트니스 기업인 Peloton의 최고 정보 책임자로 재직하며, 고객 생애 가치와 기업 사이버 보안 태세에 긍정적인 영향을 주기 위한 엔터프라이즈 디지털 혁신을 주도한 바 있습니다. 이전에는 온디맨드 로지스틱스 및 운송 회사인 Uber Technologies에서 최고 정보 책임자를 역임하며 글로벌 IT 운영 및 서비스를 담당하기도 했습니다. Uber 이전에는 Rocket Fuel, CNET, CBS Corporation에서 정보 기술 부문을 진두지휘한 경력 또한 보유하고 있습니다.",
          detail2:
            "알루왈리아는 기술 분야 스타트업 생태계의 적극적인 투자자이자 고문으로 활동하고 있습니다. 소외 계층 커뮤니티의 기술 및 리더십에 대한 열정적인 지지자이기도 합니다. 알루왈리아는 인도 방갈로르의 공과대학에서 컴퓨터 과학 학사 학위를 취득했으며, 펜실베이니아대학교 와튼 경영대학원에서 전략 및 재무 복수 전공으로 경영학 석사 학위를 취득했습니다.",
        },
        {
          img: "src/assets/images/members-1/managers/Brooks_Evans.png",
          position: "부사장 겸 최고 정보 보안 책임자",
          name: "브룩스 에반스(Brooks Evans)",
          content:
            "Roblox의 부사장 겸 최고 정보 보안 책임자인 에반스는 Roblox를 안전한 회사 및 플랫폼으로 유지하는 데 필요한 모든 요소를 담당하고 있습니다.",
          detail1:
            "Roblox에 합류하기 전에는 Netflix의 정보 보안 분야 이사로 재직하며 회사 및 스튜디오 정보 보안, 신원 및 액세스 관리, 거버넌스, 리스크, 규정 준수, 위협 인텔리전스, 탐지 및 대응, 사용자 중심 보안 UX 팀 등 엔터프라이즈 보안에 중점을 둔 엔지니어 조직을 이끌었습니다. Netflix 이전에는 Apple에서 인시던트 대응 부서를 담당한 바 있으며, 아칸소주 복지부의 최고 보안 책임자, 미국 국가안보국의 엔지니어, Alltel 및 Pinnacle Labs에서 보안 및 엔지니어링 직책을 역임했습니다.",
          detail2:
            "에반스는 애리조나주 어드밴스드 테크놀로지 대학교에서 정보 보증 석사 학위를, 리틀록에 위치한 아칸소 대학교에서 컴퓨터공학 학사 학위를 취득했습니다.",
        },
        {
          img: "src/assets/images/members-1/managers/Morgan_McGuire.png",
          position: "부사장 겸 최고 과학자",
          name: "모건 맥과이어(Morgan McGuire)",
          content:
            "맥과이어 교수는 Roblox의 모든 연구 그룹을 조율하고 Roblox 연구 및 게임 엔진 제품의 엔지니어링 개발을 직접 관리함으로써 Roblox의 혁신을 가속화합니다.",
          detail1:
            "맥과이어는 네트워킹 및 컴파일러에서부터 3D 그래픽에 이르기까지 컴퓨터공학의 다양한 영역을 아우르는 수백 개의 논문과 특허를 공동 집필했으며 '컴퓨터 그래픽: 원리 및 실습(Computer Graphics: Principles & Practice)' 3판, '더 그래픽스 코덱스(The Graphics Codex)', '게임 제작(Creating Games)' 등 여러 교재를 집필한 바 있습니다. 또한 컴퓨터 그래픽 기술 저널(Journal of Computer Graphics Techniques)을 공동 창립했으며 ACM SIGGRAPH NPAR, I3D, HPG 및 기타 여러 컨퍼런스의 의장을 맡기도 했습니다. Morgan의 개발에 기여한 제품에는 NVIDIA RTXGI, Reflex SDK, RTX GPU, 스카이랜더스®, 콜 오브 듀티®, 마블 얼티밋 얼라이언스®, 타이탄 퀘스트® 비디오 게임 시리즈, Unity 게임 엔진, Amazon Kindle®에 사용되는 E Ink 디스플레이, 오픈 소스 G3D 이노베이션 엔진, Markdeep 문서 시스템 등이 있습니다.",
          detail2:
            "맥과이어는 현재 워털루 대학교와 맥길 대학교에서 교수직을 맡고 있으며, 윌리엄스 대학교에서 정교수로 재직했고, 브라운 대학교에서 컴퓨터공학 석사 및 박사 학위를, MIT에서 전기공학 학사 및 석사 학위를 받았습니다.",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.row {
  color: #121110;
  .detail__wrapper {
    .detail__card {
      max-width: 693px;
      height: calc(100vh - 2rem);
      padding: 4rem 0.5rem 6rem 4rem;
      background: #c5c7c6;
      border: 1px solid yellowgreen;
      border-radius: 8px 8px 8px 0;
      img {
        border-radius: 8px 8px 8px 0;
        margin-bottom: 3rem;
      }
      h3 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      span {
        display: block;
        font-size: 1rem;
        margin-bottom: 3rem;
      }
      .all__content {
        p {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
