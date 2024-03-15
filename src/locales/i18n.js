// src/locales/i18n.js

import Vue from "vue";
import VueI18n from "vue-i18n";
import axios from "axios";

Vue.use(VueI18n);

const messages = {
  ko: {},
  en: {},
};

axios
  .get("src/locales/en.json")
  .then((res) => {
    messages.en = res.data;
    console.log(messages);
  })
  .catch((err) => {
    console.log(err);
  });
axios
  .get("src/locales/ko.json")
  .then((res) => {
    messages.ko = res.data;
    console.log(messages);
  })
  .catch((err) => {
    console.log(err);
  });

export const i18n = new VueI18n({
  locale: "ko", // 기본 언어
  fallbackLocale: "en", // 기본 언어 표시에 문제가 있을 경우 대체할 언어
  messages,
});
