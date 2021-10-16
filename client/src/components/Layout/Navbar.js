import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full bg-gray-100 border-b py-4 px-4 text-gray-800 shadow-lg text-2xl">
      <Link to="/"> Super Learning</Link>
    </div>
  );
};

export default Navbar;
