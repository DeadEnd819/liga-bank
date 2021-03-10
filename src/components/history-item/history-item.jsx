import React from 'react';
import PropTypes from 'prop-types';
import {normalizeAmount} from '../../utils';
import arrow from '../../img/icon-arrow.svg';

const HistoryItem = ({data}) => {
  const  {date, sale, buy} = data;

  return (
    <li className="history__item">
      <time className="history__date" dateTime={date}>{date}</time>
      <p className="history__sale">{normalizeAmount(sale.amount)} <span className="history__symbol">{sale.symbol}</span></p>
      <span className="history__icon-wrapper">
                <img className="history__icon" src={arrow} alt="Иконка стрелка"/>
              </span>
      <p className="history__buy">{normalizeAmount(buy.amount)} <span className="history__symbol">{buy.symbol}</span></p>
    </li>
  );
};

HistoryItem.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string.isRequired,
    sale: PropTypes.shape({
      symbol: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired,
    buy: PropTypes.shape({
      symbol: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};


export default HistoryItem;
