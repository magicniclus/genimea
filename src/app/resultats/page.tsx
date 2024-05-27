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

const page = () => {
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

  return (
    <>
      <header className="w-full">
        <div className="max-w-6xl mx-auto rounded-xl flex flex-row items-center justify-start py-6 pt-16 px-4 lg:px-8">
          <div className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Genimea</span>
            <img className="h-8 w-auto" src="/logo.png" alt="logo" />
            <span className="text-slate-700 text-xl font-bold ml-1">
              Genimea
            </span>
          </div>
        </div>
      </header>
      <main className="relative w-full">
        <Banner />
        <Hero />
        <CheckoutForm />
        <div className="w-full flex justify-center">
          <InfiniteMovingCards className="mt-20" items={items} />
        </div>
        <Resultat />
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

export default page;
