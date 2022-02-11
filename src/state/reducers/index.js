import { initState } from "../store";
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
        lastChanged: state.changeLog.length - 1,
        changeLog: [...state.changeLog, action.payload.key],
      };

    case types.undoSplit:
      // newSquares - find squares whose parent key == changeLog[lastChanged], and set isShown to false
      // lastChanged - index of parent key in changeLog / lastChanged - 1

      let parentIndexToUndo = action.payload.key;
      const newSquares = [...state.squares].map(square => {
        if (square.parent === parentIndexToUndo) {
          square.isShown = false;
        }
        return square;
      });

      return {
        ...state,
        squares: [...newSquares],
        lastChanged: state.changeLog.length - 1,
      };

    case types.redoSplit:
      // const { newSquares, lastChanged } = redoSplit();
      // //find squares whose parent key == changeLog[lastChanged], and set isShown to true
      // // newSquares - find squares whose parent key == changeLog[lastChanged + 1], and set isShown to false
      // // lastChanged - lastChanged + 1
      // return {
      //   ...state,
      //   squares: [...state.squares, ...newSquares],
      //   lastChanged: lastChanged,
      // };
      break;

    case types.resetSquare:
      return {
        ...initState,
      };

    default:
      return state;
  }
};

export default reducer;
