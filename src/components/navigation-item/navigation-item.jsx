import React from 'react';
import PropTypes from 'prop-types';

const NavigationItem = ({block, title, isActive}) => {
  const classActive = isActive ? ` ${block}-nav__link--active` : ``;

  return (
    <li className={`${block}-nav__item`}>
      <a className={`${block}-nav__link${classActive}`} href="#" aria-label={title}>{title}</a>
    </li>
  );
};

NavigationItem.propTypes = {
  block: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default NavigationItem;
