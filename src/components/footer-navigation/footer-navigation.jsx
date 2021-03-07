import React from 'react';
import NavigationItem from "../navigation-item/navigation-item";
import {NAVIGATION_TITLES, ACTIVE_PAGE} from '../../const';

const FooterNavigation = () => {
  return (
    <ul className="footer__item footer-nav">
      {NAVIGATION_TITLES.map((title, index) => {
        const isActive = title === ACTIVE_PAGE;

        return (
          title === ACTIVE_PAGE ? `` :
            <NavigationItem
              key={title + index}
              block={`footer`}
              title={title}
              isActive={isActive}
            />
        );
      })}
    </ul>
  );
};

export default FooterNavigation;
