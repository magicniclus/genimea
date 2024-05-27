/* eslint-disable @next/next/no-img-element */
"use client";

import Banner from "@/components/resultat/Banner";
import Hero from "@/components/resultat/Hero";
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
        <div className="max-w-5xl mx-auto rounded-xl flex flex-row items-center justify-start p-6 lg:px-8">
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
        <div>
          <InfiniteMovingCards className="mt-20" items={items} />
        </div>
      </main>
    </>
  );
};

export default page;
