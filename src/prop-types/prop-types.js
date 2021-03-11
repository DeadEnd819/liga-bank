import PropTypes from "prop-types";

const {shape, number, string} = PropTypes;

export const ContactsItemProp = shape({
  type: string.isRequired,
  number: string.isRequired,
  text: string.isRequired,
  icon: string.isRequired,
});

export const DataProp = shape({
  date: string.isRequired,
  sale: shape({
    symbol: string.isRequired,
    amount: number.isRequired,
  }).isRequired,
  buy: shape({
    symbol: string.isRequired,
    amount: number.isRequired,
  }).isRequired,
});
