import React from "react";

const Square = prop => {
  const { size, color, canSplit, indent, handleSplit } = prop;

  let splitClass = `${canSplit ? "auto" : "none"}`;
  let splitCursorClass = `${canSplit ? "pointer" : "not-allowed"}`;

  return (
    <>
      <div
        style={{
          marginBottom: 10,
          marginLeft: indent,
          width: size,
          height: size,
          backgroundColor: color,
          cursor: splitCursorClass,
          pointerEvents: splitClass,
        }}
        onClick={() => handleSplit(size)}
      ></div>

      <hr style={{ marginTop: 5, marginBottom: 5 }} />
    </>
  );
};

export default Square;
