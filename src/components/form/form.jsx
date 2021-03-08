import React, {useEffect, useState, useCallback} from 'react';
import FormItem from "../form-item/form-item";
import arrows from '../../img/icon-arrows.svg'
import calendar from '../../img/icon-calendar.svg'
import {BACKEND_URL} from "../../const";

const Form = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    fetch(`${BACKEND_URL}/latest?base=USD&symbols=USD,GBP,EUR,RUB,CNY`)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
      })
      .then(() => {
        setIsLoading(true);
      })
      .catch((error) => {
        throw error;
      });
  }, [setIsLoading]);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BACKEND_URL}/latest?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
        .catch((error) => {
          throw error;
        });
    }
  }, [fromCurrency, toCurrency]);

  const handleFromAmountChange = useCallback ((evt) => {
    setAmount(evt.target.value)
    setAmountInFromCurrency(true)
  },[]);

  const handleToAmountChange = useCallback ((evt) => {
    setAmount(evt.target.value)
    setAmountInFromCurrency(false)
  }, []);

  return !isLoading ? <h2>Loading...</h2> : (
    <form className="converter__form form">
      <div className="form__wrapper">
        <FormItem
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(evt) => setFromCurrency(evt.target.value)}
          onChangeAmount={handleFromAmountChange}
          amount={fromAmount}
          labelId={`from`}
          labelText={`У меня есть`}
        />
        <FormItem
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={(evt) => setToCurrency(evt.target.value)}
          onChangeAmount={handleToAmountChange}
          amount={toAmount}
          labelId={`to`}
          labelText={`Хочу приобрести`}
        />
        <img className="form__icon form__icon--arrows" src={arrows} alt="Иконка стрелки"/>
      </div>
      <div className="form__wrapper">
        <input className="form__calendar" type="text" placeholder="" value="1.12.2020" readOnly />
        <button className="form__calendar-button button">Сохранить результат</button>
        <img className="form__icon form__icon--calendar" src={calendar} alt="Иконка календарь"/>
      </div>
    </form>
  );
};

export default Form;
