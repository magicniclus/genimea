/* eslint-disable @next/next/no-img-element */
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Define the types for the languages and content
type Language = "FR" | "EN";

const Hero = () => {
  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR"); // Default to 'FR'

  const contentFr = () => {
    return (
      <div className="p-12 flex items-center flex-col">
        <h1 className="text-4xl font-bold text-text text-center ">
          Évaluez votre <span className="text-textBlue">QI</span> avec{" "}
          <span className="text-textBlue">Genimea</span>
        </h1>
        <p className="text-lg font-semibold text-text mt-3 max-w-[70%] text-center">
          Découvrez votre potentiel intellectuel grâce à nos tests de QI
          professionnels.
        </p>
        <a
          href="/test"
          className="px-4 py-2 bg-yellow rounded-md text-white mt-7 hover:bg-yellow-600 transition duration-300 ease-in-out"
        >
          {" "}
          Commencer le test
        </a>
        <p className="text-md text-gray-500 mt-7">
          <span className="font-bold text-textBlue">37 000</span> Tests réalisé
          ces dernières 24h
        </p>
        <p className="text-md text-gray-500">
          <span className="font-bold text-textBlue">104</span> Score de QI moyen
        </p>
      </div>
    );
  };

  const contentEn = () => {
    return (
      <div className="p-12 flex items-center flex-col">
        <h1 className="text-4xl font-bold text-text text-center ">
          Assess Your <span className="text-textBlue">IQ</span> with{" "}
          <span className="text-textBlue">Genimea</span>
        </h1>
        <p className="text-lg font-semibold text-text mt-3 max-w-[70%] text-center">
          Discover your intellectual potential through our professional IQ
          tests.
        </p>
        <a
          href="/test"
          className="px-4 py-2 bg-yellow rounded-md text-white mt-7 hover:bg-yellow-600 transition duration-300 ease-in-out"
        >
          {" "}
          Start the test
        </a>
        <p className="text-md text-gray-500 mt-7">
          <span className="font-bold text-textBlue">37 000</span> tests
          completed in the last 24 hours
        </p>
        <p className="text-md text-gray-500">
          <span className="font-bold text-textBlue">104</span> Average IQ score
        </p>
      </div>
    );
  };

  useEffect(() => {
    const lang = searchParams.get("lang");
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  return (
    <div className="w-full relative flex justify-center md:min-h-[900px] items-center">
      <img
        className="absolute top-0 right-0 w-full md:min-h-[900px] object-cover z-[-1]"
        src="./background/hero.png"
        alt="background"
      />
      <div className="p-12 bg-white/85 rounded-xl">
        {selectedLang === "FR" ? contentFr() : contentEn()}
      </div>
    </div>
  );
};

export default Hero;
