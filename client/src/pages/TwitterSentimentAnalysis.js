import axios from "axios";
import React, { useEffect, useState } from "react";
import { TEST_USER_INFO } from "../components/twitterSentimentAnalysis/data";
import Search from "../components/twitterSentimentAnalysis/Search";
import TweetsTable from "../components/twitterSentimentAnalysis/TweetsTable";

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
    fetchUsers();
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
      // setNext(false);
      return;
    }

    // setNext(true);
    // setPrev(true);
    setToken(userInfo.tweets.meta.next_token);
  };

  const prevPage = () => {
    if (!userInfo.tweets && !userInfo.tweets.meta.previous_token) {
      // setPrev(false);
      return;
    }

    // setPrev(true);
    // setNext(true);
    setToken(userInfo.tweets.meta.previous_token);
  };

  return (
    <div>
      <div className="mt-7">
        <Search username={username} onSearch={onSearch} />
        {username && (
          <TweetsTable
            loading={loading}
            error={error}
            tweets={userInfo.tweets ? userInfo.tweets.all_tweets : []}
            nextPage={nextPage}
            prevPage={prevPage}
            isPrev={prev}
            isNext={next}
          />
        )}
        {userInfo && <pre>{JSON.stringify(userInfo, null, 2)}</pre>}
      </div>
    </div>
  );
};

export default TwitterSentimentAnalysis;
