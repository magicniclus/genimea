"use client";

/* eslint-disable @next/next/no-img-element */
import {
  AcademicCapIcon,
  ClockIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

// Définir les types pour les langues et le contenu
type Language = "FR" | "EN";

const Cards = ({ selectedLang }: { selectedLang: Language }) => {
  const contentFr = () => {
    return (
      <div className="w-full flex justify-between md:flex-row flex-col z-20">
        <div className="p-10 px-5 rounded-lg min-w-[200px] md:shadow-md flex flex-col items-start bg-textBlue md:w-4/12">
          <h2 className="text-3xl text-white font-bold mt-3">
            Quelques chiffres importants
          </h2>
          <p className="text-md text-white">
            Nos tests de QI sont le fruit de 7 années de recherche et sont tous
            certifiés.
          </p>
        </div>
        <div className="p-10 rounded-lg min-w-[200px] md:shadow-md flex flex-col items-center bg-white md:mt-0 mt-5">
          <AcademicCapIcon className="h-16 w-16 text-yellow" />
          <h2 className="text-2xl text-gray-900 font-bold mt-3">+3M</h2>
          <p className="text-md text-gray-900">tests réalisés</p>
        </div>
        <div className="p-10 rounded-lg min-w-[200px] md:shadow-md flex flex-col items-center md:mt-0 mt-5 bg-white">
          <ClockIcon className="h-16 w-16 text-pink" />
          <h2 className="text-2xl text-gray-900 font-bold mt-3">20min</h2>
          <p className="text-md text-gray-900">pour réaliser le test</p>
        </div>
        <div className="p-10 rounded-lg min-w-[200px] md:shadow-md flex flex-col items-center md:mt-0 mt-5 bg-white">
          <UserIcon className="h-16 w-16 text-red" />
          <h2 className="text-2xl text-gray-900 font-bold mt-3">5K</h2>
          <p className="text-md text-gray-900">utilisateurs par jour</p>
        </div>
      </div>
    );
  };

  const contentEn = () => {
    return (
      <div className="w-full flex justify-between md:flex-row flex-col">
        <div className="p-10 px-5 rounded-lg min-w-[200px] md:shadow-md flex flex-col items-start bg-textBlue md:w-4/12">
          <h2 className="text-2xl text-white font-bold mt-3">
            Some Important Figures
          </h2>
          <p className="text-md text-white">
            Our IQ tests are the result of 7 years of research and are all
            certified.
          </p>
        </div>
        <div className="p-10 rounded-lg min-w-[200px] md:shadow-md flex flex-col items-center md:mt-0 mt-5">
          <AcademicCapIcon className="h-16 w-16 text-yellow" />
          <h2 className="text-2xl text-gray-900 font-bold mt-3">+3M</h2>
          <p className="text-md text-gray-900">Tests Administered</p>
        </div>
        <div className="p-10 rounded-lg min-w-[200px] md:shadow-md flex flex-col items-center md:mt-0 mt-5">
          <ClockIcon className="h-16 w-16 text-pink" />
          <h2 className="text-2xl text-gray-900 font-bold mt-3">20min</h2>
          <p className="text-md text-gray-900">to Complete the Test</p>
        </div>
        <div className="p-10 rounded-lg min-w-[200px] md:shadow-md flex flex-col items-center md:mt-0 mt-5">
          <UserIcon className="h-16 w-16 text-red" />
          <h2 className="text-2xl text-gray-900 font-bold mt-3">5K</h2>
          <p className="text-md text-gray-900">Users Daily</p>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full relative flex justify-center mx-auto items-center flex-col md:py-20 py-10 px-4 max-w-6xl">
      {selectedLang === "FR" ? contentFr() : contentEn()}
    </section>
  );
};

const Page = () => {
  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR");

  useEffect(() => {
    const lang = searchParams?.get("lang");
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen bg-slate-50 flex justify-center items-center animate-pulse duration-2000 ease-in-out">
          <img src="/logo.png" alt="logo" className="w-20 h-auto" />
        </div>
      }
    >
      <Cards selectedLang={selectedLang} />
    </Suspense>
  );
};

export default Page;
