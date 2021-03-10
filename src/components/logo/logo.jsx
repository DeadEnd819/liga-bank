import React from 'react';
import PropTypes from 'prop-types';
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

Logo.propTypes = {
  block: PropTypes.string.isRequired,
};

export default Logo;
