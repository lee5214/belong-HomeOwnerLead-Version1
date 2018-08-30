import { combineReducers } from "redux";
import reducer_user from "./render_user";
import reducer_history from "./reducer_history";
import reducer_rent from "./reducer_rent";
import reducer_step from "./reducer_step";
import reducer_ip from "./render_ip";

export default combineReducers({
  user: reducer_user,
  history: reducer_history,
  rentData: reducer_rent,
  step: reducer_step,
  ip: reducer_ip
});
