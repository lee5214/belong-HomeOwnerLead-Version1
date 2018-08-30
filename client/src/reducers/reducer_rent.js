import { FETCH_RENT_ZESTIMATE } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_RENT_ZESTIMATE:
      if (action.error) {
        return {
          error: action.error,
          address: action.address,
          citystatezip: action.citystatezip
        };
      }
      return action.payload;
    default:
      return state;
  }
};
