import React from 'react';

const SocialItem = ({link}) => {
  const {name, src, icon} = link;

  return (
    <li className="social__item">
      <a className="social__link" href={src}>
        <img className={`social__icon social__icon--${name}`} src={icon} alt={`Мы в ${name}`} />
      </a>
    </li>
  );
};

export default SocialItem;
