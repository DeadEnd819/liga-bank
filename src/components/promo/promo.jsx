import React from 'react';
import Wrapper from '../wrapper/wrapper';

const Promo = () => {
  return (
    <section className="main__promo promo">
      <Wrapper name={`promo`}>
        <div className="promo__container">
          <h2 className="promo__title">Лига Банк</h2>
          <p className="promo__text">Кредиты на любой случай</p>
          <a className="promo__link button button--light" aria-label="Перейти на страницу расчета кредита">Рассчитать кредит</a>
        </div>
      </Wrapper>
    </section>
  );
};

export default Promo;
