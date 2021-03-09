import moment from "moment";

export const normalizeAmount = (amount) => {
  return amount.toString().replace(`.`, `,`);
};

export const getMinDate = (date, days) => {
  return date.setDate(date.getDate() - days);
};

export const getDateTime = (date) => {
  return moment(date).format(`YYYY-MM-DD`);
};

export const getDateToHistory = (date) => {
  return moment(date).format(`DD.MM.YYYY`);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

