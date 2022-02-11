import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { loadState, saveState } from "./storage";
import { DEFAULT_SIZE } from "./constants";

const initKey = Date.now().toString();

const initState = {
  squares: [
    {
      key: initKey,
      size: DEFAULT_SIZE,
      color: "#000000",
      isShown: true,
      canSplit: true,
      indent: 0,
      parent: 0,
    },
  ],
  lastChanged: 0,
  changeLog: [],
};

const getState = loadState();

const store = createStore(reducer, getState, applyMiddleware(thunk));

store.subscribe(() => {
  saveState(store.getState());
});

export { initState, store };
