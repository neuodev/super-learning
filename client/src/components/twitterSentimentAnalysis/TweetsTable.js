import React from "react";
import Spinner from "../common/Spinner";
import Alert from "../common/Alert";
import { TYPES } from "../../utils/types";
import { getColorScale } from "../../utils";
import Paginate from "./Paginate";

const TweetsTable = ({
  tweets,
  loading,
  error,
  isNext,
  isPrev,
  nextPage,
  prevPage,
}) => {
  return (
    <div className="max-w-screen-lg mx-auto">
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : error ? (
        <div>
          {" "}
          <Alert type={TYPES.ERROR} message={error} />
        </div>
      ) : (
        <div>
          <ul className="grid grid-cols-12 mb-6 border-b-2 border-r border-l shadow-2xl rounded-t-md">
            <li className="col-span-6  px-4 py-3 text-sm ">Tweet</li>
            <li className="col-span-2 px-4 py-3 text-sm text-center">
              Polarity (Positivity)
            </li>
            <li className="col-span-2 px-4 py-3 text-sm text-center">
              Subjectivity
            </li>
            <li className="col-span-2 px-4 py-3 text-sm text-center">
              Analysis
            </li>
          </ul>

          {tweets.map((tweet, idx) => (
            <ul
              key={idx}
              className="grid grid-cols-12 gap-5 mb-1 border-b text-gray-600"
            >
              <li className="col-span-6  px-4  py-3 truncate">
                {idx + 1} ) {tweet.tweet}
              </li>
              <li
                className={`col-span-2 px-4 font-medium text-center rounded-md mb-1 py-3 ${getColorScale(
                  tweet.polarity
                )} `}
              >
                {tweet.polarity.toFixed(2)}
              </li>
              <li
                className={`col-span-2 px-4 font-medium text-center rounded-md mb-1 py-3 ${getColorScale(
                  tweet.subjectivity
                )} `}
              >
                {tweet.subjectivity.toFixed(2)}
              </li>
              <li className="col-span-2 px-4  py-3 text-center">
                {tweet.analysis}
              </li>
            </ul>
          ))}
          {tweets && (
            <Paginate
              nextPage={nextPage}
              prevPage={prevPage}
              isNext={isNext}
              isPrev={isPrev}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default TweetsTable;
