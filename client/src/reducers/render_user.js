import { SAVE_USER } from "../actions";

export default (state = null, action) => {
  switch (action.type) {
    case SAVE_USER:
      return action.payload;
    default:
      return state;
  }
};
