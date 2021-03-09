import React, {useEffect, useCallback} from 'react';
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import FormItem from "../form-item/form-item";
import {BASE_SYMBOLS, MAX_DAYS} from "../../const";
import {getMinDate, getDateTime} from "../../utils";

import {getDate, getRate, getSaleSymbol, getBuySymbol, getCurrencyToSale, getCurrencyToBuy, getLoadingFlag} from "../../store/selectors";
import {fetchData} from "../../store/api-actions";
import {setDate, setSaleSymbol, setBuySymbol, setCourse, setLoadingFlag} from "../../store/action";

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
                setSaleSymbol,
                setBuySymbol,
                setCourse,
                loadDataTest,
}) => {
  useEffect(() => {
    loadDataTest();
  }, []);

  useEffect(() => {
    if (rateTest) {
      setCourse(1 , rateTest);
    }
  }, [rateTest]);

  useEffect(() => {
    if (saleSymbol !== null && buySymbol !== null) {
      loadDataTest(saleSymbol, buySymbol, dateTest);
    }
  }, [dateTest, saleSymbol, buySymbol]);

  const handleFromAmountChange = useCallback ((evt) => {
    setCourse(+evt.target.value, (evt.target.value * rateTest));
  },[rateTest]);

  const handleToAmountChange = useCallback ((evt) => {
    setCourse((evt.target.value / rateTest), +evt.target.value);
  }, [rateTest]);

  return (
    <form className="converter__form form">
      <div className="form__wrapper">
        <FormItem
          currencyOptions={BASE_SYMBOLS}
          selectedCurrency={saleSymbol}
          onChangeCurrency={(evt) => setSaleSymbol(evt.target.value)}
          onChangeAmount={handleFromAmountChange}
          amount={currencyToSale}
          labelId={`sale`}
          labelText={`У меня есть`}
          disabled={isLoadingTest}
        />
        <FormItem
          currencyOptions={BASE_SYMBOLS}
          selectedCurrency={buySymbol}
          onChangeCurrency={(evt) => setBuySymbol(evt.target.value)}
          onChangeAmount={handleToAmountChange}
          amount={currencyToBuy}
          labelId={`buy`}
          labelText={`Хочу приобрести`}
          disabled={isLoadingTest}
        />
        <img className="form__icon form__icon--arrows" src={arrows} alt="Иконка стрелки"/>
      </div>
      <div className="form__wrapper">
        <DatePicker
          selected={dateTest}
          minDate={getMinDate(new Date(), MAX_DAYS)}
          maxDate={new Date()}
          onChange={(date) => setDateTest(date)}
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
  setSaleSymbol(symbol) {
    dispatch(setSaleSymbol(symbol));
  },
  setBuySymbol(symbol) {
    dispatch(setBuySymbol(symbol));
  },
  setCourse(sale, buy) {
    dispatch(setCourse(+sale.toFixed(4), +buy.toFixed(4)));
  },
  loadDataTest(saleSymbol, buySymbol, date) {
    dispatch(setLoadingFlag(true));
    dispatch(fetchData(saleSymbol, buySymbol, getDateTime(date)));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
