/* eslint-disable @next/next/no-img-element */
"use client";

import Hero from "@/components/Hero";
import CheckoutForm from "@/components/stripe/CheckoutForm";

const page = () => {
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
        <Hero />
        <CheckoutForm />
      </main>
    </>
  );
};

export default page;
