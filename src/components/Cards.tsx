"use client";

import {
  AcademicCapIcon,
  ClockIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Define the types for the languages and content
type Language = "FR" | "EN";

const Cards = () => {
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
      <div className="w-full flex justify-around md:flex-row flex-col z-20">
        <div className=" p-10 rounded-lg min-w-[200px] md:shadow-md flex flex-col items-center bg-white">
          <AcademicCapIcon className="h-16 w-16 text-yellow" />
          <h2 className="text-2xl text-gray-900 font-bold mt-3">+3M</h2>
          <p className="text-md text-gray-900">tests réalisés</p>
        </div>
        <div className=" p-10 rounded-lg min-w-[200px] md:shadow-md flex flex-col items-center md:mt-0 mt-5 bg-white">
          <ClockIcon className="h-16 w-16 text-pink" />
          <h2 className="text-2xl text-gray-900 font-bold mt-3">20min</h2>
          <p className="text-md text-gray-900">pour réaliser le test</p>
        </div>
        <div className=" p-10 rounded-lg min-w-[200px] md:shadow-md flex flex-col items-center md:mt-0 mt-5 bg-white">
          <UserIcon className="h-16 w-16 text-red" />
          <h2 className="text-2xl text-gray-900 font-bold mt-3">5K</h2>
          <p className="text-md text-gray-900">utilisateurs par jour</p>
        </div>
      </div>
    );
  };

  const contentEn = () => {
    return (
      <div className="w-full flex justify-around md:flex-row flex-col">
        <div className=" p-10 rounded-lg min-w-[200px] md:shadow-md flex flex-col items-center">
          <AcademicCapIcon className="h-16 w-16 text-yellow" />
          <h2 className="text-2xl text-gray-900 font-bold mt-3">+3M</h2>
          <p className="text-md text-gray-900">Tests Administered</p>
        </div>
        <div className=" p-10 rounded-lg min-w-[200px] md:shadow-md flex flex-col items-center md:mt-0 mt-5">
          <ClockIcon className="h-16 w-16 text-pink" />
          <h2 className="text-2xl text-gray-900 font-bold mt-3">20min</h2>
          <p className="text-md text-gray-900">to Complete the Test</p>
        </div>
        <div className=" p-10 rounded-lg min-w-[200px] md:shadow-md flex flex-col items-center md:mt-0 mt-5">
          <UserIcon className="h-16 w-16 text-red" />
          <h2 className="text-2xl text-gray-900 font-bold mt-3">5K</h2>
          <p className="text-md text-gray-900">Users Daily</p>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full relative flex justify-center max-w-7xl mx-auto items-center flex-col md:px-0 px-4 md:py-20 lg:px-8 py-10">
      {selectedLang === "FR" ? contentFr() : contentEn()}
    </section>
  );
};

export default Cards;
