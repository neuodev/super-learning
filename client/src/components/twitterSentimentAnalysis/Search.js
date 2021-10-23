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
      className="w-full flex items-center flex-col justify-center mt-10 mb-20"
    >
      <h1 className="text-xl text-gray-700 text-left mb-3">
        Search for any user on <span className="font-bold">twitter</span> to see
        his impact on the world{"!"}
      </h1>
      <div
        ref={ref}
        className="border rounded-2xl shadow-2xl relative w-full md:max-w-screen-sm lg:max-w-screen-md flex items-center justify-center"
      >
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="Enter username..."
          className="py-4 px-8 text-xl font-semibold focus:outline-none  rounded-l-2xl w-full "
        />
        <button>
          <i className="fas fa-search inline-block px-6 text-gray-700"></i>
        </button>
      </div>
    </form>
  );
};

export default Search;
