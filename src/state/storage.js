import { initState } from "./store";

const loadState = () => {
  try {
    const stateStored = window.localStorage.getItem("colorStore");
    if (stateStored !== null) {
      return JSON.parse(stateStored);
    }
    return initState;
  } catch (error) {
    return initState;
  }
};

const saveState = state => {
  try {
    window.localStorage.setItem("colorStore", JSON.stringify(state));
  } catch (error) {
    window.alert("Saving to localStorage failed!");
  }
};

export { loadState, saveState };
