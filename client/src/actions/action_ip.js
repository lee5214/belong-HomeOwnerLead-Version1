const ADD_HISTORY = "addHistory";
const axios = require("axios");
const FETCH_IP = "fetchIP";
const fetchIP = () => async dispatch => {
  await axios
    .get("/ip")
    .then(res => dispatch({ type: FETCH_IP, payload: res.data }))
    .catch(error => dispatch({ type: FETCH_IP, payload: null }));
};
export { FETCH_IP, fetchIP };
