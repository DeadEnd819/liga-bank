import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import HistoryItem from '../history-item/history-item';
import {getHistory} from '../../store/selectors';
import {clearHistory} from '../../store/action';

const History = ({history, clearHistory}) => {
  const items = !history.length ? <li><p>Нет данных</p></li> :
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

History.history = {
  currentData: PropTypes.shape({
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
  clearHistory: PropTypes.func.isRequired,
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
