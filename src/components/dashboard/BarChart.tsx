import { UserState } from "@/redux/dataUserManager";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface SettingsProps {
  data: UserState;
}

const BarChart: React.FC<SettingsProps> = ({ data }) => {
  const userIQ = data.userIQ;

  const chartData = {
    labels: [
      "United States",
      "United Kingdom",
      "China",
      "India",
      "Germany",
      "France",
      "Japan",
      "User",
    ],
    datasets: [
      {
        label: "Average IQ by Country",
        data: [98, 100, 105, 82, 102, 98, 105, userIQ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 120,
      },
    },
  };

  return (
    <div className="px-4 sm:px-0 mt-10">
      <h3 className="text-base font-semibold leading-7 text-gray-900">
        User IQ Chart
      </h3>
      <Bar data={chartData} options={chartOptions} className="max-h-[250px]" />
      <p className="mt-4 text-sm text-gray-700 text-xs">
        This bar chart displays the average IQ scores of different countries
        along with your own IQ score. It provides a comparative view of your
        intellectual potential against the global averages. The countries
        included are the United States, United Kingdom, China, India, Germany,
        France, and Japan. Your score is highlighted to show where you stand
        relative to these international benchmarks.
      </p>
    </div>
  );
};

export default BarChart;
