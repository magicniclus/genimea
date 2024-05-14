/* eslint-disable @next/next/no-img-element */
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Define the types for the languages and content
type Language = "FR" | "EN";

const Footer = () => {
  const navigationFr = {
    main: [
      { name: "Politique de confidentialité", href: "#" },
      { name: "Conditions générales de vente", href: "#" },
      { name: "Aide", href: "#" },
    ],
  };

  const navigationEn = {
    main: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Help", href: "#" },
    ],
  };

  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR");

  useEffect(() => {
    const lang = searchParams.get("lang");
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  const contentFr = () => {
    return (
      <footer className="bg-slate-700">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav
            className="-mb-6 columns-1 sm:flex sm:justify-center sm:space-x-12"
            aria-label="Footer"
          >
            {navigationFr.main.map((item) => (
              <div key={item.name} className="pb-6">
                <a
                  href={item.href}
                  className="text-sm leading-6 text-white hover:text-gray-900"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <div className="mt-10 flex justify-center space-x-4">
            <img className="w-8 h-auto" src="./icons/visa.svg" alt="visa" />
            <img
              className="w-8 h-auto"
              src="./icons/mastercard.svg"
              alt="mastercard"
            />
            <img className="w-8 h-auto" src="./icons/amex.svg" alt="amex" />
          </div>
          <p className="mt-10 text-center text-xs leading-5 text-white">
            &copy; 2024 Genimea.com, tous droits réservés.
          </p>
        </div>
      </footer>
    );
  };

  const contentEn = () => {
    return (
      <footer className="bg-slate-700">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav
            className="-mb-6 columns-1 sm:flex sm:justify-center sm:space-x-12"
            aria-label="Footer"
          >
            {navigationEn.main.map((item) => (
              <div key={item.name} className="pb-6">
                <a
                  href={item.href}
                  className="text-sm leading-6 text-white hover:text-gray-900"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <div className="mt-10 flex justify-center space-x-4">
            <img className="w-8 h-auto" src="./icons/visa.svg" alt="visa" />
            <img
              className="w-8 h-auto"
              src="./icons/mastercard.svg"
              alt="mastercard"
            />
            <img className="w-8 h-auto" src="./icons/amex.svg" alt="amex" />
          </div>
          <p className="mt-10 text-center text-xs leading-5 text-white">
            &copy; 2024 Genimea.com, all rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  return <>{selectedLang === "FR" ? contentFr() : contentEn()}</>;
};

export default Footer;
