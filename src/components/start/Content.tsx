/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { CheckIcon } from "@heroicons/react/24/outline";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

// Define the types for the languages and content
type Language = "FR" | "EN";

const Content = () => {
  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR"); // Default to 'FR'

  useEffect(() => {
    const lang = searchParams?.get("lang");
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  const contentFr = () => {
    return (
      <div className="p-14 bg-white border border-slate-100 shadow-xl rounded-md flex flex-col items-center">
        <div className="flex items-center">
          <img src="/icons/brain.png" className="w-14 h-auto mr-2" />
          <h1 className="text-3xl font-bold text-slate-700">
            Préparez-vous à commencer votre test de{" "}
            <span className="text-textBlue">QI</span> !
          </h1>
        </div>
        <ul className="text-slate-500">
          <li className="flex mt-7">
            <CheckIcon className="w-5 h-auto text-textBlue mr-2" /> Vous aurez
            20 questions de difficulté croissante
          </li>
          <li className="flex mt-3">
            <CheckIcon className="w-5 h-auto text-textBlue mr-2" /> Sélectionnez
            la bonne réponse parmi les 6 options
          </li>
          <li className="flex mt-3">
            <CheckIcon className="w-5 h-auto text-textBlue mr-2" /> Vous pouvez
            passer une question et y revenir plus tard
          </li>
        </ul>
        <a
          href={`/test?lang=${selectedLang}`}
          className="bg-yellow px-4 py-2 text-lg text-white cursor-pointer rounded-md w-max mt-12 hover:bg-yellow-600 transition duration-300 ease-in-out"
        >
          Commencer le test certifié
        </a>
      </div>
    );
  };

  const contentEn = () => {
    return (
      <div className="p-14 bg-white border border-slate-100 shadow-xl rounded-md flex flex-col items-center">
        <div className="flex items-center">
          <img
            src="/icons/brain.png"
            className="w-14 h-auto mr-2"
            alt="Brain icon"
          />
          <h1 className="text-3xl font-bold text-slate-700">
            Get ready to start the <span className="text-textBlue">IQ</span>{" "}
            test!
          </h1>
        </div>
        <ul className="text-slate-500 mt-7">
          <li className="flex mt-3">
            <CheckIcon className="w-5 h-auto text-textBlue mr-2" />
            You will get 20 questions with increasing difficulty
          </li>
          <li className="flex mt-3">
            <CheckIcon className="w-5 h-auto text-textBlue mr-2" />
            Choose the correct answer from 6 options
          </li>
          <li className="flex mt-3">
            <CheckIcon className="w-5 h-auto text-textBlue mr-2" />
            You can skip questions and return to them later
          </li>
        </ul>
        <a
          href={`/test?lang=${selectedLang}`}
          className="bg-yellow px-4 py-2 text-lg text-white cursor-pointer rounded-md w-max mt-12 hover:bg-yellow-600 transition duration-300 ease-in-out"
        >
          Start Certified Test
        </a>
      </div>
    );
  };

  return (
    <section className="w-full px-1 md:px-6 mt-5">
      <div className="max-w-5xl w-full mx-auto rounded-xl flex flex-col items-center p-4 md:p-12">
        {selectedLang === "EN" ? contentEn() : contentFr()}
      </div>
    </section>
  );
};

export default Content;
