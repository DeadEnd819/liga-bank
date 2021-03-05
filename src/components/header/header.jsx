import React from 'react';
import Logo from "../logo/logo";
import login from '../../img/icon-login.svg'

const Header = () => {
  return (
      <header className="header">
        <div className="header__wrapper">
          <Logo block={`header`} />

          <nav className="header__nav main-nav">
            <ul className="main-nav__list main-nav__list--site">
              <li className="main-nav__item">
                <a className="main-nav__link" href="#">Услуги</a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link" href="#">Рассчитать кредит</a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link main-nav__link--active" href="#">Конвертер валют</a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link" href="#">Контакты</a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link" href="#">Задать вопрос</a>
              </li>
            </ul>
            <ul className="main-nav__list main-nav__list--user">
              <li className="main-nav__item main-nav__item--user">
                <a className="main-nav__link main-nav__link--user" href="#">
                  <img className="main-nav__link--icon" src={login} alt="Иконка входа"/>
                  Войти в Интернет-банк
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  );
};

export default Header;
