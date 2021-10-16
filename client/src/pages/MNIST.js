import React, { useEffect, useRef, useState } from "react";
import Draw from "../components/MNIST/Draw";
import Input from "../components/MNIST/Input";
import Output from "../components/MNIST/Output";
import axios from "axios";
import LineChart from "../components/MNIST/LineChart";
import Spinner from "../components/common/Spinner";
import Alert from "../components/common/Alert";
import { TYPES } from "../utils/types";

const DEFAULT_PREDS = {
  cnn: {
    preds: new Array(10).fill(1),
    number: 1,
  },
  ann: {
    preds: new Array(10).fill(1),
    number: 1,
  },
};
const MNIST = () => {
  const canvasRef = useRef(null);
  const inputRef = useRef(null);
  const [preds, setPreds] = useState(DEFAULT_PREDS);
  const onMouseUp = (e) => {
    drawInput();
  };
  const [history, setHistory] = useState({});
  const [historyLoading, setHistoryLoading] = useState(true);
  const [historyError, setHistoryError] = useState(false);
  useEffect(() => {
    setHistoryLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://127.0.0.1:8000/mnist/history");
        console.log(data);
        setHistory(data);
        setHistoryLoading(false);
      } catch (error) {
        setHistoryError(error.message);
      }
    };

    fetchData();
  }, []);
  function drawInput() {
    const ctx = inputRef.current.getContext("2d");
    const img = new Image();
    img.onload = () => {
      const inputs = [];
      const small = document.createElement("canvas").getContext("2d");
      small.drawImage(img, 0, 0, img.width, img.height, 0, 0, 28, 28);
      let data = small.getImageData(0, 0, 28, 28).data;
      data = data.map((item) => {
        if (item >= 200) return 0;
        return 255;
      });
      for (let i = 0; i < 28; i++) {
        for (let j = 0; j < 28; j++) {
          const n = 4 * (i * 28 + j);
          inputs[i * 28 + j] = (data[n + 0] + data[n + 1] + data[n + 2]) / 3;
          ctx.fillStyle =
            "rgb(" + [data[n + 0], data[n + 1], data[n + 2]].join(",") + ")";
          ctx.fillRect(j * 5, i * 5, 5, 5);
        }
      }
      if (Math.min(...inputs) === 255) {
        return;
      }
      axios
        .post("http://127.0.0.1:8000/mnist/", {
          data: inputs,
        })
        .then(({ data }) => {
          setPreds(data);
        })
        .catch((e) => console.log(e.message));
    };
    canvasRef.current.exportImage("png").then((data) => {
      img.src = data;
    });
  }
  return (
    <div className="grid grid-cols-12 py-8 gap-5 max-w-screen-md mx-auto">
      <div className="col-span-7 pl-4">
        <Draw
          canvasRef={canvasRef}
          onMouseUp={onMouseUp}
          drawInput={drawInput}
        />
      </div>
      <div className="col-span-5">
        <Input inputRef={inputRef} />
        <Output preds={preds} />
      </div>
      <div className="col-span-12">
        {historyLoading ? (
          <div>
            <Spinner />
          </div>
        ) : historyError ? (
          <div>
            <Alert type={TYPES.ERROR} message={historyError} />
          </div>
        ) : (
          <div>
            <h1 className="text-xl">CNN Traning</h1>
            <div className="mb-12">
              <LineChart
                history={history.cnn_history.loss}
                historyTitle="Loss"
                validation={history.cnn_history.val_loss}
                validationTitle="Validation Loss"
                epochs={history.cnn_history.loss.length}
              />
            </div>
            <div className="mb-12">
              <LineChart
                history={history.cnn_history.accuracy}
                historyTitle="Accuracy"
                validation={history.cnn_history.val_accuracy}
                validationTitle="Validation Accuracy"
                epochs={history.cnn_history.loss.length}
              />
            </div>
            <h1 className="text-xl">ANN Traning</h1>
            <div className="mb-12">
              <LineChart
                history={history.ann_history.loss}
                historyTitle="Loss"
                validation={history.ann_history.val_loss}
                validationTitle="Validation Loss"
                epochs={history.ann_history.loss.length}
              />
            </div>
            <div>
              <LineChart
                history={history.ann_history.accuracy}
                historyTitle="Accuracy"
                validation={history.ann_history.val_accuracy}
                validationTitle="Validation Accuracy"
                epochs={history.ann_history.loss.length}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MNIST;
