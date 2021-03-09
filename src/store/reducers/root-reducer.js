import {combineReducers} from "redux";
import {data} from "./data/data";
import {history} from "./history/history";

export const NameSpace = {
  DATA: `DATA`,
  HISTORY: `HISTORY`,
};

const {DATA, HISTORY} = NameSpace;

export default combineReducers({
  [DATA]: data,
  [HISTORY]: history,
});
