import React from 'react';
import select from '../../img/icon-select.svg'
import arrows from '../../img/icon-arrows.svg'
import calendar from '../../img/icon-calendar.svg'

const Form = () => {
  return (
    <form className="converter__form form">
      <div className="form__wrapper">
        <fieldset className="form__fieldset">
          <label className="form__label" htmlFor="from">У меня есть</label>
          <div className="form__inputs-wrapper">
            <input className="form__input" type="number" id="from" placeholder="0" />
            <div className="form__select-wrapper">
              <select value="RUB" className="form__select">
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
              <select value="USD" className="form__select">
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
  );
};

export default Form;
