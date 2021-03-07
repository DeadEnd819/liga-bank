import React from 'react';

const NavigationItem = ({block, title, isActive}) => {
  const classActive = isActive ? ` ${block}-nav__link--active` : ``;

  return (
    <li className={`${block}-nav__item`}>
      <a className={`${block}-nav__link${classActive}`} href="#">{title}</a>
    </li>
  );
};

export default NavigationItem;
