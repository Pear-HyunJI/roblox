<template>
  <div class="go__to__download">
    <div class="row">
      <div class="row__wrapper">
        <h2>다양한 기기로 Roblox를 즐기세요!</h2>
        <h5>ROBLOX는 모드 기기를 지원합니다.</h5>
        <p>
          PC, Mac, iOS, Android, Amazon 기기, Xbox 콘솔, PlayStation 콘솔, Meta
          Quest, HTC Vive
        </p>
        <div class="row__wrapper__link1">
          <a :href="val.link" v-for="(val, idx) in imgLink1" :key="idx">
            <img :src="val.img" :alt="val.img" />
          </a>
        </div>
        <div class="row__wrapper__link2">
          <a :href="val.link" v-for="(val, idx) in imgLink2" :key="idx">
            <img :src="val.img" :alt="val.img" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoToDownload",
  data() {
    return {
      imgLink1: [
        { img: "", link: "" },
        { img: "", link: "" },
        { img: "", link: "" },
      ],
      imgLink2: [
        { img: "", link: "" },
        { img: "", link: "" },
        { img: "", link: "" },
        { img: "", link: "" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
