import facebook from './img/icon-facebook.svg';
import instagram from './img/icon-instagram.svg';
import twitter from './img/icon-twitter.svg';
import youtube from './img/icon-youtube.svg';
import mobile from './img/icon-mobile.svg';
import phone from './img/icon-phone.svg';

export const BACKEND_URL = `https://api.exchangeratesapi.io`;
export const REQUEST_TIMEOUT = 5000;
export const MAX_DAYS = 7;
export const BASE_RATE = 1;
export const ACTIVE_PAGE = `Конвертер валют`;
export const BASE_SYMBOLS = [`RUB`, `USD`, `EUR`, `GBP`, `CNY`];
export const BASE_DATE = `latest`;

export const ActionType = {
  CHANGE_DATE: `CHANGE_DATE`,
  LOAD_RATE: `LOAD_RATE`,
  CHANGE_SALE_SYMBOL: `CHANGE_SALE_SYMBOL`,
  CHANGE_BUY_SYMBOL: `CHANGE_BUY_SYMBOL`,
  CHANGE_COURSE: `CHANGE_COURSE`,
  CHANGE_LOADING: `CHANGE_LOADING`,
  UPDATED_HISTORY: `UPDATED_HISTORY`,
  CLEAR_HISTORY: `CLEAR_HISTORY`,
};

export const AppRoute = {
  ROOT: `/`,
  SERVICES: `/services`,
  CREDIT: `/credit`,
  CONVERTER: `/converter`,
  CONTACTS: `/contacts`,
  QUESTION: `/question`,
  AUTHORIZATION: `/authorization`
};

export const NAVIGATION_ITEMS = [
  {
    name: `Услуги`,
    href: AppRoute.SERVICES
  },
  {
    name: `Рассчитать кредит`,
    href: AppRoute.CREDIT
  },
  {
    name: `Конвертер валют`,
    href: AppRoute.CONVERTER
  },
  {
    name: `Контакты`,
    href: AppRoute.CONTACTS
  },
  {
    name: `Задать вопрос`,
    href: AppRoute.QUESTION
  }
];

export const CONTACTS_ITEMS = [
  {
    type: `mobile`,
    number: `*0904`,
    text: `Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2`,
    icon: mobile
  },
  {
    type: `phone`,
    number: `8 800 111 22 33`,
    text: `Бесплатный для всех городов России`,
    icon: phone
  }
];

export const SOCIAL_LINKS = [
  {
    name: `facebook`,
    src: `https://www.facebook.com`,
    icon: facebook
  },
  {
    name: `instagram`,
    src: `https://www.instagram.com`,
    icon: instagram
  },
  {
    name: `twitter`,
    src: `https://www.twitter.com`,
    icon: twitter
  },
  {
    name: `youtube`,
    src: `https://www.youtube.com`,
    icon: youtube
  },
];
