import Content from "@/components/start/Content";
import { Suspense } from "react";

/* eslint-disable @next/next/no-img-element */

const StartPageContent = () => {
  return (
    <>
      <header className="w-full">
        <div className="max-w-5xl mx-auto rounded-xl flex flex-row items-center justify-start p-6 lg:px-8">
          <div className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Genimea</span>
            <img className="h-8 w-auto" src="./logo.png" alt="logo" />
            <span className="text-slate-700 text-xl font-bold ml-1">
              Genimea
            </span>
          </div>
        </div>
      </header>
      <main className="relative">
        <div
          className="absolute inset-x-0 -top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#99D1E5] to-[#6B95AE] opacity-15"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 top-52 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#99D1E5] to-[#FDBF65] opacity-15"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>
        <Content />
      </main>
    </>
  );
};

const StartPage = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen bg-slate-50 flex justify-center items-center animate-pulse duration-2000 ease-in-out">
          <img src="/logo.png" alt="logo" className="w-20 h-auto" />
        </div>
      }
    >
      <StartPageContent />
    </Suspense>
  );
};

export default StartPage;
