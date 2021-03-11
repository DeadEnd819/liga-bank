import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationItem = ({block, title, isActive}) => {
  const {name, href} = title;
  const classActive = isActive ? ` ${block}-nav__link--active` : ``;

  return (
    <li className={`${block}-nav__item`}>
      <Link to={href} className={`${block}-nav__link${classActive}`} aria-label={name}>{name}</Link>
    </li>
  );
};

NavigationItem.propTypes = {
  block: PropTypes.string.isRequired,
  title: PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default NavigationItem;
