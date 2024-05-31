// LanguageSelector.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

type Language = "FR" | "EN";

const LanguageSelector = ({
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

export default LanguageSelector;
