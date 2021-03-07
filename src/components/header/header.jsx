import React from 'react';
import MainNavigation from "../main-navigation/main-navigation";
import Logo from "../logo/logo";

const Header = () => {
  return (
      <header className="header">
        <div className="header__wrapper">
          <Logo block={`header`} />
          <MainNavigation />
        </div>
      </header>
  );
};

export default Header;
