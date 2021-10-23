import axios from "axios";
import React, { useEffect, useState } from "react";
import ExtremeTweets from "../components/twitterSentimentAnalysis/ExtremeTweets";
import LatestTweetsAnalysis from "../components/twitterSentimentAnalysis/LatestTweetsAnalysis";
import Search from "../components/twitterSentimentAnalysis/Search";
import TweetsTable from "../components/twitterSentimentAnalysis/TweetsTable";
import TwitterUser from "../components/twitterSentimentAnalysis/TwitterUser";

const TwitterSentimentAnalysis = () => {
  const [username, setUsername] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState(null);
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(true);

  const onSearch = (name) => {
    setUsername(name);
  };

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const { data } = await axios.get("/sentiment", {
          params: {
            username: username,
            token,
          },
        });
        setUserInfo(data);
        setLoading(false);
        setError("");
      } catch (error) {
        setLoading(false);
        setError(
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message
        );
      }
    }
    if (username) fetchUsers();

    return () => {
      setLoading(false);
      setError(null);
      setUserInfo({});
    };
  }, [username, token]);

  useEffect(() => {
    if (!userInfo.tweets) return;
    if (userInfo.tweets.meta.next_token) {
      setNext(true);
    } else {
      setNext(false);
    }

    if (userInfo.tweets.meta.previous_token) {
      setPrev(true);
    } else {
      setPrev(false);
    }
  }, [prev, next, token, userInfo.tweets]);

  const nextPage = () => {
    if (!userInfo.tweets && !userInfo.tweets.meta.next_token) {
      return;
    }
    setToken(userInfo.tweets.meta.next_token);
  };

  const prevPage = () => {
    if (!userInfo.tweets && !userInfo.tweets.meta.previous_token) {
      return;
    }
    setToken(userInfo.tweets.meta.previous_token);
  };

  return (
    <div>
      <div className="my-7 mb-14">
        <Search username={username} onSearch={onSearch} />
        {error ? (
          <div className="max-w-screen-lg mx-auto text-4xl">
            <h1 className="text-center">{error}</h1>
          </div>
        ) : (
          username && (
            <div>
              {
                <TwitterUser
                  loading={loading}
                  error={error}
                  user={userInfo.user}
                />
              }
              {username && (
                <TweetsTable
                  loading={loading}
                  error={error}
                  tweets={
                    userInfo.tweets
                      ? userInfo.tweets.all_tweets
                      : new Array(10).fill({})
                  }
                  nextPage={nextPage}
                  prevPage={prevPage}
                  isPrev={prev}
                  isNext={next}
                />
              )}

              {
                <ExtremeTweets
                  tweets={userInfo.tweets ? userInfo.tweets.extreme_tweets : {}}
                  loading={loading}
                  error={error}
                />
              }

              {username && <LatestTweetsAnalysis username={username} />}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TwitterSentimentAnalysis;
