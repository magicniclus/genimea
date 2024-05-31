/* eslint-disable @next/next/no-img-element */
"use client";

import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import Certificat from "@/components/Certificat";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import PointsImportants from "@/components/PointsImportants";
import Stats from "@/components/Stats";
import { useSearchParams } from "next/navigation";
import {
  Suspense,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// Définir les types pour les langues et le contenu
type Language = "FR" | "EN";

const LanguageContext = createContext<Language>("FR");

const useLanguage = () => useContext(LanguageContext);

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR");

  // Update the language state based on URL search parameters
  useEffect(() => {
    const lang = searchParams?.get("lang");
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  return (
    <LanguageContext.Provider value={selectedLang}>
      {children}
    </LanguageContext.Provider>
  );
};

const HomeContent = () => {
  const selectedLang = useLanguage();

  return (
    <>
      <Nav />
      <Banner />
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
        <Hero />
        <div className="relative">
          <div
            className="absolute inset-x-0  -top-54 z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
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
            className="absolute inset-x-0 top-[60%] z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#99D1E5] to-[#6B95AE] opacity-20"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            />
          </div>
          <Cards />
          <PointsImportants />
          <Stats />
          <Certificat />
          <FAQ />
        </div>
      </main>
      <Footer />
    </>
  );
};

const Home = () => (
  <Suspense
    fallback={
      <div className="h-screen w-screen bg-slate-50 flex justify-center items-center animate-pulse duration-2000 ease-in-out">
        <img src="/logo.png" alt="logo" className="w-20 h-auto" />
      </div>
    }
  >
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  </Suspense>
);

export default Home;
