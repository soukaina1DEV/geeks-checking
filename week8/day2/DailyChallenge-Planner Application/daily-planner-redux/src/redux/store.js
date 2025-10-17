import { createStore } from "redux";
import { plannerReducer } from "./reducers";

export const store = createStore(
  plannerReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
