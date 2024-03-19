<template>
  <div class="job__posting">
    <div class="job__posting__wrapper">
      <div class="wrapper__inner">
        <div class="inner__p">
          <p>{{ $t("[4].jobposting.p") }}</p>
        </div>
        <div class="inner__h5">
          <h5>{{ $t("[4].jobposting.h5") }}</h5>
        </div>
        <div class="inner__btn">
          <router-link to="/careers">VIEW ALL JOBS</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobPosting",
};
</script>

<style lang="scss" scoped>
.job__posting {
  padding: 48px 0;
  text-align: center;
  color: #dee2e6;
  .job__posting__wrapper {
    max-width: calc(1280px - 9rem);
    border-radius: 8px 8px 8px 0;
    background: #000
      url("@/assets/images/job-posting/hero_bg.5b75e4dbb11c6353.jpg") center /
      cover no-repeat;
    padding: 6rem 1.5rem;
    margin: 0 auto;
    .wrapper__inner {
      .inner__p {
        margin: 0 auto 1rem;
        font-size: 1rem;
      }
      .inner__h5 {
        margin: 0 auto 3rem;
        font-size: 2.5rem;
      }
      .inner__btn {
        a {
          background: #6347ff;
          padding: 1rem;
          border-radius: 8px;
          font-size: 1rem;
          color: #f2f4f3;
          transition: all 0.5s;
          border: 2px solid #6347ff;
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
    }
  }
}
</style>
