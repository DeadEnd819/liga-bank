import React from 'react';
import Logo from "../logo/logo";
import FooterNavigation from "../footer-navigation/footer-navigation";
import Contacts from "../contacts/contacts";
import Social from "../social/social";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__copyright copyright">
          <Logo block={`copyright`} />

          <p className="footer__text">150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 &copy; Лига Банк, 2019</p>
        </div>

        <FooterNavigation />
        <Contacts />
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
