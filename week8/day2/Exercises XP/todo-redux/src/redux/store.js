import { createStore } from "redux";
import { todoReducer } from "./reducers";

// Enable Redux DevTools if available
export const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
