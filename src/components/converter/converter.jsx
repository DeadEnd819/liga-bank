import React from 'react';
import Form from '../form/form';
import History from '../history/history';
import Wrapper from '../wrapper/wrapper';

const Converter = () => {
  return (
    <section className="main__converter converter">
      <Wrapper name={`converter`}>
        <h2 className="converter__title">Конвертер валют</h2>
        <Form />
        <History />
      </Wrapper>
    </section>
  );
};

export default Converter;
