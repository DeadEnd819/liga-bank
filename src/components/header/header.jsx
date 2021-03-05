import React from 'react';
import Logo from "../logo/logo";

const Header = () => {
  return (
      <header className="page-header">
        <Logo block={`page-header`} />

        <nav className="main-nav">
          <ul className="main-nav__list site-list">
            <li className="site-list__item">
              <a className="main-nav__link" href="#">Услуги</a>
            </li>
            <li className="site-list__item">
              <a className="main-nav__link" href="#">Рассчитать кредит</a>
            </li>
            <li className="site-list__item">
              <a className="main-nav__link main-nav__link--active" href="#">Конвертер валют</a>
            </li>
            <li className="site-list__item">
              <a className="main-nav__link" href="#">Контакты</a>
            </li>
            <li className="site-list__item">
              <a className="main-nav__link" href="#">Задать вопрос</a>
            </li>
          </ul>
          <ul className="main-nav__list user-list">
            <li className="user-list__item"><a className="main-nav__link" href="#">Войти в Интернет-банк</a></li>
          </ul>
        </nav>
      </header>
  );
};

export default Header;
