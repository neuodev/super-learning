import React, { useRef, useState } from "react";

const Search = ({ onSearch }) => {
  const ref = useRef(null);
  const [username, setUsername] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex items-center justify-center mb-20"
    >
      <div ref={ref} className="border rounded-2xl shadow-2xl relative">
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="Search for a word"
          className="py-4 px-8 text-xl font-semibold w-96 focus:outline-none  rounded-l-2xl "
        />
        <button>
          <i className="fas fa-search inline-block px-6 text-gray-700"></i>
        </button>
      </div>
    </form>
  );
};

export default Search;
