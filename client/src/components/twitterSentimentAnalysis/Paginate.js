import React from "react";

const Paginate = ({ nextPage, prevPage, isPrev, isNext }) => {
  return (
    <div className="flex items-center justify-center mt-4">
      <button
        className={`flex items-center justify-center px-4 py-2 ${
          isNext ? "bg-blue-500" : "bg-gray-400"
        } mr-4 rounded-md text-white`}
        disabled={!isNext}
        onClick={nextPage}
      >
        Next <i className="fas fa-chevron-down ml-1 "></i>
      </button>
      <button
        className={`flex items-center justify-center px-4 py-2 ${
          isPrev ? "bg-blue-500" : "bg-gray-400"
        } mr-4 rounded-md text-white`}
        disabled={!isPrev}
        onClick={prevPage}
      >
        Prev <i className="fas fa-chevron-up ml-1 "></i>
      </button>
    </div>
  );
};

export default Paginate;
