import React from "react";
import MNISTPreview from "../assets/mnist-preview.gif";
import EmbeddingPreview from "../assets/embedding-preview.gif";

import Projects from "../components/Home/Projects";
import { ROUTES } from "../utils/types";
const PROJECTS_LIST = [
  {
    name: "Handwritten Digit Recognition",
    src: MNISTPreview,
    tags: [
      {
        tag: "DL",
        tip: "Deep Learning",
      },
      {
        tag: "MNIST dataset",
      },
    ],
    to: ROUTES.MNIST,
  },
  {
    name: "Word Embedding",
    src: EmbeddingPreview,
    tags: [
      {
        tag: "NLP",
        tip: "Natural Language Proccessing",
      },
      {
        tag: "Amazon dataset",
      },
    ],
    to: ROUTES.WORD_EMBEDDING,
  },
];

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
