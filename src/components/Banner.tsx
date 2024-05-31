"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

// Define the types for the languages and content
type Language = "FR" | "EN";
interface Content {
  question: string;
  contact: string;
}

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

const BannerContent = ({ selectedLang }: { selectedLang: Language }) => {
  // Content object strictly typed with Language as keys
  const content: Record<Language, Content> = {
    FR: {
      question: "Vous avez une question ? ",
      contact: "support@genimea.com",
    },
    EN: {
      question: "Have a question? ",
      contact: "support@genimea.com",
    },
  };

  return (
    <div className="relative isolate flex items-center justify-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5">
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#FDBF65] to-[#6B95AE] opacity-50"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#6B95AE] to-[#FDBF65] opacity-50"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">
            {content[selectedLang]?.question || "Loading..."}
          </strong>
          <a
            className="text-textBlue"
            href={`mailto:${content[selectedLang]?.contact}`}
          >
            {content[selectedLang]?.contact}
          </a>
        </p>
      </div>
    </div>
  );
};

const Banner = () => {
  const [selectedLang, setSelectedLang] = useState<Language>("FR");

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LanguageSelectorClient setSelectedLang={setSelectedLang} />
        <BannerContent selectedLang={selectedLang} />
      </Suspense>
    </>
  );
};

export default Banner;
