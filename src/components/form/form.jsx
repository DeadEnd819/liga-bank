import React, {useEffect, useCallback} from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import FormItem from '../form-item/form-item';
import Wrapper from '../wrapper/wrapper';
import {BASE_SYMBOLS, MAX_DAYS} from '../../const';
import {getMinDate, getDateTime} from '../../utils';
import {
  getDate,
  getRate,
  getSaleSymbol,
  getBuySymbol,
  getAmountToSale,
  getAmountToBuy,
  getLoadingFlag,
  getCurrentData
} from '../../store/selectors';
import {fetchData} from '../../store/api-actions';
import {setDate, setSaleSymbol, setBuySymbol, setCourse, setLoadingFlag, setHistory} from '../../store/action';
import 'react-datepicker/dist/react-datepicker.css';
import arrows from '../../img/icon-arrows.svg'
import calendar from '../../img/icon-calendar.svg'

const Form = ({
                date,
                rate,
                saleSymbol,
                buySymbol,
                amountToSale,
                amountToBuy,
                currentData,
                isLoading,
                setDate,
                setSaleSymbol,
                setBuySymbol,
                setCourse,
                loadData,
                setHistory
}) => {
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (rate) {
      setCourse(1 , rate);
    }
  }, [rate]);

  useEffect(() => {
    loadData(saleSymbol, buySymbol, date);
  }, [date, saleSymbol, buySymbol]);

  const handleSaleAmountChange = useCallback ((evt) => {
    setCourse(+evt.target.value, (evt.target.value * rate));
  },[rate]);

  const handleBuyAmountChange = useCallback ((evt) => {
    setCourse((evt.target.value / rate), +evt.target.value);
  }, [rate]);

  const handleFormSubmit = useCallback ((evt) => {
    evt.preventDefault();
    setHistory(currentData);
  }, [currentData]);

  return (
    <form className="converter__form form" onSubmit={handleFormSubmit}>
      <Wrapper name={`form`}>
        <FormItem
          currencyOptions={BASE_SYMBOLS}
          selectedCurrency={saleSymbol}
          onChangeCurrency={(evt) => setSaleSymbol(evt.target.value)}
          onChangeAmount={handleSaleAmountChange}
          amount={amountToSale}
          labelId={`sale`}
          labelText={`У меня есть`}
          disabled={isLoading}
        />
        <FormItem
          currencyOptions={BASE_SYMBOLS}
          selectedCurrency={buySymbol}
          onChangeCurrency={(evt) => setBuySymbol(evt.target.value)}
          onChangeAmount={handleBuyAmountChange}
          amount={amountToBuy}
          labelId={`buy`}
          labelText={`Хочу приобрести`}
          disabled={isLoading}
        />
        <img className="form__icon form__icon--arrows" src={arrows} alt="Иконка стрелки"/>
      </Wrapper>
      <Wrapper name={`form`}>
        <DatePicker
          selected={date}
          minDate={getMinDate(new Date(), MAX_DAYS)}
          maxDate={new Date()}
          onChange={(date) => setDate(date)}
          dateFormat="dd.MM.yyyy"
          className="form__calendar"
        />
        <button className="form__calendar-button button" type="submit">Сохранить результат</button>
        <img className="form__icon form__icon--calendar" src={calendar} alt="Иконка календарь"/>
      </Wrapper>
    </form>
  );
};

const mapStateToProps = (store) => ({
  date: getDate(store),
  rate: getRate(store),
  saleSymbol: getSaleSymbol(store),
  buySymbol: getBuySymbol(store),
  amountToSale: getAmountToSale(store),
  amountToBuy: getAmountToBuy(store),
  isLoading: getLoadingFlag(store),
  currentData: getCurrentData(store),
});

const mapDispatchToProps = (dispatch) => ({
  setDate(date) {
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
  loadData(saleSymbol, buySymbol, date) {
    dispatch(setLoadingFlag(true));
    dispatch(fetchData(saleSymbol, buySymbol, getDateTime(date)));
  },
  setHistory(data) {
    dispatch(setHistory(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
