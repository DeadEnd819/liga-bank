import {extend} from "../../../utils";

const initialState = {
  history: null
};

const history = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_HISTORY`:
      return extend(state, {
        history: action.payload
      });
  }

  return state;
};

export {history};
