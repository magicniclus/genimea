/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import SubscriptionForm from "@/components/stripe/SubscriptionForm";
import { CheckIcon, ShieldCheckIcon } from "@heroicons/react/20/solid";
import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

// Define the types for the languages and content
type Language = "FR" | "EN";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

type CheckoutFormProps = {
  index: number;
  email?: string;
};

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

const CheckoutFormContent = ({
  selectedLang,
  testNumber,
  email,
}: {
  selectedLang: Language;
  testNumber: number;
  email?: string;
}) => {
  const contentFr = () => (
    <div className="max-w-5xl w-full mx-auto rounded-xl flex flex-col items-center w-full max-w-[550px] p-5 border border-slate-300 shadow-md rounded-md">
      <div className="w-full mb-5 flex items-center flex-col">
        <p className="text-sm text-semibold text-slate-500 text-center px-2 py-1 bg-backgroundBlue/50 rounded-full">
          Plus de <span className="text-slate-700 font-bold">{testNumber}</span>{" "}
          tests réalisés aujourd&apos;hui. Moyenne{" "}
          <span className="text-slate-700 font-bold">Score de QI : 103</span>
        </p>
        <h2 className="mt-3 text-xl font-bold text-slate-700 text-center">
          Essayez <span className="text-textBlue">GENIMEA IQ</span> pendant 7
          jours
        </h2>
      </div>
      <div className="w-full mb-5 flex items-center flex-col bg-backgroundBlue/50 p-3 rounded-md">
        <ul className="text-xs flex flex-col">
          <li className="flex">
            <CheckIcon className="w-4 h-auto text-slate-700 mr-3" />
            <p>
              Obtenez votre <b>score de QI précis</b> avec notre évaluation
              scientifiquement validée
            </p>
          </li>
          <li className="flex mt-2">
            <CheckIcon className="w-4 h-auto text-slate-700 mr-3" />
            <p>
              <b>Sachez</b> où vous vous situez par rapport à la population
              générale
            </p>
          </li>
          <li className="flex mt-2">
            <CheckIcon className="w-4 h-auto text-slate-700 mr-3" />
            <p>
              Identifiez vos <b>points forts</b> et <b>faiblesses cognitives</b>
            </p>
          </li>
          <li className="flex mt-2">
            <CheckIcon className="w-4 h-auto text-slate-700 mr-3" />
            <p>
              Une formation personnalisée basée sur des preuves pour{" "}
              <b>augmenter le QI</b> jusqu&apos;à <b>37%</b> en 4 semaines
            </p>
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-between">
        <h2 className="text-lg font-bold text-slate-700">
          Total dû aujourd&apos;hui :
        </h2>
        <div className="flex flex-col items-end">
          <div className="flex items-center">
            <h3 className="text-slate-300 text-sm mr-2 line-through">
              14,99 $
            </h3>
            <h3 className="text-slate-700 text-lg font-bold">0,99 $</h3>
          </div>
          <p className="text-xs text-red text-bold">Vous économisez 85%</p>
        </div>
      </div>
      <div className="w-full flex justify-start my-3">
        <p className="text-xs">
          Votre essai de 7 jours ne coûte que 0,99 $. Par la suite, il sera de
          19,99 $/semaine.
        </p>
      </div>
      <div className="w-full mb-5 flex flex-col bg-backgroundBlue/50 p-3 py-5 rounded-md">
        <div className="flex items-center text-sm">
          <CursorArrowRaysIcon className="w-10 h-auto text-slate-700 mr-2" />
          <p>
            <b>Annulez à tout moment</b> <br /> pendant la période d&apos;essai
            pour éviter d&apos;être facturé
          </p>
        </div>
        <div className="flex items-center text-sm mt-5">
          <ShieldCheckIcon className="w-10 h-auto text-slate-700 mr-2" />
          <p>
            <b>Paiement sécurisé</b>
            <br /> avec <b>Stripe</b>
          </p>
        </div>
      </div>
      <Elements stripe={stripePromise}>
        <SubscriptionForm semail={email} />
      </Elements>
    </div>
  );

  const contentEn = () => (
    <div className="max-w-5xl w-full max-w-[550px] mx-auto rounded-xl flex flex-col items-center p-5 border border-slate-300 shadow-md rounded-md">
      <div className="w-full mb-5 flex items-center flex-col">
        <p className="text-sm font-semibold text-slate-500 text-center px-2 py-1 bg-backgroundBlue/50 rounded-full">
          Over <span className="text-slate-700 font-bold">{testNumber}</span>{" "}
          tests taken today. Avg. IQ score:{" "}
          <span className="text-slate-700 font-bold">103</span>
        </p>
        <h2 className="mt-3 text-xl font-bold text-slate-700 text-center">
          Try <span className="text-textBlue">GENIMEA IQ</span> for 7 Days
        </h2>
      </div>
      <div className="w-full mb-5 flex items-center flex-col bg-backgroundBlue/50 p-3 rounded-md">
        <ul className="text-xs flex flex-col">
          <li className="flex">
            <CheckIcon className="w-4 h-auto text-slate-700 mr-3" />
            <p>
              Get your precise <b>IQ score</b> with our scientifically validated
              assessment
            </p>
          </li>
          <li className="flex mt-2">
            <CheckIcon className="w-4 h-auto text-slate-700 mr-3" />
            <p>
              <b>Know</b> where you <b>stand</b> compared to the general
              population
            </p>
          </li>
          <li className="flex mt-2">
            <CheckIcon className="w-4 h-auto text-slate-700 mr-3" />
            <p>
              Identify your <b>cognitive strengths</b> and <b>weaknesses</b>
            </p>
          </li>
          <li className="flex mt-2">
            <CheckIcon className="w-4 h-auto text-slate-700 mr-3" />
            <p>
              Personalized training to <b>boost IQ</b> by up to <b>37%</b> in 4
              weeks
            </p>
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-between">
        <h2 className="text-lg font-bold text-slate-700">Total due today:</h2>
        <div className="flex flex-col items-end">
          <div className="flex items-center">
            <h3 className="text-slate-300 text-sm mr-2 line-through">$14.99</h3>
            <h3 className="text-slate-700 text-lg font-bold">$0.99</h3>
          </div>
          <p className="text-xs text-red font-bold">You save 85%</p>
        </div>
      </div>
      <div className="w-full flex justify-start my-3">
        <p className="text-xs">
          Your 7-day trial will cost only $0.99. Afterwards, it will be
          $19.99/week.
        </p>
      </div>
      <div className="w-full mb-5 flex flex-col bg-backgroundBlue/50 p-3 py-5 rounded-md">
        <div className="flex items-center text-sm">
          <CursorArrowRaysIcon className="w-10 h-auto text-slate-700 mr-2" />
          <p>
            <b>Cancel anytime</b> during the trial period to avoid being charged
          </p>
        </div>
        <div className="flex items-center text-sm mt-5">
          <ShieldCheckIcon className="w-10 h-auto text-slate-700 mr-2" />
          <p>
            <b>Secure</b> payment with <b>Stripe</b>
          </p>
        </div>
      </div>
      <Elements stripe={stripePromise}>
        <SubscriptionForm semail={email} />
      </Elements>
    </div>
  );

  return selectedLang === "FR" ? contentFr() : contentEn();
};

const CheckoutForm: React.FC<CheckoutFormProps> = ({ index, email }) => {
  const [selectedLang, setSelectedLang] = useState<Language>("FR");
  const [testNumber, setTestNumber] = useState(2358);

  useEffect(() => {
    setTestNumber(testNumber + 1);
  }, [index]);

  return (
    <section className="w-full px-1 md:px-6 mt-16 text-slate-700" id="checkout">
      <Suspense
        fallback={<div className="text-center text-slate-700">Loading...</div>}
      >
        <LanguageSelectorClient setSelectedLang={setSelectedLang} />
        <CheckoutFormContent
          selectedLang={selectedLang}
          testNumber={testNumber}
          email={email}
        />
      </Suspense>
    </section>
  );
};

export default CheckoutForm;
