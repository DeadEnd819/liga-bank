import React from 'react';
import Promo from '../promo/promo';
import Converter from '../converter/converter';

const Main = () => {
  return (
    <main className="main">
      <h1 className="visually-hidden">Лига Банк - Конвертер валют</h1>
      <Promo />
      <Converter />
    </main>
  );
};

export default Main;
