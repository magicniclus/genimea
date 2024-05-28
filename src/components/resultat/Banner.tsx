"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Définir les types pour les langues et le contenu
type Language = "FR" | "EN";

const Banner = () => {
  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR"); // Par défaut 'FR'

  useEffect(() => {
    const lang = searchParams?.get("lang"); // Ajouter une vérification nulle pour searchParams
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  const contentFr = () => (
    <a href="#checkout" className="text-sm leading-6 text-white cursor-pointer">
      <strong className="font-semibold">Offre de bienvenue spéciale</strong>
      <svg
        viewBox="0 0 2 2"
        className="mx-2 inline h-0.5 w-0.5 fill-current"
        aria-hidden="true"
      >
        <circle cx={1} cy={1} r={1} />
      </svg>
      Obtenez 85% de réduction aujourd&apos;hui !
    </a>
  );

  const contentEn = () => (
    <a href="#checkout" className="text-sm leading-6 text-white cursor-pointer">
      <strong className="font-semibold">Special Welcome Offer</strong>
      <svg
        viewBox="0 0 2 2"
        className="mx-2 inline h-0.5 w-0.5 fill-current"
        aria-hidden="true"
      >
        <circle cx={1} cy={1} r={1} />
      </svg>
      Get 85% Discount Today!
    </a>
  );

  return (
    <div className="flex items-center gap-x-6 bg-indigo-600 px-6 py-2.5 sm:px-3.5 justify-center flex-col md:flex-col text-center">
      {selectedLang === "FR" ? contentFr() : contentEn()}
    </div>
  );
};

export default Banner;
