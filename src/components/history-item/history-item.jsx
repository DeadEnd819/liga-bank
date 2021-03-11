import React from 'react';
import {ReactSVG} from 'react-svg';
import {normalizeAmount} from '../../utils';
import arrow from '../../img/icon-arrow.svg';
import {DataProp} from '../../prop-types/prop-types';

const HistoryItem = ({data}) => {
  const {date, sale, buy} = data;

  return (
    <li className="history__item">
      <time className="history__date" dateTime={date}>{date}</time>
      <p className="history__sale">{normalizeAmount(sale.amount)}
        <span className="history__symbol">{sale.symbol}</span>
      </p>
      <span className="history__icon-wrapper">
        <ReactSVG className="history__icon" src={arrow} />
      </span>
      <p className="history__buy">{normalizeAmount(buy.amount)}
        <span className="history__symbol">{buy.symbol}</span>
      </p>
    </li>
  );
};

HistoryItem.propTypes = {
  data: DataProp.isRequired,
};


export default HistoryItem;
