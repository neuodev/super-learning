import React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const Draw = ({ canvasRef, onMouseUp }) => {
  return (
    <div className="h-full w-full">
      <h1 className="text-left mb-2 text-lg uppercase tracking-wider">
        Draw a digit
      </h1>
      <div
        onMouseUp={onMouseUp}
        className="border border-gray-100 w-96 h-96 rounded-lg overflow-hidden shadow-2xl"
      >
        <ReactSketchCanvas
          ref={canvasRef}
          style={{
            border: "none",
          }}
          strokeWidth={30}
          strokeColor="#374151"
        />
      </div>
      <button
        className="bg-red-200 py-2 px-3 mt-2 rounded-md text-red-800 uppercase tracking-wider"
        onClick={() => canvasRef.current.clearCanvas()}
      >
        Clear
      </button>
    </div>
  );
};

export default Draw;
