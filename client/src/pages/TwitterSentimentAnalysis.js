import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "../components/twitterSentimentAnalysis/Search";

const TwitterSentimentAnalysis = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const onSearch = (name) => {
    setUsername(name);
  };
  const showMore = () => {
    setCurrentPage(currentPage + 1);
  };
  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const { data } = await axios.get("/sentiment/search", {
          params: {
            q: username,
            page: currentPage,
            count: 10,
          },
        });
        setUsers(data);
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
  }, [username, currentPage]);

  return (
    <div>
      <div className="mt-7">
        <Search
          username={username}
          onSearch={onSearch}
          users={users}
          loading={loading}
          error={error}
          showMore={showMore}
        />
      </div>
    </div>
  );
};

export default TwitterSentimentAnalysis;
