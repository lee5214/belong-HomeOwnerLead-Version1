import axios from "axios";
const FETCH_RENT_ZESTIMATE = "fetchRentZestimate";
const fetchRentZestimate = term => async dispatch => {
  let arr = term.split(",");
  if (arr.length < 4) {
    dispatch({
      type: FETCH_RENT_ZESTIMATE,
      error: "address format is not correct"
    });
  } else {
    let citystatezip = arr[arr.length - 3] + arr[arr.length - 2];
    let address = arr.slice(0, arr.length - 3).join("");

    // post server
    await axios
      .post("/rent", { address, citystatezip })
      .then(res => {
        dispatch({ type: FETCH_RENT_ZESTIMATE, payload: res.data });
      })
      .catch(error => {
        dispatch({
          type: FETCH_RENT_ZESTIMATE,
          error: error.response.data.message,
          address: error.response.data.address,
          citystatezip: error.response.data.citystatezip
        });
        console.log(
          "error when fetch from server: ",
          error.response.data.message
        );
      });
  }
};
export { FETCH_RENT_ZESTIMATE, fetchRentZestimate };
