// src/locales/i18n.js

import Vue from "vue";
import VueI18n from "vue-i18n";
import axios from "axios";

Vue.use(VueI18n);

// const messages = {
//   ko: {},
//   en: {},
// };

const messages = {
  ko: [],
  en: [],
};
const languages = ["ko", "en"];
let fileNames = [
  "Careers",
  "Education",
  "Footer",
  "Header",
  "Home",
  "Members",
  "News",
  "TechTalks",
];

let loadTranslation = async () => {
  for (let lang of languages) {
    console.log(`src/locales/${lang}`);

    // try {
    //   let files = await axios.get(`src/locales/${lang}`);
    //   let fileNames = files.data;
    //   console.log(files);
    //   console.log(fileNames);
    for (let fileName of fileNames) {
      await axios
        .get(`src/locales/${lang}/${fileName}.json`)
        .then((res) => {
          // console.log(res);
          if (lang === "ko") {
            messages.ko.push(res.data);
          } else {
            messages.en.push(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      // let key = fileName.replace(/\.[^/.]+$/, ""); // 확장자 제게해서 파일 이름 저장

      // messages[lang][key] = response.data;
    }
  }
  console.log(messages);
  // } catch (err) {
  //   console.log(err);
  // }
};

loadTranslation().then(() => {
  console.log(messages.en);
  console.log(messages.ko);
});

export const i18n = new VueI18n({
  locale: "ko", // 기본 언어
  fallbackLocale: "en", // 기본 언어 표시에 문제가 있을 경우 대체할 언어
  messages,
});
