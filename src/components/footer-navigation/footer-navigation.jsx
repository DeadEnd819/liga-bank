import React from 'react';

const FooterNavigation = () => {
  return (
    <ul className="footer__nav footer-nav">
      <li className="footer-nav__item">
        <a className="footer-nav__link" href="#">Услуги</a>
      </li>
      <li className="footer-nav__item">
        <a className="footer-nav__link" href="#">Рассчитать кредит</a>
      </li>
      <li className="footer-nav__item">
        <a className="footer-nav__link" href="#">Контакты</a>
      </li>
      <li className="footer-nav__item">
        <a className="footer-nav__link" href="#">Задать вопрос</a>
      </li>
    </ul>
  );
};

export default FooterNavigation;
