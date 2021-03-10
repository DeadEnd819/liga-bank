import React from 'react';
import PropTypes from 'prop-types';

const SocialItem = ({link}) => {
  const {name, src, icon} = link;

  return (
    <li className="social__item">
      <a className="social__link" href={src} aria-label={name}>
        <img className={`social__icon social__icon--${name}`} src={icon} alt={`Мы в ${name}`} />
      </a>
    </li>
  );
};

SocialItem.propTypes = {
  link: PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default SocialItem;
