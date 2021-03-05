import React from 'react';
import logo from '../../img/logo.svg'

const Logo = ({block}) => {
  return (
    <div className={`${block}__logo-wrapper`}>
      <a className={`${block}__logo`} aria-label="Перейти на главную страницу">
        <img className={`${block}__logo-image`} src={logo}
             alt="Лига Банк - Логотип" />
      </a>
      <span className={`${block}__logo-title`}>ЛИГА Банк</span>
    </div>
  );
};

export default Logo;
