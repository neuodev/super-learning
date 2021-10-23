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
        tag: "Sentiment Analysis",
      },
      {
        tag: "Twitter API",
      },
    ],
    to: ROUTES.TWITTER_SETIMENT_ANALYSIS,
  },
];

export const PRE_DEFNIED_TWITTER_USERS = [
  {
    name: "Bill Gates",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_normal.jpg",
    username: "BillGates",
    verified: true,
    id: "50393960",
  },
  {
    verified: true,
    username: "elonmusk",
    name: "Elon Musk",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1442634650703237120/mXIcYtIs_normal.jpg",
    id: "44196397",
  },
  {
    name: "Jeff Bezos",
    username: "JeffBezos",
    verified: true,
    id: "15506669",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_normal.jpg",
  },
  {
    name: "Microsoft",
    id: "74286565",
    verified: true,
    username: "Microsoft",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1447664123429359616/4XaOQLDA_normal.jpg",
  },
  {
    name: "Tesla",
    username: "Tesla",
    verified: true,
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_normal.png",
    id: "13298072",
  },
  {
    username: "amazon",
    verified: true,
    id: "20793816",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1399841195816144898/J0itvSWJ_normal.jpg",
    name: "Amazon",
  },
];
