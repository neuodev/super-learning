import React from "react";

const simple = new Array(10).fill(0.403);
const conv = new Array(10).fill(0.03);

const Output = ({ preds }) => {
  const { ann, cnn } = preds;
  return (
    <div className=" mt-8">
      <ul className="grid grid-cols-12 border-b gap-3">
        <li className="col-span-4"></li>
        <li className="col-span-4 py-2 text-center text-sm">Simple ANN</li>
        <li className="col-span-4 py-2 text-center text-sm">CNN</li>
      </ul>
      {ann.preds.map((pred, idx) => (
        <ul
          className="grid grid-cols-12 border-b text-gray-700 gap-3"
          key={idx}
        >
          <li className="col-span-4  py-2 px-4 text-sm font-bold">{idx}</li>
          <li
            className={`col-span-4 ${
              idx === ann.number && "bg-green-500 text-green-800 font-semibold"
            } text-sm  text-center py-2 transition-colors duration-200`}
          >
            {Number(pred).toFixed(3)}
          </li>
          <li
            className={`col-span-4 ${
              idx === cnn.number && "bg-green-500 text-green-800 font-semibold"
            } text-sm text-center py-2 transition-colors duration-200`}
          >
            {Number(cnn.preds[idx]).toFixed(3)}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Output;
