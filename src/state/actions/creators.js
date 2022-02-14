import { types } from "./types";

const splitSquare = (id, key) => {
  return dispatch => {
    dispatch({
      type: types.splitSquare,
      payload: {
        id,
        key,
      },
    });
  };
};

const undoSplit = () => {
  return dispatch => {
    dispatch({
      type: types.undoSplit,
      payload: {},
    });
  };
};

const redoSplit = () => {
  return dispatch => {
    dispatch({
      type: types.redoSplit,
      payload: {},
    });
  };
};

const resetSquare = () => {
  return dispatch => {
    dispatch({
      type: types.resetSquare,
      payload: {},
    });
  };
};

export { splitSquare, undoSplit, redoSplit, resetSquare };
