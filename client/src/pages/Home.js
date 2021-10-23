import React from "react";
import Projects from "../components/Home/Projects";
import { PROJECTS_LIST } from "../utils/lists";

const Home = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="px-8 my-8">
        <Projects projects={PROJECTS_LIST} />
      </div>
    </div>
  );
};

export default Home;
