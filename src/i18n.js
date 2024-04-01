import Vue from "vue";
import VueI18n from "vue-i18n";
import axios from "axios";

Vue.use(VueI18n);

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
    for (let fileName of fileNames) {
      await axios
        .get(`./assets/locales/${lang}/${fileName}.json`)
        .then((res) => {
          if (lang === "ko") {
            messages.ko.push(res.data);
          } else {
            messages.en.push(res.data);
          }
          console.log(messages.ko);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
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
