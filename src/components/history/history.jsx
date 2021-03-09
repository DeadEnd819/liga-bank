import React from 'react';
import {connect} from 'react-redux';
import HistoryItem from '../history-item/history-item';
import {getHistory} from '../../store/selectors';
import {clearHistory} from '../../store/action';

const History = ({history, clearHistory}) => {
  const items = !history.length ?
    <li><p>Нет данных</p></li> :
    history.map((data, index) => <HistoryItem key={data + index} data={data} />);

  return (
    <div className="converter__history history">
      <h2 className="history__title">История конвертация</h2>
      <ul className="history__list">
        {items}
      </ul>
      <button className="history__button button" onClick={() => clearHistory()}>Очистить историю</button>
    </div>
  );
};

const mapStateToProps = (store) => ({
  history: getHistory(store),
});

const mapDispatchToProps = (dispatch) => ({
  clearHistory(data) {
    dispatch(clearHistory(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
