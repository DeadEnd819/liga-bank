import React from 'react';
import NavigationItem from '../navigation-item/navigation-item';
import {NAVIGATION_ITEMS, ACTIVE_PAGE} from '../../const';

const FooterNavigation = () => {
  return (
    <ul className="footer__item footer-nav">
      {NAVIGATION_ITEMS.map((title, index) => {
        const isActive = title.name === ACTIVE_PAGE;

        return (
          title.name === ACTIVE_PAGE ? `` :
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
