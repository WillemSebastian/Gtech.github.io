import { combineReducers } from "redux";
import shop from "./shop";
import cart from "./cart";

export default combineReducers({ shop, cart });
