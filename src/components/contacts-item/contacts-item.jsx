import React from 'react';

const ContactsItem = ({item}) => {
  const {type, number, text, icon} = item;

  return (
    <li className={`contacts__item contacts__item--${type}`}>
      <a className="contacts__link" href={`tel: ${number}`}>
        <img className={`contacts__icon contacts__icon--${type}`} src={icon} alt="Мобильный телефон" />
        {number}
      </a>
      <p className="contacts__text">{text}</p>
    </li>
  );
};

export default ContactsItem;
