import React from 'react';
import {ReactSVG} from 'react-svg';
import {ContactsItemProp} from '../../prop-types/prop-types';

const ContactsItem = ({item}) => {
  const {type, number, text, icon} = item;

  return (
    <li className={`contacts__item contacts__item--${type}`}>
      <a className="contacts__link" href={`tel: ${number}`} aria-label={type}>
        <ReactSVG className={`contacts__icon contacts__icon--${type}`} src={icon} />
        {number}
      </a>
      <p className="contacts__text">{text}</p>
    </li>
  );
};

ContactsItem.propTypes = {
  item: ContactsItemProp.isRequired,
};

export default ContactsItem;
