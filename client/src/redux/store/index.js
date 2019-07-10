import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";

const logger = store => next => action => {
  console.log("dispatching", action);
  next(action);
  console.log("next state", store.getState());
};

const store = createStore(reducers, applyMiddleware(logger));

export default store;
