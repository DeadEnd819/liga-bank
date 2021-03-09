export const setDate = (date) => ({
  type: `CHANGE_DATE`,
  payload: date,
});

export const setExchangeRate = (rate) => ({
  type: `LOAD_RATE`,
  payload: rate,
});

export const setSaleSymbol = (symbol) => ({
  type: `CHANGE_SALE_SYMBOL`,
  payload: symbol,
});

export const setBuySymbol = (symbol) => ({
  type: `CHANGE_BUY_SYMBOL`,
  payload: symbol,
});

export const setCourse = (sale, buy) => ({
  type: `CHANGE_COURSE`,
  payload: {sale, buy},
});

export const setLoadingFlag = (bool) => ({
  type: `CHANGE_LOADING`,
  payload: bool,
});

export const setHistory = (data) => ({
  type: `UPDATED_HISTORY`,
  payload: data,
});

export const clearHistory = () => ({
  type: `CLEAR_HISTORY`
});
