import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./state/store";
import SquareBox from "./components/SquareBox";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SquareBox />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
