import React from 'react';
import {Link} from "react-router-dom";
import {ReactSVG} from 'react-svg';
import NavigationItem from '../navigation-item/navigation-item';
import login from '../../img/icon-login.svg';
import {NAVIGATION_ITEMS, ACTIVE_PAGE, AppRoute} from '../../const';

const MainNavigation = () => {
  return (
    <nav className="header__nav main-nav">
      <ul className="main-nav__list main-nav__list--site">
        {NAVIGATION_ITEMS.map((title, index) => {
          const isActive = title.name === ACTIVE_PAGE;

          return (
            <NavigationItem
              key={title + index}
              block={`main`}
              title={title}
              isActive={isActive}
            />
          );
        })}
      </ul>
      <ul className="main-nav__list main-nav__list--user">
        <li className="main-nav__item main-nav__item--user">
          <Link
            to={AppRoute.AUTHORIZATION}
            className="main-nav__link main-nav__link--user"
            aria-label="Перейти на страницу авторизации"
          >
            <ReactSVG className="main-nav__link-icon" src={login} />
            Войти в Интернет-банк
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
