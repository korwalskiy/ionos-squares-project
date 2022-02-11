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

const undoSplit = key => {
  return dispatch => {
    dispatch({
      type: types.undoSplit,
      payload: {
        key,
      },
    });
  };
};

const redoSplit = key => {
  return dispatch => {
    dispatch({
      type: types.redoSplit,
      payload: {
        key,
      },
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
