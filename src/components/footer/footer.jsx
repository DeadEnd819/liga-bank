import React from 'react';
import Logo from "../logo/logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div>
          <Logo block={`page-footer`} />

          <p>150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 Ⓒ Лига Банк, 2019</p>
        </div>
        <ul>
          <li><a href="#">Услуги</a></li>
          <li><a href="#">Рассчитать кредит</a></li>
          <li><a href="#">Контакты</a></li>
          <li><a href="#">Задать вопрос</a></li>
        </ul>
        <ul>
          <li>
            <h3>*0904</h3>
            <p>Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
          </li>
          <li>
            <h3>8 800 111 22 33</h3>
            <p>Бесплатный для всех городов России</p>
          </li>
        </ul>
        <ul>
          <li><a href="https://www.facebook.com">facebook</a></li>
          <li><a href="https://www.instagram.com">instagram</a></li>
          <li><a href="https://twitter.com">twitter</a></li>
          <li><a href="https://www.youtube.com">youtube</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
