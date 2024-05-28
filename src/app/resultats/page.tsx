/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Avis from "@/components/analyse/Avis";
import Banner from "@/components/resultat/Banner";
import Hero from "@/components/resultat/Hero";
import Resultat from "@/components/resultat/Resultat";
import CheckoutForm from "@/components/stripe/CheckoutForm";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type User = {
  firstName: string;
  lastName: string;
  age: number;
  country: string;
  score: number;
};

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
  {
    firstName: "Liam",
    lastName: "O'Connor",
    age: 32,
    country: "IE",
    score: 104,
  },
  {
    firstName: "Yara",
    lastName: "Silva",
    age: 27,
    country: "BR",
    score: 89,
  },
  {
    firstName: "Chen",
    lastName: "Wang",
    age: 24,
    country: "CN",
    score: 91,
  },
  {
    firstName: "Sophia",
    lastName: "Schmidt",
    age: 29,
    country: "DE",
    score: 108,
  },
  {
    firstName: "Ivan",
    lastName: "Petrov",
    age: 31,
    country: "RU",
    score: 92,
  },
  {
    firstName: "Amara",
    lastName: "Ndiaye",
    age: 26,
    country: "SN",
    score: 95,
  },
  {
    firstName: "Luca",
    lastName: "Rossi",
    age: 23,
    country: "IT",
    score: 87,
  },
  {
    firstName: "Mia",
    lastName: "Novak",
    age: 28,
    country: "HR",
    score: 78,
  },
  {
    firstName: "Hassan",
    lastName: "Ali",
    age: 27,
    country: "EG",
    score: 82,
  },
  {
    firstName: "Anya",
    lastName: "Kumar",
    age: 25,
    country: "IN",
    score: 90,
  },
  {
    firstName: "Olivia",
    lastName: "Martin",
    age: 30,
    country: "CA",
    score: 103,
  },
  {
    firstName: "Lucas",
    lastName: "Mendes",
    age: 24,
    country: "PT",
    score: 88,
  },
  {
    firstName: "Emma",
    lastName: "Dubois",
    age: 29,
    country: "FR",
    score: 109,
  },
  {
    firstName: "Alex",
    lastName: "Brown",
    age: 32,
    country: "AU",
    score: 94,
  },
  {
    firstName: "Nina",
    lastName: "Popova",
    age: 26,
    country: "BG",
    score: 80,
  },
  {
    firstName: "Jorge",
    lastName: "Fernandez",
    age: 31,
    country: "ES",
    score: 105,
  },
  {
    firstName: "Sara",
    lastName: "Ahmed",
    age: 27,
    country: "SA",
    score: 97,
  },
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
const Page = () => {
  const [index, setIndex] = useState(0);
  function generateRandomNumber(min = 4000, max = 10000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const userEmail = useSelector(
    (state: RootState) => state?.admin?.prospect?.email
  );

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
        <div className="mt-20">
          <Avis />
        </div>
        <div className="mt-20">
          <FAQ />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
