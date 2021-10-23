import React from "react";

const CountSelector = ({ numberOfTweets, increase, decrease, loading }) => {
  return (
    <div className="flex items-center justify-center border px-2 py-1">
      <button
        onClick={decrease}
        disabled={loading}
        className={`focus:outline-none px-2 focus:ring bg-gray-100 text-gray-700 font-semibold rounded-md mr-4 ${
          loading && "cursor-not-allowed"
        }`}
      >
        <i className="fas fa-minus"></i>
      </button>

      <div className=" mr-4 font-bold text-gray-900 text-2xl">
        <p>{numberOfTweets}</p>
      </div>
      <button
        onClick={increase}
        disabled={loading}
        className={`focus:outline-none px-2 focus:ring bg-gray-100 text-gray-700 font-semibold rounded-md mr-4 ${
          loading && "cursor-not-allowed"
        }`}
      >
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default CountSelector;
