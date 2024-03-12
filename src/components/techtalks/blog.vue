<template>
  <section id="blog">
    <div class="content__container">
      <h4>Roblox가 구현해 낸 오늘날의 기술 혁신에 대해 자세히 알아보세요.</h4>
      <a href="https://blog.roblox.com" target="_blank">
        <button>테크 블로그로 이동</button>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Blog",
};
</script>

<style lang="scss" scoped>
#blog {
  max-width: 1150px;
  margin: 100px auto 80px;
}
.content__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 4rem;
  background: linear-gradient(
    90deg,
    #6347ff 0%,
    #6347ff 60%,
    rgba(99, 71, 255, 0) 100%
  );
  border-radius: 8px 8px 8px 0;
  h4 {
    color: #dee2e6;
    max-width: 42rem;
    margin-bottom: 0;
    font-size: 1.75rem;
  }
  a {
    width: auto;
    margin-top: 0;
    button {
      font-size: 16px;
      width: 180px;
      height: 50px;
      color: #dee2e6;
      background: #0f0d1a;
      border: 2px solid rgba(242, 244, 243, 0.75);
      border-radius: 8px;
      text-transform: uppercase;
      transition: all 250ms linear;
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
</style>
