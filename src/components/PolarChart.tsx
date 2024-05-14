"use client";

import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarChart = () => {
  const data = {
    labels: [
      "États-Unis",
      "France",
      "Canada",
      "Royaume-Uni",
      "Espagne",
      "Portugal",
      "Chine",
      "Allemagne",
    ],
    datasets: [
      {
        label: "QI Moyen",
        data: [98, 102, 105, 99, 100, 96, 104, 103], // Chiffres au hasard
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(201, 203, 207, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(201, 203, 207, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(201, 203, 207, 0.4)",
          "rgba(255, 99, 132, 0.4)",
        ],
        hoverBorderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(201, 203, 207, 1)",
          "rgba(255, 99, 132, 1)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "QI Moyen par Pays",
      },
    },
  };

  return (
    <div className="mx-auto max-w-6xl py-24 md:py-32 lg:py-40">
      <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
        F.A.Q
      </h2>
      <PolarArea data={data} options={options} />;
    </div>
  );
};

export default PolarChart;
