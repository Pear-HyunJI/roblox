<template>
  <footer>
    <div class="row">
      <h2>
        <img src="../../assets/images/roblox_logo_white_new.svg" alt="1" />
      </h2>
      <div class="info__wrapper">
        <nav>
          <h4>회사</h4>
          <ul class="info__wrapper__company">
            <li><a href="#" target="_blank">인재 채용</a></li>
            <li><a href="#" target="_blank">투자 정보</a></li>
            <li><a href="#" target="_blank">블로그</a></li>
          </ul>
        </nav>
        <nav>
          <h4>리소스</h4>
          <ul class="info__wrapper__resources">
            <li><a href="#" target="_blank">에듀케이션</a></li>
            <li><a href="#" target="_blank">자주 묻는 질문</a></li>
            <li><a href="#" target="_blank">문의</a></li>
            <li><a href="#" target="_blank">약관</a></li>
            <li><a href="#" target="_blank">개인정보</a></li>
          </ul>
          <ul class="notice">
            <li><a href="#" target="_blank">구직자 개인정보 처리방침</a></li>
            <li><a href="#" target="_blank">접근성</a></li>
          </ul>
        </nav>
        <span>© & ™ 2024 Roblox Corporation. All Rights Reserved.</span>
      </div>
      <div>
        <div class="info__sns">
          <a href="#" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" target="_blank"><i class="fa-brands fa-twitter"></i></a>
          <a href="#" target="_blank"><i class="fa-brands fa-youtube"></i></a>
          <a href="#" target="_blank"><i class="fa-brands fa-twitch"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
* {
  color: white;
  footer {
    padding: 7rem 0;
    .row {
      max-width: calc(1280px - 9rem);
      h2 img {
        width: 120px;
      }
      .info__wrapper {
        position: relative;
        display: flex;
        justify-content: space-between;
        padding: 3rem 0 0;
        font-size: 1rem;
        nav {
          padding-bottom: calc(1rem + 1px);
          margin-bottom: 1rem;
          h4 {
            padding: 1rem 0 0.5rem;
            font-size: 1.25rem;
          }
          .info__wrapper__company {
            display: flex;
          }
          .info__wrapper__resources {
            display: flex;
          }
          p {
            padding-top: 5rem;
            margin-top: 1rem;
          }
          .notice {
            display: flex;
            padding-top: 5rem;
            margin-top: 1rem;
          }
        }
        span {
          position: absolute;
          bottom: 3rem;
          right: unset;
          font-size: 0.75rem;
        }
      }
      .info__wrapper::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 8rem;
        background: linear-gradient(
          90deg,
          rgba(99, 71, 255, 0) 0%,
          #6347ff 52.99%,
          rgba(99, 71, 255, 0) 100%
        );
        height: 1px;
      }
      .info__sns {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #162227;
        border-radius: 8px;
        margin-top: 1rem;
        padding: 0 24px;
        min-height: 5rem;
        a {
          cursor: default;
        }
        i {
          margin: 20px 40px;
        }
        i:hover {
          color: #6347ff;
          cursor: pointer;
        }
      }
    }
  }
}

li {
  padding: 1rem 0;
}

li:not(:last-child) {
  padding-right: 2.25rem;
}

a:hover {
  color: #6347ff;
}
</style>
