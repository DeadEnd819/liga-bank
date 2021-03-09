import moment from "moment";

export const getMinDate = (date, days) => {
  return date.setDate(date.getDate() - days);
};

export const getDateTime = (date) => {
  return moment(date).format(`YYYY-MM-DD`);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

