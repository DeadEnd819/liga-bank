import React from 'react';
import select from '../../img/icon-select.svg'

const FormItem = (props) => {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
    labelId,
    labelText
  } = props

  return (
    <fieldset className="form__fieldset">
      <label className="form__label" htmlFor={labelId}>{labelText}</label>
      <div className="form__inputs-wrapper">
        <input
          className="form__input"
          type="number"
          id={labelId}
          value={amount}
          onChange={onChangeAmount}
          placeholder="0" />

        <div className="form__select-wrapper">
          <select className="form__select" value={selectedCurrency} onChange={onChangeCurrency}>
            {currencyOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <img className="form__icon" src={select} alt="Выбор валюты"/>
        </div>
      </div>
    </fieldset>
  );
};

export default FormItem;
