import React, { useEffect, useRef, useState } from "react";
import { useCloseWhenClickOutside } from "../../utils";
import TwitterUsers from "./TwitterUsers";

const Search = ({ onSearch, username, users, error, loading, showMore }) => {
  const [showUsersList, setShowUsersList] = useState(Boolean(username));
  const ref = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const hideUsersList = () => {
    setShowUsersList(false);
    onSearch("");
  };
  useCloseWhenClickOutside(ref, hideUsersList);

  useEffect(() => {
    if (username) setShowUsersList(true);
    else setShowUsersList(false);
  }, [username]);
  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex items-center justify-center mb-20"
    >
      <div ref={ref} className="border rounded-2xl shadow-2xl relative">
        <input
          onChange={(e) => onSearch(e.target.value)}
          value={username}
          placeholder="Search for a word"
          className="py-4 px-8 text-xl font-semibold w-96 focus:outline-none  rounded-l-2xl "
        />
        <button>
          {" "}
          <i className="fas fa-search inline-block px-6 text-gray-700"></i>
        </button>
        {showUsersList && (
          <TwitterUsers
            showMore={showMore}
            users={users}
            loading={loading}
            error={error}
          />
        )}
      </div>
    </form>
  );
};

export default Search;
