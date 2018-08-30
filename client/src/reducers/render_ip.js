import { FETCH_IP } from "../actions";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_IP:
      return action.payload;
    default:
      return state;
  }
};
