import axios from "axios";
import React, { useEffect, useState } from "react";
import Alert from "../common/Alert";
import Spinner from "../common/Spinner";
import CountSelector from "./CountSelector";

const LatestTweetsAnalysis = ({ username }) => {
  const [userAnalysis, setUserAnalysis] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [numberOfTweets, setNumberOfTweets] = useState(100);

  useEffect(() => {
    const fetchDate = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/sentiment/latest/", {
          params: {
            username,
            number_of_tweets: numberOfTweets,
          },
        });
        setLoading(false);
        setError(null);
        setUserAnalysis(data);
        console.log(data);
      } catch (error) {
        setLoading(false);
        setError(
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message
        );
      }
    };

    fetchDate();

    return () => {
      setUserAnalysis({});
      setLoading(false);
      setError(null);
    };
  }, [username, numberOfTweets]);

  const increase = () => {
    if (numberOfTweets >= 1000) return;
    setNumberOfTweets(numberOfTweets + 100);
  };

  const decrease = () => {
    if (numberOfTweets <= 100) return;
    setNumberOfTweets(numberOfTweets - 100);
  };
  return (
    <div className="max-w-screen-lg mx-auto mt-12 px-4">
      {userAnalysis.positive && (
        <div className="mb-8">
          <h1 className="flex items-center justify-start text-3xl">
            <span className="mr-3">From Latest</span>{" "}
            <CountSelector
              numberOfTweets={numberOfTweets}
              loading={loading}
              increase={increase}
              decrease={decrease}
            />{" "}
            <span className="ml-3">Found:</span>
          </h1>
        </div>
      )}
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : error ? (
        <div>
          <Alert />
        </div>
      ) : (
        userAnalysis.positive && (
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-4 h-32 text-white bg-green-500 flex items-center justify-center rounded-lg shadow-2xl">
              <h1>
                <span className="text-lg font-bold">
                  {userAnalysis.positive.count}
                </span>{" "}
                ({userAnalysis.positive.percentage.toFixed(2)}%) Was Positive{" "}
              </h1>
            </div>
            <div className="col-span-4 h-32 text-white bg-red-500 flex items-center justify-center rounded-lg shadow-2xl">
              <h1>
                <span className="text-lg font-bold">
                  {userAnalysis.negative.count}
                </span>{" "}
                ({userAnalysis.negative.percentage.toFixed(2)}%) Was Negative{" "}
              </h1>
            </div>
            <div className="col-span-4 h-32 text-gray-800 bg-white flex items-center justify-center rounded-lg shadow-2xl">
              <h1>
                <span className="text-lg font-bold">
                  {userAnalysis.natural.count}
                </span>{" "}
                ({userAnalysis.natural.percentage.toFixed(2)}%) Was Natural{" "}
              </h1>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default LatestTweetsAnalysis;
