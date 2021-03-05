import React from 'react';

const Contacts = () => {
  return (
    <ul className="footer__contacts contacts">
      <li className="contacts__item">
        <a className="contacts__link" href={`tel: *0904`}>
          <img className="contacts__link--icon" src="" alt="" />
          *0904
        </a>
        <p className="contacts__text">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
      </li>
      <li className="contacts__item">
        <a className="contacts__link" href={`tel: 8 800 111 22 33`}>
          <img className="contacts__link--icon" src="" alt="" />
          8 800 111 22 33
        </a>
        <p className="contacts__text">Бесплатный для всех городов России</p>
      </li>
    </ul>
  );
};

export default Contacts;
