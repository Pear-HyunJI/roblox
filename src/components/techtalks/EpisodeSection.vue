<template>
  <section class="row">
    <div class="card__wrapper">
      <div class="card" v-for="(item, index) in onSearch" :key="index">
        <div class="flexBox">
          <div class="span__wrap">
            <span v-if="item.num">EPISODE {{ item.num }}</span>
          </div>
          <div class="image">
            <img
              src="../../assets/images/techtalks/ep1.jpg"
              alt="techtalks image"
            />
          </div>
          <div class="text">
            <div class="topicRow">
              <h3>{{ item.topic }}</h3>
              <a :href="item.href" target="_blank"
                ><i :class="item.iconClass"></i
              ></a>
            </div>
            <h4>게스트 : {{ item.guest }}</h4>
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
      <button @click="onClick">123</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "EpisodeSection",
  data() {
    return {
      episodes: [
        {
          num: 1,
          topic: "공공 정책",
          guest: "니키 잭슨 콜라코(Nicky Jackson Colaco)",
          content:
            "공공 정책 부문 총괄 니키 잭슨 콜라코가 CEO 데이비드 바주키와 함께 대화를 나눕니다. Roblox 정책에 대한 접근 방식, 해당 접근 방식을 통해 상호 작용하며 서비스를 제공하는 커뮤니티, 그리고 나아가 기술 혁신, 비전, 공공 정책 전략 간의 공생 관계에 대해 논의합니다.",
          iconClass: "fa-solid fa-podcast",
          href: "https://podcasts.apple.com/us/podcast/roblox-tech-talks/id1576801701",
        },
        {
          num: 2,
          topic: "Roblox 아바타의 진화",
          guest:
            "엔지니어링 부문 시니어 디렉터 키란 바트(Kiran Bhat), 제품 부문 시니어 디렉터 마헤시 라마수브라마니안(Mahesh Ramasubramanian), 수석 프로덕트 매니저 에피 고나완(Effie Goenawan)",
          content:
            "엔지니어링 부문 시니어 디렉터 키란 바트, 제품 부문 시니어 디렉터 마헤시 라마수브라, 수석 프로덕트 매니저 에피 고나완이 CEO 데이비드 바주키와 함께 아바타를 통한 몰입형 커뮤니케이션의 미래와 이를 강화하기 위해 Roblox에서 진행 중인 기술적 과제에 대해 살펴봅니다. 표정 짓는 아바타를 통해 디지털 방식으로 자신을 표현하는 것은 물론, 음성, 표정, 몸짓으로 더욱 몰입감 있게 소통할 수 있는 방법에 대해 심도 있는 논의를 전개합니다.",
          iconClass: "fa-brands fa-spotify",
          href: "https://open.spotify.com/show/6MEbDMxt2IXoTRvQegwmVf",
        },
        {
          num: 3,
          topic: "인터내셔널",
          guest: " 젠 팽(Zhen Fang), 인터내셔널 부문 총괄",
          content:
            "인터내셔널 부문 총괄인 젠 팽이 CEO 데이비드 바주키와 함께 대화를 나누며, 전 세계 모든 Roblox 사용자에게 진정으로 현지화된 경험을 제공하기 위한 방안을 논의합니다. 외국어 번역에서부터 결제 수단, 문화 관련 콘텐츠에 이르기까지 Roblox 플랫폼이 점점 확장되는 글로벌 커뮤니티에 어떻게 적응하고 있는지를 살펴봅니다.",
          iconClass: "fa-brands fa-spotify",
          href: "https://open.spotify.com/show/6MEbDMxt2IXoTRvQegwmVf",
        },
        {
          num: 4,
          topic: "액티브/액티브(Active/Active) 및 데이터 저장소",
          guest:
            "잰 버크톨드(Jan Berktold), 인프라 부문 수석 소프트웨어 엔지니어",
          content:
            "수석 소프트웨어 엔지니어 잰 버크톨드가 CEO 데이비드 바주키와 함께, 빠르고 안정적인 글로벌 인프라 운영에 대한 대화를 나눕니다. 액티브/액티브 아키텍처에 대한 Roblox의 비전 및 데이터 저장소 플랫폼을 강화하기 위해 해결 중인 과제에 대해 자세히 설명합니다.",
          iconClass: "fa-brands fa-spotify",
          href: "https://open.spotify.com/show/6MEbDMxt2IXoTRvQegwmVf",
        },
        {
          num: 5,
          topic: "그로스 엔지니어링(Growth Engineering)",
          guest: "아누팜 싱(Anupam Singh), 그로스 엔지니어링 부문 부사장",
          content:
            "그로스 팀의 엔지니어링 부문 부사장인 아누팜 싱이 수억 명의 크리에이터와 사용자를 위한 검색 및 발견 기능 관련 기술적 과제에 대해 CEO 데이비드 바주키와 이야기를 나눕니다. 회사의 가치를 바탕으로 한 성장 전략의 발전에 대해 설명하며, 커뮤니티에 가능한 최고의 경험을 제공하는 방법에 대해 탐구합니다.",
          iconClass: "fa-brands fa-youtube",
          href: "https://www.youtube.com/watch?v=Uq0UlIw8B8M",
        },
        {
          num: 6,
          topic: "안전 및 매너에 대한 비전",
          guest:
            "맷 코프먼(Matt Kaufman, Roblox 최고 시스템 책임자 및 안전 관련 제품, 정책, 운영 부문 대표), 나렌 코네루(Naren Koneru, 신뢰 및 안전 엔지니어링 부문 부사장)",
          content:
            "Roblox의 최고 시스템 책임자이자 안전 제품, 정책 및 운영 부문 책임자인 맷 코프먼과 신뢰 및 안전 엔지니어링 부사장인 나렌 코네루가 CEO 데이비드 바주키와 함께 플랫폼의 안전 및 매너 관련 접근 방식에 대해 논의합니다. 대규모 가상 환경의 안전과 관련한 기술적 난제, 매너 있는 온라인 커뮤니티에 대한 비전, 모든 Roblox 사용자의 요구 사항을 충족하기 위한 노력에 대해 대화를 나눕니다.",
          iconClass: "fa-brands fa-youtube",
          href: "https://www.youtube.com/watch?v=Uq0UlIw8B8M",
        },
        {
          num: 7,
          topic: "교육 및 수직계열화",
          guest: "레베카 칸타(Rebecca Kantar), 에듀케이션 파트너십 부문 부사장",
          content:
            "에듀케이션 파트너십 부문 부사장 레베카 칸타가 CEO 데이비드 바주키와 함께 Roblox 수직계열화의 미래에 대해 논하며 교육 분야에 대한 깊이 있는 대화를 나눕니다. 먼저 칸타가 이전에 창업한 기업인 Imbellus에 대한 이야기에서부터 나아가, 수직계열화에 대한 전반적인 계획, 학생과 교육자에게 더 나은 서비스를 제공하기 위한 Roblox의 교육 비전에 대해 논의합니다.",
          iconClass: "fa-solid fa-podcast",
          href: "https://podcasts.apple.com/us/podcast/roblox-tech-talks/id1576801701",
        },
        {
          num: 8,
          topic: "이코노미",
          guest: "엔리코 디안젤로(Enrico D’Angelo), 이코노미 제품 부문 부사장",
          content:
            "이코노미 제품 부문 부사장 엔리코 디안젤로가 CEO 데이비드 바주키와 함께 Roblox 이코노미의 비전에 대해 논의합니다. 이 에피소드에서는 가상 경제에 현실 세계를 반영하는 법, Roblox의 향후 발전 기회, 그리고 이에 도달하기 위해 해결해야 할 기술적 과제에 대해 이야기를 나눕니다.",
          iconClass: "fa-solid fa-podcast",
          href: "https://podcasts.apple.com/us/podcast/roblox-tech-talks/id1576801701",
        },
        {
          num: 9,
          topic: "커뮤니케이션",
          guest: "가리마 신하(Garima Sinha), 제품 부문 시니어 디렉터",
          content:
            "소셜 부서의 제품 부문 시니어 디렉터인 가리마 신하가 CEO 데이비드 바주키와 함께 Roblox 커뮤니케이션의 미래에 대해 이야기합니다. 이 에피소드에서는 아바타 얼굴 애니메이션, 공간 음성 기능 등 플랫폼에서의 보다 자연스럽고 풍부한 커뮤니케이션을 구현하기 위한 Roblox의 노력에 대해 이야기합니다.",
          iconClass: "fa-brands fa-youtube",
          href: "https://www.youtube.com/watch?v=Uq0UlIw8B8M",
        },
        {
          num: 10,
          topic: "브랜드 파트너십",
          guest:
            "크리스티나 우튼(Christina Wootton), 글로벌 파트너십 부문 부사장",
          content:
            "글로벌 파트너십 부문 부사장인 크리스티나 우튼이 CEO이자 호스트인 데이비드 바주키와 함께 각 브랜드가 Roblox 플랫폼에서 성공적으로 입지를 구축한 사례에 대해 이야기합니다. 이 에피소드에서는 Roblox가 구상하는 각 브랜드와의 관계, 성공적인 통합에 대한 견해, 그리고 Roblox가 구축한 기술적 토대를 통해 이 모든 것을 이룩해 가는 과정에 대해 공유합니다.",
          iconClass: "fa-solid fa-podcast",
          href: "https://podcasts.apple.com/us/podcast/roblox-tech-talks/id1576801701",
        },
        {
          num: 11,
          topic: "크리에이터 혁신",
          guest: "닉 토노우(Nick Tornumw), 크리에이터 엔지니어링 부문 부사장",
          content:
            "크리에이터 엔지니어링 부문 부사장 닉 토노우가 CEO이자 호스트인 데이비드 바주키와 대화를 나누며, 몰입형 체험을 구축해 가는 Roblox 글로벌 크리에이터 커뮤니티와 이들의 성공을 지원하는 방법에 대한 의견을 제시합니다. 이 에피소드에서는 크리에이터 그룹의 세 가지 중심축인 Roblox Studio, 콘텐츠 클라우드, 플랫폼의 활용도를 높이는 각종 서비스에 대해 논하며, 각 크리에이터의 창작물을 발전시키는 방법에 대해 논의합니다.",
          iconClass: "fa-brands fa-youtube",
          href: "https://www.youtube.com/watch?v=Uq0UlIw8B8M",
        },
        {
          num: 12,
          topic: "인프라스트럭처",
          guest: "맥스 로스(Max Ross), 엔지니어링 부문 부사장",
          content:
            "인프라스트럭처 엔지니어링 부문 부사장인 맥스 로스가 바주키와 함께 Roblox 글로벌 인프라의 독특한 도전 과제에 대해 논의합니다. 이 에피소드에서는 다중 지역 아키텍처를 구축하는 방법, 인프라를 제품으로 고려하는 사고방식, 인프라 확장을 통해 5000만 명 이상의 일일 활성 사용자를 지원하는 과정에서 배운 것들에 대해 논의합니다.",
          iconClass: "fa-solid fa-podcast",
          href: "https://podcasts.apple.com/us/podcast/roblox-tech-talks/id1576801701",
        },
        {
          num: 13,
          topic: "프로그래밍",
          guest: "아세니 카풀킨(Arseny Kapoulkine), 테크니컬 펠로우",
          content:
            "테크니컬 펠로우 아세니 카풀킨이 CEO이자 진행자인 데이비드 바주키와 함께 돌아와 팟캐스트의 두 번째 시즌을 시작합니다. 이 에피소드에서는 Roblox 엔진을 구동하는 프로그래밍 언어인 Luau와 Roblox 엔진의 성능 개선 사항에 대해 논의합니다.",
          iconClass: "fa-brands fa-spotify",
          href: "https://open.spotify.com/show/6MEbDMxt2IXoTRvQegwmVf",
        },
        {
          num: 14,
          topic: "데이터 과학 및 분석",
          guest: "토드 루닥(Todd Rudak), 데이터 과학 및 분석 부문 디렉터",
          content:
            "데이터 과학 및 분석 부문 디렉터인 토드 루닥이 최고 경영자이자 진행자인 데이비드 바주키와 함께 팀의 독특한 자질에 대해 설명하며, 대규모 혁신을 지원하기 위한 작업에 대해 논의합니다. 플랫폼 구축과 관련해 의사 결정의 속도, 빈도 및 통찰력을 향상하기 위한 Roblox의 노력에 대해 알아보세요.",
          iconClass: "fa-solid fa-podcast",
          href: "https://podcasts.apple.com/us/podcast/roblox-tech-talks/id1576801701",
        },
        {
          num: 15,
          topic: "오픈 클라우드",
          guest: "안토니 초우두리(Antoni Choudhuri), 시니어 엔지니어링 디렉터",
          content:
            "개발자 커뮤니티의 창의성 및 혁신이 없었다면 오늘날의 Roblox 플랫폼은 존재하지 못했을 것입니다. 이 에피소드에서 최고 경영자이자 진행자인 데이비드 바주키는 시니어 엔지니어링 디렉터인 안토니 초우두리와 함께, 개발자의 생산성을 극대화하고 이들의 경험을 한 차원 높일 수 있는 흥미진진한 새로운 에코시스템인 오픈 클라우드에 대해 논의합니다.",
          iconClass: "fa-brands fa-youtube",
          href: "https://www.youtube.com/watch?v=Uq0UlIw8B8M",
        },
        {
          num: 16,
          topic: "Roblox의 연구 활동",
          guest: "모건 맥과이어(Morgan McGuire), 최고 과학자",
          content:
            "Roblox의 최고 과학자인 모건 맥과이어가 최고 경영자이자 진행자인 데이비드 바주키와 함께 Roblox의 모든 연구 현황에 대해 이야기합니다. 연구 팀은 컴퓨터 과학과 사회 과학, 학문적 아이디어와 업계의 노하우를 결합해 혁신을 가속화하는 데 기여하고 있습니다. 메타버스 연구의 선두적 위치를 구축해 가는 방법에 대해 자세히 알아보세요.",
          iconClass: "fa-brands fa-spotify",
          href: "https://open.spotify.com/show/6MEbDMxt2IXoTRvQegwmVf",
        },
        {
          num: 17,
          topic: "Roblox 엔진",
          guest: "아세니 카풀킨(Arseny Kapoulkine), 테크니컬 펠로우",
          content:
            "이 에피소드에서 바주키는 테크니컬 펠로우인 아세니 카풀킨과 함께 Roblox 엔진에 대한 논의를 계속합니다. 특히 고도로 기술적인 심층 분석을 통해 객체 모델링, 렌더링, 물리, 네트워킹 등 Roblox 엔진의 기본 요소를 다룹니다. 본 에피소드를 통해 Roblox 플랫폼을 구동하는 핵심 기술의 전체적인 개요를 살펴보세요.",
          iconClass: "fa-brands fa-youtube",
          href: "https://www.youtube.com/watch?v=Uq0UlIw8B8M",
        },
        {
          num: 18,
          topic: "Roblox 테크놀로지",
          guest: "아세니 카풀킨(Arseny Kapoulkine), 테크니컬 펠로우",
          content:
            "이 에피소드에서 바주키는 테크니컬 펠로우인 아세니 카풀킨과 함께 Roblox 기술이 다른 온라인 플랫폼과 구별되는 요소에 대해 논의합니다. 플랫폼의 반복 개선에서부터 각 기기별 체험의 성능 유지를 위한 과정까지, Roblox 기술 혁신의 풍부한 역사를 살펴보는 시간을 갖게 됩니다. 메타버스의 기술적 토대 및 Roblox의 진화와 확장 과정에 대해 자세히 알아보세요.",
          iconClass: "fa-brands fa-youtube",
          href: "https://www.youtube.com/watch?v=Uq0UlIw8B8M",
        },
        {
          num: 19,
          topic: "아바타 및 얼굴 애니메이션",
          guest: "키란 바트(Kiran Bhat), 아바타 부문 시니어 엔지니어링 디렉터",
          content:
            "메타버스에서 사람들은 아바타를 통해 자신의 정체성을 표현합니다. 이 에피소드에서 바주키는 시니어 엔지니어링 디렉터인 키란 바트와 함께 Roblox 아바타의 미래에 대한 대화를 나눕니다. 바트는 대학원에서의 경험에서부터 비주얼 이펙트 업계, 나아가 Roblox가 2020년 12월에 인수한 스타트업 Loom.ai에서의 경험에 이르기까지, Roblox를 향해 걸어온 여정에 대해 이야기합니다. 아바타 얼굴 애니메이션 및 더욱 정교한 맞춤형 아바타를 위해 Roblox에서 구축 중인 Loom.ai의 기술적 토대에 대해 알아보세요.",
          iconClass: "fa-solid fa-podcast",
          href: "https://podcasts.apple.com/us/podcast/roblox-tech-talks/id1576801701",
        },
        {
          num: 20,
          topic: "메타버스로의 진출",
          guest: "대니얼 스터먼(Daniel Sturman), Roblox 최고 기술 책임자(CTO)",
          content:
            "새로운 범주의 인간 상호 작용을 위한 기술적 토대를 마련합니다. 이 에피소드에서 바주키는 Roblox의 최고 기술 책임자인 대니얼 스터먼과 함께 메타버스 앱을 구성하는 5가지 핵심 원칙과, 이러한 도구가 우리의 미래에 미치는 영향에 대해 심도 있는 논의를 진행합니다.",
          iconClass: "fa-brands fa-youtube",
          href: "https://www.youtube.com/watch?v=Uq0UlIw8B8M",
        },
      ],
      data: [],
      searchData: [],
    };
  },
  props: ["keyword"],
  created() {
    return this.data.push(...this.episodes.splice(0, 4));
  },
  computed: {
    onSearch() {
      return this.episodes.filter(
        (item) =>
          item.topic.indexOf(this.keyword) > -1 ||
          item.content.indexOf(this.keyword) > -1 ||
          item.guest.indexOf(this.keyword) > -1 ||
          item.iconClass.indexOf(this.keyword) > -1
      );
    },
  },
  methods: {
    onClick() {
      this.data.push(...this.episodes.splice(0, 4));
      console.log(this.data);
    },
  },
};
</script>

<style lang="scss" scoped>
.card__wrapper {
  color: #162227;

  margin: 20px 150px;

  .card {
    margin: 30px 0;
    height: 344px;
    background: #dee2e6;
    border-radius: 8px 8px 8px 0;
    padding: 50px;
    position: relative;

    .span__wrap {
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      text-align: right;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 20px;
      letter-spacing: 0.08em;
      padding-left: 1rem;
    }
  }

  .flexBox {
    display: flex;

    .image {
      position: relative;
      flex: 23%;
      img {
        border-radius: 8px 8px 8px 0;
      }
    }
    .text {
      padding: 0 50px 0 50px;
      flex: 75%;
      .topicRow {
        display: flex;
        justify-content: space-between;
        font-size: 25px;
        a {
          padding-left: 50px;
          font-size: 35px;
          &:hover {
            color: #6347ff;
          }
        }
      }
      h4 {
        padding: 25px 0 16px 0;
      }
      p {
        font-size: 1rem;
        overflow: hidden;
        transition: all 250ms ease-in;
        text-overflow: ellipsis;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        white-space: normal;
        display: -webkit-box !important;
      }

      // &:hover p {
      //   -webkit-line-clamp: unset;
      //   text-overflow: unset;
      // }
    }
  }
}
</style>
