const ADD_HISTORY = "addHistory";
const addHistory = term => {
  return { type: ADD_HISTORY, payload: term };
};
export { ADD_HISTORY, addHistory };
