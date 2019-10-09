import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import * as reducers from "./state/reducers";

import "bulma/css/bulma.css";
import "./styles.scss";

const monsterReducer = combineReducers({
  store: reducers.reducerFeature
});

const store = createStore(
  monsterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
