import { createStore, compose, applyMiddleware } from "redux";
import combineReducers from "./js/reducers/index";
import thunk from "redux-thunk";

const middleWare = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initState = {};
const store = createStore(
  combineReducers,
  initState,
  composeEnhancers(applyMiddleware(...middleWare))
);
export default store 