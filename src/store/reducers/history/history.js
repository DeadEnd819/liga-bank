import {extend} from "../../../utils";

const initialState = {
  history: []
};

const history = (state = initialState, action) => {
  switch (action.type) {
    case `UPDATED_HISTORY`:
      return extend(state, {
        history: [
          action.payload,
          ...state.history.slice(0, 9)
        ]
      });
    case `CLEAR_HISTORY`:
      return extend(state, {
        history: []
      });
  }

  return state;
};

export {history};
