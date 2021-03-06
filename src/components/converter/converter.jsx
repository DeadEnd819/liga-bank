import React from 'react';

const Converter = () => {
  return (
    <section className="main__converter converter">
      <div className="converter__wrapper">
        <h2 className="converter__title">Конвертер валют</h2>
        <form className="converter__form form">
          <fieldset className="form__fieldset">
            <label className="form__label" htmlFor="from">У меня есть</label>
            <div className="form__inputs__wrapper">
              <input className="form__input" type="text" id="from"/>
              <select className="form__select">
                <option value="RUB">RUB</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="CHY">CHY</option>
              </select>
            </div>
          </fieldset>
          <fieldset className="form__fieldset">
            <label className="form__label" htmlFor="to">Хочу приобрести</label>
            <div className="form__inputs__wrapper">
              <input className="form__input" type="text" id="from"/>
              <select className="form__select">
                <option value="RUB">RUB</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="CHY">CHY</option>
              </select>
            </div>
          </fieldset>
          <ul>
            <input type="text" value="1.12.2020"/>
            <button>Сохранить результат</button>
          </ul>
        </form>
        <div>
          <h2>История конвертация</h2>
          <ul>
            <li>
              <span>25.11.2020</span>
              <span>1000 RUB</span>
              <span>13,1234 USD</span>
            </li>
            <li>
              <span>25.11.2020</span>
              <span>1000 RUB</span>
              <span>13,1234 USD</span>
            </li>
            <li>
              <span>25.11.2020</span>
              <span>1000 RUB</span>
              <span>13,1234 USD</span>
            </li>
            <li>
              <span>25.11.2020</span>
              <span>1000 RUB</span>
              <span>13,1234 USD</span>
            </li>
            <li>
              <span>25.11.2020</span>
              <span>1000 RUB</span>
              <span>13,1234 USD</span>
            </li>
          </ul>
          <ul>
            <li>
              <span>25.11.2020</span>
              <span>1000 RUB</span>
              <span>13,1234 USD</span>
            </li>
            <li>
              <span>25.11.2020</span>
              <span>1000 RUB</span>
              <span>13,1234 USD</span>
            </li>
            <li>
              <span>25.11.2020</span>
              <span>1000 RUB</span>
              <span>13,1234 USD</span>
            </li>
            <li>
              <span>25.11.2020</span>
              <span>1000 RUB</span>
              <span>13,1234 USD</span>
            </li>
            <li>
              <span>25.11.2020</span>
              <span>1000 RUB</span>
              <span>13,1234 USD</span>
            </li>
          </ul>
          <button>Очистить историю</button>
        </div>
      </div>
    </section>
  );
};

export default Converter;
