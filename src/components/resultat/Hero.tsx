/* eslint-disable @next/next/no-img-element */
"use client";

import {
  ArrowTrendingUpIcon,
  CursorArrowRippleIcon,
} from "@heroicons/react/24/outline";
import { CheckCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

// Définir les types pour les langues et le contenu
type Language = "FR" | "EN";

const LanguageSelectorClient = ({
  setSelectedLang,
}: {
  setSelectedLang: (lang: Language) => void;
}) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const lang = searchParams?.get("lang");
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams, setSelectedLang]);

  return null;
};

const scrollToElement = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  id: string
) => {
  event.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const HeroContent = ({ selectedLang }: { selectedLang: Language }) => {
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
          Commencer le test
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
            réalisés ces dernières 24h
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
      <div className="flex items-center md:items-start flex-col">
        <h1 className="text-4xl font-bold text-text text-center md:text-start max-w-[300px]">
          Your <span className="text-textBlue">IQ Score</span> is Ready!
        </h1>
        <p className="text-lg font-semibold text-text mt-3 max-w-[70%] text-center md:text-start">
          Uncover your intellectual potential with our expertly designed IQ
          tests.
        </p>
        <a
          href="#checkout"
          onClick={(e) => scrollToElement(e, "checkout")}
          className="px-6 py-2 bg-yellow rounded-md text-white text-2xl mt-7 hover:bg-yellow-600 transition duration-300 ease-in-out text-center md:text-start group flex"
        >
          Get Your IQ Score Now
          <div
            aria-hidden="true"
            className="group-hover:translate-x-3 transition duration-150 ease-in-out ml-2"
          >
            &rarr;
          </div>
        </a>
        <div className="flex flex-col items-start mt-7">
          <p className="text-md text-gray-500 text-start flex items-center">
            <CheckCircle className="h-5 w-5 text-textBlue mr-2" />
            Discover your true intelligence level
          </p>
          <p className="text-md text-gray-500 text-start mt-3 md:mt-0 flex items-center">
            <CheckCircle className="h-5 w-5 text-textBlue mr-2" />
            See how you compare to others
          </p>
          <p className="text-md text-gray-500 text-start mt-3 md:mt-0 flex items-center">
            <CheckCircle className="h-5 w-5 text-textBlue mr-2" />
            Understand your strengths and areas for improvement
          </p>
        </div>
      </div>
    );
  };

  return selectedLang === "FR" ? contentFr() : contentEn();
};

const Hero = () => {
  const [selectedLang, setSelectedLang] = useState<Language>("FR"); // Par défaut 'FR'

  return (
    <section className="w-full relative flex justify-center md:h-[500px] items-center flex-col px-4 bg-backgroundBlue/10">
      <div className="mx-auto rounded-xl flex md:flex-row flex-col items-center px-4 md:p-24 px-12 py-12 max-x-5xl">
        <Suspense
          fallback={<div className="text-center text-white">Chargement...</div>}
        >
          <LanguageSelectorClient setSelectedLang={setSelectedLang} />
          <HeroContent selectedLang={selectedLang} />
        </Suspense>
        <div className="relative z-5 group">
          <div className="relative mt-14 md:mt-0">
            <div className="p-5 rounded-2xl blur-xl bg-white absolute top-20 -right-5 h-[350px] w-[600px]"></div>
            <img
              className="w-[600px] relative z-20 rounded-xl"
              src="./images/desktop+phone.png"
              alt="background"
              style={{ zIndex: 20, left: "0", top: "0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
