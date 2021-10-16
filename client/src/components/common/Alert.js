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
        } m-4 rounded-sm py-2 px-4 shadow-sm`}
      >
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Alert;
