import React from "react";
import { Line } from "react-chartjs-2";
import { makeLabels } from "../../utils";

const LineChart = ({
  history,
  historyTitle,
  validation,
  validationTitle,
  epochs,
}) => {
  const data = {
    labels: makeLabels(epochs),
    datasets: [
      {
        label: historyTitle,
        data: history,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: validationTitle,
        data: validation,
        fill: false,
        backgroundColor: "#60A5FA",
        borderColor: "#93C5FD",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            beginAtZero: true,
          },
          gridLines: {
            display: true,
            color: "rgba(255,99,164,0.2)",
          },
          scaleLabel: {
            display: true,
            labelString: "",
          },
        },
      ],
    },
  };
  return (
    <div>
      <Line data={data} options={options} />
      <h1 className="text-center">Epochs</h1>
    </div>
  );
};

export default LineChart;
