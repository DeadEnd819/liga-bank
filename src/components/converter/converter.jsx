import React from 'react';
import select from '../../img/icon-select.svg'
import arrows from '../../img/icon-arrows.svg'
import calendar from '../../img/icon-calendar.svg'
import arrow from '../../img/icon-arrow.svg'

const Converter = () => {
  return (
    <section className="main__converter converter">
      <div className="converter__wrapper">
        <h2 className="converter__title">Конвертер валют</h2>
        <form className="converter__form form">
          <div className="form__wrapper">
            <fieldset className="form__fieldset">
              <label className="form__label" htmlFor="from">У меня есть</label>
              <div className="form__inputs-wrapper">
                <input className="form__input" type="number" id="from" placeholder="0" />
                <div className="form__select-wrapper">
                  <select className="form__select">
                    <option value="RUB">RUB</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="CHY">CHY</option>
                  </select>
                  <img className="form__icon" src={select} alt="Выбор валюты"/>
                </div>
              </div>
            </fieldset>
            <fieldset className="form__fieldset">
              <label className="form__label" htmlFor="to">Хочу приобрести</label>
              <div className="form__inputs-wrapper">
                <input className="form__input" type="number" id="from" placeholder="0"/>
                <div className="form__select-wrapper">
                  <select className="form__select">
                    <option value="RUB">RUB</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="CHY">CHY</option>
                  </select>
                  <img className="form__icon" src={select} alt="Выбор валюты"/>
                </div>
              </div>
            </fieldset>
            <img className="form__icon form__icon--arrows" src={arrows} alt="Иконка стрелки"/>
          </div>
          <div className="form__wrapper">
            <input className="form__calendar" type="text" placeholder="" value="1.12.2020" readOnly />
            <button className="form__calendar-button button">Сохранить результат</button>
            <img className="form__icon form__icon--calendar" src={calendar} alt="Иконка календарь"/>
          </div>
        </form>
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
            <li className="history__item">
              <time className="history__date" dateTime="25.11.2020">25.11.2020</time>
              <p className="history__sale">1000 <span className="history__symbol">RUB</span></p>
              <span className="history__icon-wrapper">
                <img className="history__icon" src={arrow} alt="Иконка стрелка"/>
              </span>
              <p className="history__buy">13,1234 <span className="history__symbol">USD</span></p>
            </li>
            <li className="history__item">
              <time className="history__date" dateTime="25.11.2020">25.11.2020</time>
              <p className="history__sale">1000 <span className="history__symbol">RUB</span></p>
              <span className="history__icon-wrapper">
                <img className="history__icon" src={arrow} alt="Иконка стрелка"/>
              </span>
              <p className="history__buy">13,1234 <span className="history__symbol">USD</span></p>
            </li>
            <li className="history__item">
              <time className="history__date" dateTime="25.11.2020">25.11.2020</time>
              <p className="history__sale">1000 <span className="history__symbol">RUB</span></p>
              <span className="history__icon-wrapper">
                <img className="history__icon" src={arrow} alt="Иконка стрелка"/>
              </span>
              <p className="history__buy">13,1234 <span className="history__symbol">USD</span></p>
            </li>
            <li className="history__item">
              <time className="history__date" dateTime="25.11.2020">25.11.2020</time>
              <p className="history__sale">1000 <span className="history__symbol">RUB</span></p>
              <span className="history__icon-wrapper">
                <img className="history__icon" src={arrow} alt="Иконка стрелка"/>
              </span>
              <p className="history__buy">13,1234 <span className="history__symbol">USD</span></p>
            </li>
            <li className="history__item">
              <time className="history__date" dateTime="25.11.2020">25.11.2020</time>
              <p className="history__sale">1000 <span className="history__symbol">RUB</span></p>
              <span className="history__icon-wrapper">
                <img className="history__icon" src={arrow} alt="Иконка стрелка"/>
              </span>
              <p className="history__buy">13,1234 <span className="history__symbol">USD</span></p>
            </li>
            <li className="history__item">
              <time className="history__date" dateTime="25.11.2020">25.11.2020</time>
              <p className="history__sale">1000 <span className="history__symbol">RUB</span></p>
              <span className="history__icon-wrapper">
                <img className="history__icon" src={arrow} alt="Иконка стрелка"/>
              </span>
              <p className="history__buy">13,1234 <span className="history__symbol">USD</span></p>
            </li>
            <li className="history__item">
              <time className="history__date" dateTime="25.11.2020">25.11.2020</time>
              <p className="history__sale">1000 <span className="history__symbol">RUB</span></p>
              <span className="history__icon-wrapper">
                <img className="history__icon" src={arrow} alt="Иконка стрелка"/>
              </span>
              <p className="history__buy">13,1234 <span className="history__symbol">USD</span></p>
            </li>
            <li className="history__item">
              <time className="history__date" dateTime="25.11.2020">25.11.2020</time>
              <p className="history__sale">1000 <span className="history__symbol">RUB</span></p>
              <span className="history__icon-wrapper">
                <img className="history__icon" src={arrow} alt="Иконка стрелка"/>
              </span>
              <p className="history__buy">13,1234 <span className="history__symbol">USD</span></p>
            </li>
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
      </div>
    </section>
  );
};

export default Converter;
