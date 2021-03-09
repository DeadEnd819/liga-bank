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
    labelText,
    disabled
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
          placeholder="0"
          max="99999999"
          disabled={disabled}
        />

        <div className="form__select-wrapper">
          <select className="form__select" value={selectedCurrency} onChange={onChangeCurrency} disabled={disabled}>
            {currencyOptions.map((option, index) => (
              <option key={option + index} value={option}>{option}</option>
            ))}
          </select>
          <img className="form__icon" src={select} alt="Выбор валюты"/>
        </div>
      </div>
    </fieldset>
  );
};

export default FormItem;
