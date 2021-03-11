import React from 'react';
import PropTypes from 'prop-types';

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
          <label className="visually-hidden" htmlFor={`select-${labelId}`}>Выбор валюты</label>
          <select
            className="form__select"
            id={`select-${labelId}`}
            value={selectedCurrency}
            onChange={onChangeCurrency}
            disabled={disabled}>
            {currencyOptions.map((option, index) => (
              <option key={option + index} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
    </fieldset>
  );
};

FormItem.propTypes = {
  currencyOptions: PropTypes.arrayOf(PropTypes.string.isRequired),
  selectedCurrency: PropTypes.string.isRequired,
  onChangeCurrency: PropTypes.func.isRequired,
  onChangeAmount: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
  labelId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default FormItem;
