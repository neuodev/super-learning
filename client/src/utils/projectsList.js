import MNISTPreview from "../assets/mnist-preview.gif";
import EmbeddingPreview from "../assets/embedding-preview.gif";
import { ROUTES } from "./types";

export const PROJECTS_LIST = [
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
  {
    name: "Twitter Sentiment Analysis",
    src: EmbeddingPreview,
    tags: [
      {
        tag: "NLP",
        tip: "Natural Language Proccessing",
      },
      {
        tag: "Twitter API",
      },
    ],
    to: ROUTES.TWITTER_SETIMENT_ANALYSIS,
  },
];
