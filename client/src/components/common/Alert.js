import React from "react";
import { TYPES } from "../../utils/types";

const Alert = ({ message, type }) => {
  return (
    <div className={`w-full`}>
      <div
        className={` ${
          type === TYPES.SUCCESS
            ? "bg-green-200 text-green-700"
            : type === TYPES.ERROR
            ? "bg-red-200 text-red-700"
            : "bg-yellow-200 text-yellow-700"
        } m-4 rounded-sm py-2 px-4 shadow-sm flex items-center justify-start`}
      >
        {type === TYPES.ERROR ? (
          <i className="fas fa-exclamation inline-block p-2 px-3.5 rounded-full bg-red-100 text-red-600"></i>
        ) : type === TYPES.SUCCESS ? (
          <i className="fas fa-check p-2 rounded-full bg-green-100 text-green-600"></i>
        ) : (
          <i className="fas fa-exclamation-triangle  p-2 rounded-full bg-yellow-100 text-yellow-600"></i>
        )}
        <p className="ml-4">{message}</p>
      </div>
    </div>
  );
};

export default Alert;
