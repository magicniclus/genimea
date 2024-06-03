/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Banner from "@/components/resultat/Banner";
import Hero from "@/components/resultat/Hero";
import Resultat from "@/components/resultat/Resultat";
import CheckoutForm from "@/components/stripe/CheckoutForm";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { RootState } from "@/redux/store";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";

type User = {
  firstName: string;
  lastName: string;
  age: number;
  country: string;
  score: number;
};

// Définir les types pour les langues et le contenu
type Language = "FR" | "EN";

const userDynamic = [
  {
    firstName: "Carlos",
    lastName: "Garcia",
    age: 30,
    country: "MX",
    score: 85,
  },
  {
    firstName: "Aiko",
    lastName: "Tanaka",
    age: 22,
    country: "JP",
    score: 98,
  },
  {
    firstName: "Fatima",
    lastName: "Benali",
    age: 28,
    country: "MA",
    score: 76,
  },
  // ...
];

const items = [
  {
    name: "fox",
    img: "/icons/fox.svg",
  },
  {
    name: "yahoo",
    img: "/icons/yahoo.svg",
  },
  {
    name: "Bachart",
    img: "/icons/Bachart.svg",
  },
  {
    name: "Benzinga",
    img: "/icons/benzinga.svg",
  },
  {
    name: "MSN",
    img: "/icons/msn.svg",
  },
];

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

const PageContent = ({ selectedLang }: { selectedLang: Language }) => {
  const [index, setIndex] = useState(0);
  const userEmail = useSelector(
    (state: RootState) => state?.admin?.prospect?.email
  );

  function generateRandomNumber(min = 4000, max = 10000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % userDynamic.length);
    }, generateRandomNumber());

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <>
      <header className="w-full">
        <div className="max-w-6xl mx-auto rounded-xl flex flex-row items-center justify-between py-6 pt-28 md:pt-16 px-4 lg:px-8">
          <div className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Genimea</span>
            <img className="h-8 w-auto" src="/logo.png" alt="logo" />
            <span className="text-slate-700 text-xl font-bold ml-1">
              Genimea
            </span>
          </div>
          <div className="md:flex hidden">
            {userEmail && <p className="text-slate-700">{userEmail}</p>}
          </div>
        </div>
      </header>
      <main className="relative w-full">
        <Banner />
        <Hero />
        <div className="w-full flex justify-center">
          <InfiniteMovingCards className="mt-20" items={items} />
        </div>
        <CheckoutForm index={index} email={userEmail} />
        <Resultat index={index} userDynamic={userDynamic} />
        {/* <div className="mt-20">
          <Avis />
        </div> */}
        <div className="mt-20">
          <FAQ />
        </div>
      </main>
      <Footer />
    </>
  );
};

const Page = () => {
  const [selectedLang, setSelectedLang] = useState<Language>("FR");

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LanguageSelectorClient setSelectedLang={setSelectedLang} />
        <PageContent selectedLang={selectedLang} />
      </Suspense>
    </>
  );
};

export default Page;
