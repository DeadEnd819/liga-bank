import {extend} from '../../../utils';
import {ActionType, BASE_RATE, BASE_SYMBOLS} from '../../../const';

const {
  CHANGE_DATE,
  LOAD_RATE,
  CHANGE_SALE_SYMBOL,
  CHANGE_BUY_SYMBOL,
  CHANGE_COURSE,
  CHANGE_LOADING
} = ActionType;

const initialState = {
  date: new Date(),
  exchangeRate: BASE_RATE,
  saleSymbol: BASE_SYMBOLS[0],
  buySymbol: BASE_SYMBOLS[1],
  amountToSale: BASE_RATE,
  amountToBuy: BASE_RATE,
  isLoading: true,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DATE:
      return extend(state, {
        date: action.payload,
      });
    case LOAD_RATE:
      return extend(state, {
        exchangeRate: action.payload,
      });
    case CHANGE_SALE_SYMBOL:
      return extend(state, {
        saleSymbol: action.payload,
      });
    case CHANGE_BUY_SYMBOL:
      return extend(state, {
        buySymbol: action.payload,
      });
    case CHANGE_COURSE:
      return extend(state, {
        amountToSale: action.payload.sale,
        amountToBuy: action.payload.buy,
      });
    case CHANGE_LOADING:
      return extend(state, {
        isLoading: action.payload,
      });
  }

  return state;
};

export {data};
