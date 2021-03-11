import React from 'react';
import PropTypes from 'prop-types';
import {ReactSVG} from 'react-svg';

const SocialItem = ({link}) => {
  const {name, src, icon} = link;

  return (
    <li className="social__item">
      <a className="social__link" href={src} aria-label={name}>
        <ReactSVG className={`social__icon social__icon--${name}`} src={icon} />
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
