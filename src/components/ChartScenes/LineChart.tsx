import React from "react";
import { LabelsAndDataSetsProps } from "../../generals/Types";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartOptions } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type LineCharPorps = {
  className?: string;
  labelsAndDataSetsData: LabelsAndDataSetsProps;
};

const LineChart: React.FC<LineCharPorps> = ({
  className,
  labelsAndDataSetsData,
}) => {
  const options: ChartOptions<"line"> = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          color: "#CCE5FF",
          usePointStyle: true,
          boxHeight: 10,
          boxWidth: 10,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#CCE5FF",
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "#CCE5FF",
        },
      },
    },
  };

  return (
    <div className={`${className ? "" + className : className}`}>
      <Line options={options} data={labelsAndDataSetsData} />
    </div>
  );
};

export default LineChart;
