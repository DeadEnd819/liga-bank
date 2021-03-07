import React from 'react';
import Form from "../form/form";
import History from "../history/history";

const Converter = () => {
  return (
    <section className="main__converter converter">
      <div className="converter__wrapper">
        <h2 className="converter__title">Конвертер валют</h2>
        <Form />
        <History />
      </div>
    </section>
  );
};

export default Converter;
