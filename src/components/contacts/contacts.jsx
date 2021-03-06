import React from 'react';
import mobile from '../../img/icon-mobile.svg'
import phone from '../../img/icon-phone.svg'

const Contacts = () => {
  return (
    <ul className="footer__item contacts">
      <li className="contacts__item contacts__item--mobile">
        <a className="contacts__link" href={`tel: *0904`}>
          <img className="contacts__icon contacts__icon--mobile" src={mobile} alt="Мобильный телефон" />
          *0904
        </a>
        <p className="contacts__text">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
      </li>
      <li className="contacts__item contacts__item--phone">
        <a className="contacts__link" href={`tel: 8 800 111 22 33`}>
          <img className="contacts__icon contacts__icon--phone" src={phone} alt="Городской телефон" />
          8 800 111 22 33
        </a>
        <p className="contacts__text">Бесплатный для всех городов России</p>
      </li>
    </ul>
  );
};

export default Contacts;
