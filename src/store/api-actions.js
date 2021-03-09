import {BASE_SYMBOLS, BASE_DATE} from '../const';
import {
  setExchangeRate,
  setSaleSymbol,
  setBuySymbol,
  setLoadingFlag,
} from './action';

export const fetchData = (
  fromCurrency = BASE_SYMBOLS[0],
  toCurrency = BASE_SYMBOLS[1],
  date = BASE_DATE
) => (dispatch, _getState, api) => (
  api.get(`/${date}?base=${fromCurrency}&symbols=${toCurrency}`)
    .then(({data}) => {
      dispatch(setExchangeRate(...Object.values(data.rates)));
      dispatch(setSaleSymbol(data.base));
      dispatch(setBuySymbol(toCurrency));
    })
    .then(() => dispatch(setLoadingFlag(false)))
    .catch(() => {
      throw Error(`Ошибка загрузки данных`);
    })
);
