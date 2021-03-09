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

export const getCurrencyToSale = (state) => {
  return state.DATA.currencyToSale;
};

export const getCurrencyToBuy = (state) => {
  return state.DATA.currencyToBuy;
};

export const getLoadingFlag = (state) => {
  return state.DATA.isLoading;
};
