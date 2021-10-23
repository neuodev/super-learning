import React from "react";
import { TYPES } from "../../utils/types";
import Alert from "../common/Alert";
import Spinner from "../common/Spinner";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ExtremeTweets = ({ tweets, loading, error }) => {
  const { most_postive, most_negative } = tweets;
  return (
    <div className="mt-12 px-4 mx-auto max-w-screen-lg">
      {error ? (
        <div>
          <Alert type={TYPES.ERROR} message={error} />
        </div>
      ) : (
        <div>
          {" "}
          <h1 className="text-3xl text-gray-800 mb-5">
            Out Of Last <span className="font-bold text-4xl"> 100</span> Tweets
            Found:{" "}
          </h1>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-6 border p-4 rounded-lg shadow-lg">
              <h1 className="text-xs text-green-400">Most Postive Tweet</h1>
              <p className="text-gray-800 mb-4 mt-1 font-semibold tracking-wide">
                {most_postive ? most_negative.tweet : <Skeleton count={5} />}
              </p>
              <p className="flex items-center justify-start">
                <span className="text-gray-400 text-sm">Polarity: </span>{" "}
                <span className="font-bold  ml-1">
                  {most_postive ? (
                    most_postive.polarity.toFixed(3)
                  ) : (
                    <Skeleton width={50} />
                  )}
                </span>
              </p>
              <p className="flex items-center justify-start">
                <span className="text-gray-400 text-sm">Subjectivity: </span>{" "}
                <span className="font-bold  ml-1">
                  {most_postive ? (
                    most_postive.subjectivity.toFixed(3)
                  ) : (
                    <Skeleton width={50} />
                  )}
                </span>
              </p>
            </div>
            <div className="col-span-6 border p-4 rounded-lg shadow-lg">
              <h1 className="text-xs text-red-400">Most Negative Tweet</h1>
              <p className="text-gray-800 mb-4 mt-1 font-semibold tracking-wide">
                {most_negative ? most_postive.tweet : <Skeleton count={5} />}
              </p>
              <p className="flex items-center justify-start">
                <span className="text-gray-400 text-sm">Polarity: </span>{" "}
                <span className="font-bold  ml-1">
                  {most_negative ? (
                    most_negative.polarity.toFixed(3)
                  ) : (
                    <Skeleton width={50} />
                  )}
                </span>
              </p>
              <p className="flex items-center justify-start">
                <span className="text-gray-400 text-sm">Subjectivity: </span>{" "}
                <span className="font-bold  ml-1">
                  {most_negative ? (
                    most_negative.subjectivity.toFixed(3)
                  ) : (
                    <Skeleton width={50} />
                  )}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExtremeTweets;
