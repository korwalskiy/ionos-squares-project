import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../state/actions/creators";
import Square from "./Square";

const SquareBox = () => {
  const squares = useSelector(state => state.squares);
  const changeLog = useSelector(state => state.lastChanged);
  const dispatch = useDispatch();
  const { splitSquare, resetSquare, undoSplit, redoSplit } = bindActionCreators(
    actionCreators,
    dispatch
  );

  let undoPointerClass = `${changeLog.length != 1 ? "auto" : "none"}`;
  let undoCursorClass = `${changeLog.length != 1 ? "pointer" : "not-allowed"}`;
  let redoPointerClass = `${changeLog.length > 1 ? "auto" : "none"}`;
  let redoCursorClass = `${changeLog.length > 1 ? "pointer" : "not-allowed"}`;

  return (
    <div style={{ padding: 20 }}>
      <button
        onClick={() => resetSquare()}
        style={{
          backgroundColor: "#FF0000",
          border: "none",
          padding: 10,
          marginRight: 10,
          cursor: "pointer",
        }}
      >
        Reset
      </button>
      <button
        onClick={() => undoSplit()}
        style={{
          backgroundColor: "#FCE105",
          border: "none",
          padding: 10,
          pointerEvents: undoPointerClass,
          cursor: undoCursorClass,
          marginRight: 10,
        }}
      >
        Undo
      </button>
      <button
        onClick={() => redoSplit()}
        style={{
          backgroundColor: "#2AFF51",
          border: "none",
          padding: 10,
          pointerEvents: redoPointerClass,
          cursor: redoCursorClass,
        }}
      >
        Redo
      </button>
      <hr style={{ marginTop: 5, marginBottom: 5 }} />
      {squares.map(square => {
        return (
          square.isShown && (
            <Square
              key={square.key}
              size={square.size}
              color={square.color}
              canSplit={square.canSplit}
              indent={square.indent}
              handleSplit={() => splitSquare(square.size, square.key)}
            />
          )
        );
      })}
    </div>
  );
};

export default SquareBox;
