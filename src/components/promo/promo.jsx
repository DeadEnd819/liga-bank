import React from 'react';
import {Link} from 'react-router-dom';
import Wrapper from '../wrapper/wrapper';

const Promo = () => {
  return (
    <section className="main__promo promo">
      <Wrapper name={`promo`}>
        <div className="promo__container">
          <h2 className="promo__title">Лига Банк</h2>
          <p className="promo__text">Кредиты на любой случай</p>
          <Link
            to={`/credit`}
            className="promo__link button button--light"
            aria-label="Перейти на страницу расчета кредита"
          >
            Рассчитать кредит
          </Link>
        </div>
      </Wrapper>
    </section>
  );
};

export default Promo;
