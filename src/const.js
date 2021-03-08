import facebook from './img/icon-facebook.svg'
import instagram from './img/icon-instagram.svg'
import twitter from './img/icon-twitter.svg'
import youtube from './img/icon-youtube.svg'
import mobile from './img/icon-mobile.svg'
import phone from './img/icon-phone.svg'

export const BACKEND_URL = `https://api.exchangeratesapi.io`;
// export const BACKEND_URL = `http://api.openrates.io`;
//  https://api.exchangeratesapi.io/latest?base=USD&symbols=USD,GBP,EUR,RUB,CNY
export const REQUEST_TIMEOUT = 5000;

export const ACTIVE_PAGE = `Конвертер валют`;
export const NAVIGATION_TITLES = [`Услуги`, `Рассчитать кредит`, `Конвертер валют`, `Контакты`, `Задать вопрос`];
export const BASE_SYMBOLS = [`RUB`, `USD`, `EUR`, `GBR`, `CNY`];

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
]

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
]
