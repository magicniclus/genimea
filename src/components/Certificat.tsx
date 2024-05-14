/* eslint-disable @next/next/no-img-element */
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Language = "FR" | "EN";

const Certificat = () => {
  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR");

  useEffect(() => {
    const lang = searchParams.get("lang");
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  const contentFr = () => {
    return (
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8 flex justify-between md:flex-row flex-col w-full items-center">
        <div className="w-6/12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Obtenez votre certificat
            <br />
            <span className="text-textBlue">de QI</span>
          </h2>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-yellow px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
            >
              Commencer mon test
            </a>
          </div>
        </div>
        <div className="w-6/12 flex justify-cener">
          <div className="overflow-hidden rounded-md w-full shadow-lg">
            <img
              src="./images/certificatFr.png"
              alt="certificate"
              className="hidden sm:block w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    );
  };

  const contentEn = () => {
    return (
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8 flex justify-between md:flex-row flex-col w-full items-center">
        <div className="w-6/12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get your
            <br />
            <span className="text-textBlue">IQ certificate</span>
          </h2>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-yellow px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
            >
              Start my test
            </a>
          </div>
        </div>
        <div className="w-6/12 flex justify-cener">
          <div className="overflow-hidden rounded-md w-full shadow-lg">
            <img
              src="./images/certificatEn.png"
              alt="certificate"
              className="hidden sm:block w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white flex">
      {selectedLang === "FR" ? contentFr() : contentEn()}
    </div>
  );
};

export default Certificat;
