import React, {useEffect, useState, useCallback} from 'react';
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import FormItem from "../form-item/form-item";
import {MAX_DAYS, BACKEND_URL} from "../../const";
import {getMinDate, getDateTime} from "../../utils";

import {getDate, getRate, getSaleSymbol, getBuySymbol, getCurrencyToSale, getCurrencyToBuy, getLoadingFlag} from "../../store/selectors";
import {fetchData} from "../../store/api-actions";
import {setDate, setCourse, setLoadingFlag} from "../../store/action";

import "react-datepicker/dist/react-datepicker.css";
import arrows from '../../img/icon-arrows.svg'
import calendar from '../../img/icon-calendar.svg'

const Form = ({
                dateTest,
                rateTest,
                saleSymbol,
                buySymbol,
                currencyToSale,
                currencyToBuy,
                isLoadingTest,
                setDateTest,
                setCourse,
                loadDataTest
}) => {
  const [date, setDate] = useState(new Date());
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  if (isLoadingTest) {
    loadDataTest();
  }
}, [isLoadingTest]);

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    fetch(`${BACKEND_URL}/latest?base=USD&symbols=GBP,EUR,RUB,CNY`)
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
    if (fromCurrency !== null && toCurrency !== null) {
      loadDataTest(fromCurrency, toCurrency, date);
    }

    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BACKEND_URL}/${getDateTime(date)}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
        .catch((error) => {
          throw error;
        });
    }
  }, [date, fromCurrency, toCurrency]);

  const handleDateChange = useCallback ((date) => {
    setDate(date);
    setDateTest(date);
  },[]);

  const handleFromCurrencyChange = useCallback ((evt) => {
    setFromCurrency(evt.target.value)
  },[]);

  const handleToCurrencyChange = useCallback ((evt) => {
    setToCurrency(evt.target.value)
  }, []);

  const handleFromAmountChange = useCallback ((evt) => {
    setAmount(evt.target.value)
    setAmountInFromCurrency(true)

    setCourse(+evt.target.value, (evt.target.value * rateTest));  //++++++++
  },[rateTest]);

  const handleToAmountChange = useCallback ((evt) => {
    setAmount(evt.target.value)
    setAmountInFromCurrency(false)

    setCourse((evt.target.value / rateTest), +evt.target.value);  //++++++++
  }, [rateTest]);

  return !isLoading ? <h2>Loading...</h2> : (
    <form className="converter__form form">
      <div className="form__wrapper">
        <FormItem
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={handleFromCurrencyChange}
          onChangeAmount={handleFromAmountChange}
          amount={fromAmount}
          labelId={`sale`}
          labelText={`У меня есть`}
        />
        <FormItem
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={handleToCurrencyChange}
          onChangeAmount={handleToAmountChange}
          amount={toAmount}
          labelId={`buy`}
          labelText={`Хочу приобрести`}
        />
        <img className="form__icon form__icon--arrows" src={arrows} alt="Иконка стрелки"/>
      </div>
      <div className="form__wrapper">
        <DatePicker
          selected={date}
          minDate={getMinDate(new Date(), MAX_DAYS)}
          maxDate={new Date()}
          onChange={handleDateChange}
          dateFormat="dd.MM.yyyy"
          className="form__calendar"
        />
        {/*<input className="form__calendar" type="text" placeholder="" value="1.12.2020" readOnly />*/}
        <button className="form__calendar-button button">Сохранить результат</button>
        <img className="form__icon form__icon--calendar" src={calendar} alt="Иконка календарь"/>
      </div>
    </form>
  );
};

const mapStateToProps = (store) => ({
  dateTest: getDate(store),
  rateTest: getRate(store),
  saleSymbol: getSaleSymbol(store),
  buySymbol: getBuySymbol(store),
  currencyToSale: getCurrencyToSale(store),
  currencyToBuy: getCurrencyToBuy(store),
  isLoadingTest: getLoadingFlag(store),
});

const mapDispatchToProps = (dispatch) => ({
  setDateTest(date) {
    dispatch(setDate(date));
  },
  setCourse(sale, buy) {
    dispatch(setCourse(sale, buy));
  },
  loadDataTest(saleSymbol, buySymbol, date) {
    dispatch(setLoadingFlag(true));
    dispatch(fetchData(saleSymbol, buySymbol, getDateTime(date)));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
