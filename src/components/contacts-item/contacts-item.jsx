import React from 'react';
import PropTypes from 'prop-types';

const ContactsItem = ({item}) => {
  const {type, number, text, icon} = item;

  return (
    <li className={`contacts__item contacts__item--${type}`}>
      <a className="contacts__link" href={`tel: ${number}`} aria-label={type}>
        <img className={`contacts__icon contacts__icon--${type}`} src={icon} alt="Мобильный телефон" />
        {number}
      </a>
      <p className="contacts__text">{text}</p>
    </li>
  );
};

ContactsItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactsItem;
