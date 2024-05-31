/* eslint-disable @next/next/no-img-element */
"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

type Language = "FR" | "EN";

const CertificatContent = () => {
  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR");

  useEffect(() => {
    const lang = searchParams?.get("lang");
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  const contentFr = () => {
    return (
      <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32 flex justify-between md:flex-row flex-col w-full items-center">
        <div className="w-full md:w-6/12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Obtenez votre certificat
            <br />
            <span className="text-textBlue">de QI</span>
          </h2>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href={"/test" + "?lang=FR"}
              className="px-6 py-2 bg-textBlue rounded-md text-white text-2xl hover:text-textBlue hover:bg-white hover:border hover:border-textBlue hover:border-2 transition duration-300 ease-in-out text-center md:text-start group flex max-w-[fit-content]"
            >
              Commencer mon test
            </a>
          </div>
        </div>
        <div className="w-full md:w-6/12 min-h-[200px] flex justify-center md:mt-0 mt-10">
          <div className="overflow-hidden rounded-md w-full min-h-[200px] shadow-lg">
            <img
              src="./images/certificatFr.png"
              alt="certificate"
              className="w-full h-auto min-h-[200px] object-cover"
            />
          </div>
        </div>
      </div>
    );
  };

  const contentEn = () => {
    return (
      <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32 flex justify-between md:flex-row flex-col w-full items-center">
        <div className="md:w-6/12 w-full flex flex-col">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get your <span className="text-textBlue">IQ certificate</span>
          </h2>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href={"/test" + "?lang=EN"}
              className="px-6 py-2 bg-textBlue rounded-md text-white text-2xl hover:text-textBlue hover:bg-white hover:border hover:border-textBlue hover:border-2 transition duration-300 ease-in-out text-center md:text-start group flex max-w-[fit-content]"
            >
              Start my test
            </a>
          </div>
        </div>
        <div className="md:w-6/12 w-full flex justify-center md:mt-0 mt-10">
          <div className="overflow-hidden rounded-md w-full shadow-lg">
            <img
              src="./images/certificatEn.png"
              alt="certificate"
              className="w-full h-auto object-cover"
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

const Certificat = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CertificatContent />
    </Suspense>
  );
};

export default Certificat;
