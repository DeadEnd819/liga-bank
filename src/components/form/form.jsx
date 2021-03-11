import React, {useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import {ReactSVG} from 'react-svg';
import FormItem from '../form-item/form-item';
import Wrapper from '../wrapper/wrapper';
import {BASE_RATE, BASE_SYMBOLS, MAX_DAYS} from '../../const';
import {getMinDate, getDateTime} from '../../utils';
import {DataProp} from '../../prop-types/prop-types';
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
import {
  setDate,
  setExchangeRate,
  setSaleSymbol,
  setBuySymbol,
  setCourse,
  setLoadingFlag,
  setHistory
} from '../../store/action';
import {fetchData} from '../../store/api-actions';
import 'react-datepicker/dist/react-datepicker.css';
import arrows from '../../img/icon-arrows.svg'

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
                resetExchangeRate,
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
      setCourse(BASE_RATE , rate);
    }
  }, [rate]);

  useEffect(() => {
    if (saleSymbol === buySymbol) {
      resetExchangeRate();
      return;
    }

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
        <ReactSVG className="form__icon form__icon--arrows" src={arrows} />
      </Wrapper>
      <Wrapper name={`form`}>
        <label className="visually-hidden" htmlFor="calendar">
          Выберите дату
        </label>
        <DatePicker
          className="form__calendar"
          id="calendar"
          dateFormat="dd.MM.yyyy"
          minDate={getMinDate(new Date(), MAX_DAYS)}
          maxDate={new Date()}
          selected={date}
          onChange={(date) => setDate(date)}
        />
        <button className="form__calendar-button button" type="submit">Сохранить результат</button>
      </Wrapper>
    </form>
  );
};

Form.propTypes = {
  date: PropTypes.instanceOf(Date),
  rate: PropTypes.number.isRequired,
  saleSymbol: PropTypes.string.isRequired,
  buySymbol: PropTypes.string.isRequired,
  amountToSale: PropTypes.number.isRequired,
  amountToBuy: PropTypes.number.isRequired,
  currentData: DataProp.isRequired,
  isLoading: PropTypes.bool.isRequired,
  setDate: PropTypes.func.isRequired,
  resetExchangeRate: PropTypes.func.isRequired,
  setSaleSymbol: PropTypes.func.isRequired,
  setBuySymbol: PropTypes.func.isRequired,
  setCourse: PropTypes.func.isRequired,
  loadData: PropTypes.func.isRequired,
  setHistory: PropTypes.func.isRequired,
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
  resetExchangeRate() {
    dispatch(setExchangeRate(BASE_RATE));
    dispatch(setCourse(BASE_RATE, BASE_RATE));
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
