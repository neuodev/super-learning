import React, { useState } from "react";

const Search = ({ search }) => {
  const [word, setWord] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    search(word);
  };
  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex items-center justify-center mb-20 "
    >
      <div className="border rounded-2xl overflow-hidden shadow-2xl">
        <input
          onChange={(e) => setWord(e.target.value)}
          value={word}
          placeholder="Search for a word"
          className="py-4 px-8 text-xl font-semibold w-96 focus:outline-none  rounded-l-2xl "
        />
        <button>
          {" "}
          <i className="fas fa-search inline-block px-6 text-gray-700"></i>
        </button>
      </div>
    </form>
  );
};

export default Search;
