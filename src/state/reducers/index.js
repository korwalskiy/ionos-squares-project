import { initState, store } from "../store";
import { handleSplit } from "../helper";
import { types } from "../actions/types";

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.splitSquare:
      // find squares whose parent key == changeLog[lastChanged + 1] and remove them

      const childSquares = handleSplit(action.payload.id, action.payload.key);
      let parentIndex = [...state.squares].findIndex(
        sq => sq.key === action.payload.key
      );
      const parentSquare = { ...state.squares[parentIndex], canSplit: false };
      return {
        ...state,
        squares: [
          ...state.squares.slice(0, parentIndex),
          parentSquare,
          ...childSquares,
          ...state.squares.slice(parentIndex + 1),
        ],
        lastChanged: action.payload.key,
        changeLog: [...state.changeLog, action.payload.key],
      };

    case types.undoSplit:
      let lastParentKey = state.lastChanged;
      let lastParentKeyIndex = state.changeLog.indexOf(state.lastChanged);

      const undoSquares = [...state.squares].map(square => {
        if (square.parent === lastParentKey) {
          square.isShown = false;
        }
        return square;
      });

      return {
        ...state,
        squares: [...undoSquares],
        lastChanged: lastParentKeyIndex
          ? state.changeLog[lastParentKeyIndex - 1]
          : 0,
      };

    case types.redoSplit:
      let redoParentKeyIndex = state.lastChanged
        ? state.changeLog.indexOf(state.lastChanged) + 1
        : 0;
      let redoParentKey = state.changeLog[redoParentKeyIndex];

      const redoSquares = [...state.squares].map(square => {
        if (square.parent === redoParentKey) {
          square.isShown = true;
        }
        return square;
      });

      return {
        ...state,
        squares: [...redoSquares],
        lastChanged:
          redoParentKeyIndex === state.changeLog.length - 1
            ? redoParentKey
            : state.changeLog[redoParentKeyIndex],
      };

    case types.resetSquare:
      return {
        ...initState,
      };

    default:
      return state;
  }
};

export default reducer;
