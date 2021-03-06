import React from 'react';
import facebook from '../../img/icon-facebook.svg'
import instagram from '../../img/icon-instagram.svg'
import twitter from '../../img/icon-twitter.svg'
import youtube from '../../img/icon-youtube.svg'

const Social = () => {
  return (
    <ul className="footer__item social">
      <li className="social__item">
        <a className="social__link" href="https://www.facebook.com">
          <img className="social__icon social__icon--facebook" src={facebook} alt="Мы в facebook" />
        </a>
      </li>
      <li className="social__item">
        <a className="social__link" href="https://www.instagram.com">
          <img className="social__icon social__icon--instagram" src={instagram} alt="МЫ в instagram" />
        </a>
      </li>
      <li className="social__item">
        <a className="social__link" href="https://twitter.com">
          <img className="social__icon social__icon--twitter" src={twitter} alt="Мы в twitter" />
        </a>
      </li>
      <li className="social__item">
        <a className="social__link" href="https://www.youtube.com">
          <img className="social__icon social__icon--youtube" src={youtube} alt="Мы в youtube" />
        </a>
      </li>
    </ul>
  );
};

export default Social;
