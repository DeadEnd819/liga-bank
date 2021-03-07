import React from 'react';
import Navigation from "../navigation/navigation";
import Logo from "../logo/logo";

const Header = () => {
  return (
      <header className="header">
        <div className="header__wrapper">
          <Logo block={`header`} />
          <Navigation />
        </div>
      </header>
  );
};

export default Header;
