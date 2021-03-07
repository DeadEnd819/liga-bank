import React from 'react';
import arrow from '../../img/icon-arrow.svg'

const History = () => {
  return (
    <div className="converter__history history">
      <h2 className="history__title">История конвертация</h2>
      <ul className="history__list">
        <li className="history__item">
          <time className="history__date" dateTime="25.11.2020">25.11.2020</time>
          <p className="history__sale">1000 <span className="history__symbol">RUB</span></p>
          <span className="history__icon-wrapper">
                <img className="history__icon" src={arrow} alt="Иконка стрелка"/>
              </span>
          <p className="history__buy">13,1234 <span className="history__symbol">USD</span></p>
        </li>
      </ul>
      <button className="history__button button">Очистить историю</button>
    </div>
  );
};

export default History;
