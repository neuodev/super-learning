import React, { useEffect, useState } from "react";
import Search from "../components/WordEmbedding/Search";
import WordsTable from "../components/WordEmbedding/WordsTable";
import axios from "axios";
import Spinner from "../components/common/Spinner";
import Alert from "../components/common/Alert";
import { TYPES } from "../utils/types";
import Explain from "../components/WordEmbedding/Explain";

const WordEmbedding = () => {
  const [word, setWord] = useState("");
  const [similarWords, setSimilarWords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const search = (word) => {
    setWord(word);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.post("http://127.0.0.1:8000/embedding/", {
          word,
        });

        setSimilarWords(data);
        setLoading(false);
        setError(false);
        console.log(data);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchData();
  }, [word]);

  return (
    <div className="py-8">
      <Search search={search} word={word} />

      {!word ? (
        <Explain />
      ) : loading ? (
        <div>
          <Spinner />
        </div>
      ) : error ? (
        <div>
          <Alert type={TYPES.ERROR} message={error} />
        </div>
      ) : (
        <WordsTable similarWords={similarWords} />
      )}
    </div>
  );
};

export default WordEmbedding;
