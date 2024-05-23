/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { CheckIcon } from "@heroicons/react/20/solid";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Define the types for the languages and content
type Language = "FR" | "EN";

const Content = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR"); // Default to 'FR'
  const [pourcentage, setPourcentage] = useState(0);

  useEffect(() => {
    const lang = searchParams.get("lang");
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  useEffect(() => {
    if (pourcentage === 100) {
      router.push(`/test/analyse/email?lang=${selectedLang}`);
    }

    const updatePourcentage = () => {
      if (pourcentage < 100) {
        setTimeout(() => {
          const randomIncrement = Math.floor(Math.random() * 11) + 5; // Génère un nombre aléatoire entre 5 et 15
          setPourcentage((prev) => Math.min(prev + randomIncrement, 100));
        }, 1000);
      }
    };

    updatePourcentage();
  }, [pourcentage]);

  const contentFr = () => {
    return (
      <div className="p-14 bg-white min-w-[90%] border border-slate-100 shadow-xl rounded-md flex flex-col">
        <h1 className="text-slate-700 font-bold text-4xl">
          Calcul de votre <span className="text-textBlue">QI</span>...
        </h1>
        <p className="text-slate-400 text-xs mt-5">
          Patientez pendant que notre IA analyse vos réponses selon les 5
          mesures clés de l&apos;intelligence.
        </p>
        <section className="w-full mt-5">
          <div className="max-w-5xl mx-auto rounded-xl flex items-bottom justify-between w-full h-4 bg-slate-100 rounded-full relative">
            <div
              className="h-4 bg-textBlue rounded-full transition-all duration-1000 ease-in-out flex flex-center items-center justify-center"
              style={{ width: `${pourcentage}%` }}
            ></div>
            <span className="text-white text-[8px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {pourcentage}%
            </span>
          </div>
        </section>
        <ul className="mt-5">
          <li className="flex items-center">
            <div
              className={`${
                pourcentage >= 20 ? "bg-textBlue" : "bg-slate-100"
              } w-5 h-5 border border-slate-300 rounded-md flex justify-center items-center`}
            >
              {pourcentage >= 20 && (
                <CheckIcon className="text-white h-3 w-3" />
              )}
            </div>
            <p className="text-slate-500 text-sm ml-2">Mémoire</p>
          </li>
          <li className="flex items-center mt-2">
            <div
              className={`${
                pourcentage >= 40 ? "bg-textBlue" : "bg-slate-100"
              } w-5 h-5 border border-slate-300 rounded-md flex justify-center items-center`}
            >
              {pourcentage >= 40 && (
                <CheckIcon className="text-white h-3 w-3" />
              )}
            </div>
            <p className="text-slate-500 text-sm ml-2">Vitesse</p>
          </li>
          <li className="flex items-center mt-2">
            <div
              className={`${
                pourcentage >= 60 ? "bg-textBlue" : "bg-slate-100"
              } w-5 h-5 border border-slate-300 rounded-md flex justify-center items-center`}
            >
              {pourcentage >= 60 && (
                <CheckIcon className="text-white h-3 w-3" />
              )}
            </div>
            <p className="text-slate-500 text-sm ml-2">Réaction</p>
          </li>
          <li className="flex items-center mt-2">
            <div
              className={`${
                pourcentage >= 80 ? "bg-textBlue" : "bg-slate-100"
              } w-5 h-5 border border-slate-300 rounded-md flex justify-center items-center`}
            >
              {pourcentage >= 80 && (
                <CheckIcon className="text-white h-3 w-3" />
              )}
            </div>
            <p className="text-slate-500 text-sm ml-2">Concentration</p>
          </li>
          <li className="flex items-center mt-2">
            <div
              className={`${
                pourcentage >= 90 ? "bg-textBlue" : "bg-slate-100"
              } w-5 h-5 border border-slate-300 rounded-md flex justify-center items-center`}
            >
              {pourcentage >= 90 && (
                <CheckIcon className="text-white h-3 w-3" />
              )}
            </div>
            <p className="text-slate-500 text-sm ml-2">Logique</p>
          </li>
        </ul>
      </div>
    );
  };

  const contentEn = () => {
    return (
      <div className="p-14 bg-white min-w-[90%] border border-slate-100 shadow-xl rounded-md flex flex-col">
        <h1 className="text-slate-700 font-bold text-4xl">
          Calculating your <br /> <span className="text-textBlue">IQ</span>{" "}
          score...
        </h1>
        <p className="text-slate-400 text-xs mt-5">
          Hang tight while our AI brand analyses your answers against the 5 key
          measures of intelligence.
        </p>
        <section className="w-full mt-5">
          <div className="max-w-5xl mx-auto rounded-xl flex items-bottom justify-between w-full h-4 bg-slate-100 rounded-full relative">
            <div
              className="h-4 bg-textBlue rounded-full transition-all duration-1000 ease-in-out flex flex-center items-center justify-center"
              style={{ width: `${pourcentage}%` }}
            ></div>
            <span className="text-white text-[8px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {pourcentage}%
            </span>
          </div>
        </section>
        <ul className="mt-5">
          <li className="flex items-center">
            <div
              className={`${
                pourcentage >= 20 ? "bg-textBlue" : "bg-slate-100"
              } w-5 h-5 border border-slate-300 rounded-md flex justify-center items-center`}
            >
              {pourcentage >= 20 && (
                <CheckIcon className="text-white h-3 w-3" />
              )}
            </div>
            <p className="text-slate-500 text-sm ml-2">Memory</p>
          </li>
          <li className="flex items-center mt-2">
            <div
              className={`${
                pourcentage >= 40 ? "bg-textBlue" : "bg-slate-100"
              } w-5 h-5 border border-slate-300 rounded-md flex justify-center items-center`}
            >
              {pourcentage >= 40 && (
                <CheckIcon className="text-white h-3 w-3" />
              )}
            </div>
            <p className="text-slate-500 text-sm ml-2">Speed</p>
          </li>
          <li className="flex items-center mt-2">
            <div
              className={`${
                pourcentage >= 60 ? "bg-textBlue" : "bg-slate-100"
              } w-5 h-5 border border-slate-300 rounded-md flex justify-center items-center`}
            >
              {pourcentage >= 60 && (
                <CheckIcon className="text-white h-3 w-3" />
              )}
            </div>
            <p className="text-slate-500 text-sm ml-2">Reaction</p>
          </li>
          <li className="flex items-center mt-2">
            <div
              className={`${
                pourcentage >= 80 ? "bg-textBlue" : "bg-slate-100"
              } w-5 h-5 border border-slate-300 rounded-md flex justify-center items-center`}
            >
              {pourcentage >= 80 && (
                <CheckIcon className="text-white h-3 w-3" />
              )}
            </div>
            <p className="text-slate-500 text-sm ml-2">Concentration</p>
          </li>
          <li className="flex items-center mt-2">
            <div
              className={`${
                pourcentage >= 90 ? "bg-textBlue" : "bg-slate-100"
              } w-5 h-5 border border-slate-300 rounded-md flex justify-center items-center`}
            >
              {pourcentage >= 90 && (
                <CheckIcon className="text-white h-3 w-3" />
              )}
            </div>
            <p className="text-slate-500 text-sm ml-2">Logic</p>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <section className="w-full px-1 md:px-6 mt-5">
      <div className="max-w-5xl w-full mx-auto rounded-xl flex flex-col items-center px-4 md:px-12 pb-10">
        {selectedLang === "EN" ? contentEn() : contentFr()}
      </div>
    </section>
  );
};

export default Content;
