import React from "react";

const WordsTable = ({ similarWords }) => {
  return (
    <div className="max-w-screen-md mx-auto ">
      <ul className="grid grid-cols-12 ">
        <li className="col-span-3 "></li>
        <li className="col-span-6 border px-4 py-2">Word</li>
        <li className="col-span-3 border px-4 py-2">Similarity Score</li>
      </ul>
      {similarWords.map((row, idx) => (
        <ul className="grid grid-cols-12  text-gray-800 font-medium" key={idx}>
          <li className="col-span-3 border px-4 py-2">{idx + 1}</li>
          <li className="col-span-6 border px-4 py-2">{row[0]}</li>
          <li className="col-span-3 border px-4 py-2">{row[1].toFixed(2)}</li>
        </ul>
      ))}
    </div>
  );
};

export default WordsTable;
