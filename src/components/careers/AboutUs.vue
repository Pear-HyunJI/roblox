<template>
  <div class="about__us">
    <div class="row">
      <div class="card__wrapper" v-for="(item, idx) in data" :key="idx">
        <div class="text">
          <h3>{{ item.h3Text }}</h3>
          <p>{{ item.pText }}</p>
          <a :href="item.aRink" v-if="item.aText">{{ item.aText }}</a>
        </div>
        <div class="photo__card">
          <div class="photo__card__img">
            <img :src="item.img" :alt="item.h3Text" />
          </div>
          <div class="photo__card__text" v-if="item.cardP1">
            <p class="p1">{{ item.cardP1 }}</p>
            <p class="p2">{{ item.cardP2 }}</p>
            <p class="p3">{{ item.cardP3 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      data: [
        {
          img: "src/assets/images/careers-about-us/com_ (2).jpg",
          h3Text: "Work at Roblox",
          pText:
            "We organize ourselves into groups that align with the different areas of innovation on the platform. Each group tackles unique technical challenges that require out-of-the-box thinking. Regardless of where you sit, you’ll have the opportunity to make an outsized impact.",
          aText: "LEARN MORE",
          aRink: "https://careers.roblox.com/work-at-roblox",
          cardP1: "",
          cardP2: "",
          cardP3: "",
        },
        {
          img: "src/assets/images/careers-about-us/com_.jpg",
          h3Text: "Be part of a values-driven company",
          pText:
            "Our values are critical to how we operate day-to-day, how we find and grow our people, how we work together, and what success looks like at Roblox. We empower our people to respect the community, take the long view, be responsible, and get stuff done.",
          aText: "",
          aRink: "",
          cardP1:
            "“If you use our Roblox values as a decision-making algorithm, it’s very rare that you don’t know what to do. As a leader here, the values constrain how I think about solving problems and have helped me guide my teams to innovate in the right ways.”",
          cardP2: "Claus Moberg",
          cardP3: "VP, ENGINEERING",
        },
        {
          img: "src/assets/images/careers-about-us/com_ (4).jpg",
          h3Text: "Join our culture of continuous learning",
          pText:
            "We believe a culture where people are open to feedback and always looking to learn enables us to accelerate innovation.",
          aText: "",
          aRink: "",
          cardP1:
            "“Every employee at Roblox drives innovation, including our interns. Each year, hundreds of students in our program tackle some of the greatest challenges in technology. ”",
          cardP2: "The Roblox Intern Experience",
          cardP3: "THREE PART DOCUSERIES",
        },
        {
          img: "src/assets/images/careers-about-us/com_ (1).jpg",
          h3Text: "Do career-defining work",
          pText:
            "From real-time communication to massive data processing to generative AI – the breadth of opportunities to work on will ensure that you are constantly making an impact and accelerating your career.",
          aText: "",
          aRink: "",
          cardP1:
            "“What excites me most is our rapid growth. We continue to support a community of millions of players, developers, and creators. I’m part of the beginning phase and it’s just really exciting.”",
          cardP2: "Ying Dai",
          cardP3: "PRINCIPAL SOFTWARE ENGINEER, OBSERVABILITY",
        },
        {
          img: "src/assets/images/careers-about-us/com_ (3).jpg",
          h3Text: "Focus on your well-being",
          pText:
            "The well-being of our people is our top priority. To provide our people with the resources they need to thrive in every aspect of their lives, we offer a robust and comprehensive program of healthcare, mental health, financial, and lifestyle benefits. In addition, we have flexible time-off and a generous donation matching program.",
          aText: "",
          aRink: "",
          cardP1: "",
          cardP2: "",
          cardP3: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.about__us {
  .row {
    .card__wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      padding: 2rem 0;
      &:nth-child(2n + 1) {
        display: flex;
        flex-direction: row-reverse;
      }
      .text {
        flex: 0 0 40%;
        padding: 0 2.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #f2f4f3;
        word-break: keep-all;
        gap: 1.5rem;
        h3 {
          font-size: 2.5rem;
          line-height: 3rem;
        }
        p {
          font-size: 18px;
          margin: 18px 0;
        }
        a {
          width: 140px;
          text-align: center;
          font-size: 1rem;
          padding: 1rem;
          border: 2px solid rgba(242, 244, 243, 0.75);
          border-radius: 8px;
          transition: all 0.5s;
          &:hover {
            border-color: rgba(99, 71, 255, 0.25);
            box-shadow: 0 0 1rem rgba(99, 71, 255, 0.25);
            background: conic-gradient(
              from 95.27deg at 51.3% 51.96%,
              #150d44 -0.95deg,
              #121110 62.41deg,
              #0f0c1c 134.15deg,
              #0a042e 181.84deg,
              #0f0d1a 237.07deg,
              #121110 317.05deg,
              #150d44 359.05deg,
              #121110 422.41deg
            );
          }
        }
      }
      .photo__card {
        flex: 0 0 28.8%;
        padding: 0 2.5rem;
        .photo__card__img {
          width: 500px;
          // height: 600px;
          img {
            border-radius: 1rem 1rem 1rem 0;
          }
        }
        .photo__card__text {
          width: 500px;
          color: #dee2e6;
          word-break: keep-all;
          padding: 1.5rem;
          background: #222;
          border-radius: 0 0 1rem 0;
          .p1 {
            font-size: 1.125rem;
          }
          .p2 {
            margin-top: 1.5rem;
            font-size: 1.125rem;
          }
          .p3 {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
