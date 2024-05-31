"use client";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Flag from "react-world-flags";

type Language = "FR" | "EN";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StatsContent = () => {
  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR");

  useEffect(() => {
    const lang = searchParams?.get("lang");
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);
  const labels =
    selectedLang === "FR"
      ? ["<18 ans", "18-39 ans", "40-59 ans", "59-79 ans", "+ de 80 ans"]
      : ["<18 years", "18-39 years", "40-59 years", "59-79 years", "80+ years"];

  const title =
    selectedLang === "FR"
      ? "QI Moyen par Tranche d'Âge et par Pays"
      : "Average IQ by Age Group and by Country";

  const data = {
    labels: labels,
    datasets: [
      {
        label: selectedLang === "FR" ? "QI Moyen" : "Average IQ",
        data: [93, 106, 99, 90, 81],
        backgroundColor: "#99D1E5",
        borderColor: "#6B95AE",
        hoverBackgroundColor: "#6B95AE",
        borderWidth: 2,
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
        text: title,
      },
    },
  };

  const countries = [
    { code: "US", name: "United States", iq: 98 },
    { code: "FR", name: "France", iq: 102 },
    { code: "CA", name: "Canada", iq: 105 },
    { code: "GB", name: "United Kingdom", iq: 99 },
    { code: "ES", name: "Spain", iq: 100 },
    { code: "PT", name: "Portugal", iq: 96 },
    { code: "CN", name: "China", iq: 104 },
    { code: "DE", name: "Germany", iq: 103 },
  ];

  return (
    <div
      className="mx-auto max-w-6xl py-24 md:py-32 lg:py-40 px-4 flex flex-col items-center"
      id="interesting"
    >
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
        {title}
      </h2>
      <div className="flex flex-col md:flex-row w-full justify-between mt-10">
        <div className="w-full md:w-7/12 min-h-[50px]">
          <Bar data={data} options={options} />
        </div>
        <div className="md:w-4/12 w-full col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:mt-14 mt-7">
          {countries.map((country) => (
            <div
              key={country.code}
              className="bg-backgroundBlue/50 text-white rounded-md shadow-lg m-2 p-4 flex items-center"
            >
              <div className="overflow-hidden rounded-md">
                <Flag
                  code={country.code}
                  alt={country.name}
                  className="h-10 w-20 rounded-md"
                />
              </div>
              <h3 className="text-sm font-semibold ml-2">{country.name}</h3>
              <p className="text-sm ml-2"> {country.iq}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const WrapperComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StatsContent />
    </Suspense>
  );
};

export default WrapperComponent;
