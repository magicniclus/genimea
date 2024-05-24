/* eslint-disable @next/next/no-img-element */
"use client";

import {
  ArrowTrendingUpIcon,
  CursorArrowRippleIcon,
} from "@heroicons/react/24/outline";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Define the types for the languages and content
type Language = "FR" | "EN";

const Hero = () => {
  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR"); // Default to 'FR'

  useEffect(() => {
    const lang = searchParams?.get("lang"); // Add null check for searchParams
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  const contentFr = () => {
    return (
      <div className=" flex items-center md:items-start flex-col">
        <h1 className="text-4xl font-bold text-text text-center md:text-start max-w-[300px]">
          Évaluez votre <span className="text-textBlue">QI</span> avec{" "}
          <span className="text-textBlue">Genimea</span>
        </h1>
        <p className="text-lg font-semibold text-text mt-3 max-w-[70%] text-center md:text-start">
          Découvrez votre potentiel intellectuel grâce à nos tests de QI
          professionnels.
        </p>
        <a
          href={"/start" + (selectedLang === "EN" ? "/?lang=EN" : "/?lang=FR")}
          className="px-6 py-2 bg-yellow rounded-md text-white text-2xl mt-7 hover:bg-yellow-600 transition duration-300 ease-in-out text-center md:text-start group flex"
        >
          {" "}
          Commencer le test{" "}
          <div
            aria-hidden="true"
            className="group-hover:translate-x-3 transition duration-150 ease-in-out ml-2"
          >
            &rarr;
          </div>
        </a>
        <div className="flex flex-col items-start">
          <p className="text-md text-gray-500 mt-7 flex items-center">
            <CursorArrowRippleIcon className="h-5 w-5 text-textBlue mr-2 " />
            <span className="font-bold text-textBlue mr-2">37 000 </span> Tests
            réalisé ces dernières 24h
          </p>
          <p className="text-md text-gray-500 mt-3 md:mt-0 flex items-center">
            <ArrowTrendingUpIcon className="h-5 w-5 text-textBlue mr-2" />
            <span className="font-bold text-textBlue mr-2">104 </span> Score de
            QI moyen
          </p>
        </div>
      </div>
    );
  };

  const contentEn = () => {
    return (
      <div className=" flex items-center md:items-start flex-col">
        <h1 className="text-4xl font-bold text-text text-center md:text-start max-w-[300px]">
          Assess Your <span className="text-textBlue">IQ</span> with{" "}
          <span className="text-textBlue">Genimea</span>
        </h1>
        <p className="text-lg font-semibold text-text mt-3 max-w-[70%] text-center md:text-start">
          Discover your intellectual potential through our professional IQ
          tests.
        </p>
        <a
          href={"/start" + (selectedLang === "EN" ? "/?lang=EN" : "/?lang=FR")}
          className="px-6 py-2 bg-yellow rounded-md text-white text-2xl mt-7 hover:bg-yellow-600 transition duration-300 ease-in-out text-center md:text-start group flex"
        >
          {" "}
          Start the test{" "}
          <div
            aria-hidden="true"
            className="group-hover:translate-x-3 transition duration-150 ease-in-out ml-2"
          >
            &rarr;
          </div>
        </a>
        <div className="flex flex-col items-start">
          <p className="text-md text-gray-500 mt-7 text-start flex items-center">
            <CursorArrowRippleIcon className="h-5 w-5 text-textBlue mr-2" />
            <span className="font-bold text-textBlue mr-2">37 000 </span> tests
            completed in the last 24 hours
          </p>
          <p className="text-md text-gray-500 text-start mt-3 md:mt-0 flex items-center">
            <ArrowTrendingUpIcon className="h-5 w-5 text-textBlue mr-2" />
            <span className="font-bold text-textBlue mr-2">104 </span> Average
            IQ score
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full relative flex justify-center md:h-[680px] items-center flex-col max-w-6xl px-4">
      <div className=" mx-auto md:bg-white/85 rounded-xl flex md:flex-row flex-col items-center px-4 md:p-24 px-12 py-12">
        {selectedLang === "FR" ? contentFr() : contentEn()}
        <div className="relative z-5  group">
          <div className="relative mt-14 md:mt-0">
            <div
              className="absolute -top-5 -right-5 md:block hidden border-2 border-textBlue rounded-xl w-[400px] h-full group-hover:translate-y-6 group-hover:-translate-x-16 transition duration-300 ease-in-out"
              style={{ zIndex: 10 }}
            ></div>
            <img
              className="w-[400px] relative z-20 rounded-xl shadow-xl group group-hover:-translate-y-6 group-hover:translate-x-6 transition duration-300 ease-in-out"
              src="./images/computer.png"
              alt="background"
              style={{ zIndex: 20, left: "0", top: "0" }}
            />
          </div>
        </div>
      </div>
      <img
        className="md:absolute top-0 right-0 w-screen h-[350px] md:h-[680px] object-cover z-[-1]"
        src="./background/hero.png"
        alt="background"
      />
    </section>
  );
};

export default Hero;
