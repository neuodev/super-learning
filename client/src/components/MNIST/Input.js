import React from "react";

const Input = ({ inputRef }) => {
  return (
    <div className="mt-3">
      <h1 className="uppercase tracking-wider text-sm mb-2">Input:</h1>
      <canvas
        ref={inputRef}
        className="border shadow-lg rounded-lg bg-white"
        width="140"
        height="140"
      ></canvas>
    </div>
  );
};

export default Input;
