import React from 'react';
import Copyright from "../copyright/copyright";
import FooterNavigation from "../footer-navigation/footer-navigation";
import Contacts from "../contacts/contacts";
import Social from "../social/social";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Copyright />
        <FooterNavigation />
        <Contacts />
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
