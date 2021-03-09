import {extend} from '../../../utils';

const initialState = {
  date: new Date(),
  exchangeRate: null,
  saleSymbol: `RUB`,
  buySymbol: `USD`,
  currencyToSale : 1,
  currencyToBuy: 1,
  isLoading: null,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_DATE`:
      return extend(state, {
        date: action.payload,
      });
    case `LOAD_RATE`:
      return extend(state, {
        exchangeRate: action.payload,
      });
    case `CHANGE_SALE_SYMBOL`:
      return extend(state, {
        saleSymbol: action.payload,
      });
    case `CHANGE_BUY_SYMBOL`:
      return extend(state, {
        buySymbol: action.payload,
      });
    case `CHANGE_COURSE`:
      // console.log(action.payload);
      return extend(state, {
        currencyToSale: action.payload.sale,
        currencyToBuy: action.payload.buy,
      });
    // case `CHANGE_TO_SALE`:
    //   return extend(state, {
    //     currencyToSale: action.payload,
    //   });
    // case `CHANGE_TO_BUY`:
    //   return extend(state, {
    //     currencyToBuy: action.payload,
    //   });
    case `RESET_CURRENCY`:
      return extend(state, {
        currencyToSale: 1,
        currencyToBuy: 1,
      });
    case `CHANGE_LOADING`:
      return extend(state, {
        isLoading: action.payload,
      });
  }

  return state;
};

export {data};
