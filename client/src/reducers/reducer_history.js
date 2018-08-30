import { ADD_HISTORY } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_HISTORY:
      let obj = Object.assign({}, state);
      obj[action.payload] = new Date();
      console.log("reducer", obj);
      return obj; //[action.payload, ...state];
    default:
      return state;
  }
};
