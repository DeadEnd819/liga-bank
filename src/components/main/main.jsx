import React from 'react';

const Main = () => {
  return (
    <main>
      <h1 className="visually-hidden">Лига Банк - Конвертер валют</h1>
      <section>
        <h2>Лига Банк</h2>
        <p>Кредиты на любой случай</p>
        <button>Рассчитать кредит</button>
      </section>
      <section>
        <h2>Конвертер валют</h2>
        <form>
          <ul>
            <li>
              <label htmlFor="from">У меня есть</label>
              <input type="text" id="from"/>
              <select type="number">
                <option>USD</option>
                <option>RUB</option>
              </select>
            </li>
            <li>
              <label htmlFor="to">Хочу приобрести</label>
              <input type="text" id="to"/>
              <select>
                <option>RUB</option>
                <option>USD</option>
              </select>
            </li>
          </ul>
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
      </section>
    </main>
  );
};

export default Main;
