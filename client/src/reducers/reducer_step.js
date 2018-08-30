import { GOTO_STEP } from "../actions";

export default (state = "", action) => {
  switch (action.type) {
    case GOTO_STEP:
      return action.payload;
    default:
      return state;
  }
};
