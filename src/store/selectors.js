import {createSelector} from 'reselect';
import {getDateToHistory} from '../utils';

export const getDate = (state) => {
  return state.DATA.date;
};

export const getRate = (state) => {
  return state.DATA.exchangeRate;
};

export const getSaleSymbol = (state) => {
  return state.DATA.saleSymbol;
};

export const getBuySymbol = (state) => {
  return state.DATA.buySymbol;
};

export const getAmountToSale = (state) => {
  return state.DATA.amountToSale;
};

export const getAmountToBuy = (state) => {
  return state.DATA.amountToBuy;
};

export const getLoadingFlag = (state) => {
  return state.DATA.isLoading;
};

export const getHistory = (state) => {
  return state.HISTORY.history;
};

export const getCurrentData = createSelector(
    getDate,
    getSaleSymbol,
    getBuySymbol,
    getAmountToSale,
    getAmountToBuy,
    (date, saleSymbol, buySymbol, amountToSale, amountToBuy) => {
      return {
        date: getDateToHistory(date),
        sale: {
          symbol: saleSymbol,
          amount: amountToSale,
        },
        buy: {
          symbol: buySymbol,
          amount: amountToBuy,
        }
      };
    }
);
