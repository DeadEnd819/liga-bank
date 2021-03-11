import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {ReactSVG} from 'react-svg';
import {AppRoute} from '../../const';
import logo from '../../img/logo.svg'

const Logo = ({block}) => {
  return (
    <div className={`${block}__logo`}>
      <Link to={AppRoute.ROOT} aria-label="Перейти на главную страницу">
        <ReactSVG className={`${block}__logo-image`} src={logo} />
      </Link>
    </div>
  );
};

Logo.propTypes = {
  block: PropTypes.string.isRequired,
};

export default Logo;
