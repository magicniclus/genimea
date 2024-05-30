"use client";

import { CheckIcon } from "@heroicons/react/20/solid";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Define the types for the languages and content
type Language = "FR" | "EN";
const includedFeaturesFr = [
  "Accès privé à la plateforme",
  "Comparatif avec la moyenne internationale",
  "Certificat de réussite en PDF",
  "Analyse détaillée de vos résultats",
];

const includedFeaturesEn = [
  "Private access to the platform",
  "Comparison with the international average",
  "PDF certificate of achievement",
  "Detailed analysis of your results",
];

const Pricing = () => {
  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR");

  useEffect(() => {
    const lang = searchParams?.get("lang");
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  const contentFr = () => {
    return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Notre pack d&apos;entraînement
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Testez, améliorez votre intéligence
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Découvrez notre plateforme d&apos;entraînement, adaptée et
              optimisée pour répondre à vos besoins. Testez et améliorez votre
              intelligence avec des outils de pointe.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-textBlue">
                Ce que cela inclut :
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeaturesFr.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-yellow"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Abonnement mensuel (sans angagement)
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    34,90
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    € par mois
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-yellow px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
                >
                  Faire mon test
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Bénéficiez d&apos;une période d&apos;essai à 1 € pour 2 jours,
                  puis 34,90 € par mois.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const contentEn = () => {
    return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Training Pack
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Test and improve your intelligence
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Discover our training platform, tailored and optimized to meet
              your needs. Enhance your intelligence with state-of-the-art tools.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-textBlue">
                What it includes:
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeaturesEn.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-yellow"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Monthly subscription (no commitment)
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $34,90
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    per month
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-yellow px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
                >
                  Start My Test
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Enjoy a trial period for €1 for 2 days, then €34.90 per month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      {selectedLang === "FR" ? contentFr() : contentEn()}
    </div>
  );
};

export default Pricing;
