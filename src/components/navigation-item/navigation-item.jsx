import React from 'react';

const NavigationItem = ({title}) => {
  return (
    <li className="main-nav__item">
      <a className="main-nav__link" href="#">{title}</a>
    </li>
  );
};

export default NavigationItem;
