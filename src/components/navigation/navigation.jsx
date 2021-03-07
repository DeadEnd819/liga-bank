import React from 'react';
import NavigationItem from "../navigation-item/navigation-item";
import login from '../../img/icon-login.svg'
import {NAVIGATION_TITLES} from '../../const';

const Navigation = () => {
  return (
    <nav className="header__nav main-nav">
      <ul className="main-nav__list main-nav__list--site">
        {NAVIGATION_TITLES.map((title, index) => (
          <NavigationItem key={title + index} title={title} />
        ))}
      </ul>
      <ul className="main-nav__list main-nav__list--user">
        <li className="main-nav__item main-nav__item--user">
          <a className="main-nav__link main-nav__link--user" href="#">
            <img className="main-nav__link--icon" src={login} alt="Иконка входа" />
            Войти в Интернет-банк
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
