import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {ReactSVG} from 'react-svg';
import logo from '../../img/logo.svg'

const Logo = ({block}) => {
  return (
    <div className={`${block}__logo`}>
      <Link to={`/`} aria-label="Перейти на главную страницу">
        <ReactSVG className={`${block}__logo-image`} src={logo} />
      </Link>
    </div>
  );
};

Logo.propTypes = {
  block: PropTypes.string.isRequired,
};

export default Logo;
