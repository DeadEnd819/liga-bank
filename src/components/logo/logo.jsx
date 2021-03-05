import React from 'react';
import logo from '../../img/logo.svg'

const Logo = ({block}) => {
  return (
    <div className={`${block}__logo`}>
      <a aria-label="Перейти на главную страницу">
        <img className={`${block}__logo-image`} src={logo}
             alt="Лига Банк - Логотип" />
      </a>
    </div>
  );
};

export default Logo;
