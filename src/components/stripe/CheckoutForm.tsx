/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import SubscriptionForm from "@/components/stripe/SubscriptionForm";
import { CheckIcon, ShieldCheckIcon } from "@heroicons/react/20/solid";
import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// Define the types for the languages and content
type Language = "FR" | "EN";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

type CheckoutFormProps = {
  index: number;
  email?: string;
};

const CheckoutForm: React.FC<CheckoutFormProps> = ({ index, email }) => {
  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR");

  useEffect(() => {
    const lang = searchParams?.get("lang");
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  const [testNumber, setTestNumber] = useState(2358);

  useEffect(() => {
    setTestNumber(testNumber + 1);
  }, [index]);

  const contentFr = () => {
    return (
      <div className="max-w-5xl w-full mx-auto rounded-xl flex flex-col items-center w-full max-w-[550px] p-5 border border-slate-300 shadow-md rounded-md shadow-md">
        <div className="w-full mb-5 flex items-center flex-col">
          <p className="text-sm text-semibold text-slate-500 text-center px-2 py-1 bg-backgroundBlue/50 rounded-full">
            Plus de{" "}
            <span className="text-slate-700 font-bold">{testNumber}</span> tests
            réalisés aujourd&apos;hui. Moyenne{" "}
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
                Identifiez vos <b>points forts</b> et{" "}
                <b>faiblesses cognitives</b>
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
              <b>Annulez à tout moment</b> <br /> pendant la période
              d&apos;essai pour éviter d&paos;être facturé
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
  };

  const contentEn = () => {
    return (
      <div className="max-w-5xl w-full mx-auto rounded-xl flex flex-col items-center w-full max-w-[550px] p-5 border border-slate-300 shadow-md rounded-md shadow-md">
        <div className="w-full mb-5 flex items-center flex-col">
          <p className="text-sm text-semibold text-slate-500 text-center px-2 py-1 bg-backgroundBlue/50 rounded-full">
            Over <span className=" text-slate-700 font-bold">{testNumber}</span>{" "}
            tests taken today Avg.{" "}
            <span className=" text-slate-700 font-bold">IQ score: 103</span>
          </p>
          <h2 className="mt-3 text-xl font-bold text-slate-700 text-center">
            Try <span className="text-textBlue">GENIMEA IQ</span> for 7 days
          </h2>
        </div>
        <div className="w-full mb-5 flex items-center flex-col bg-backgroundBlue/50 p-3 rounded-md">
          <ul className="text-xs flex flex-col">
            <li className="flex">
              <CheckIcon className="w-4 h-auto text-slate-700 mr-3" />
              <p>
                Get your precise <b>IQ score </b>with our
                scientifically-validated assessment
              </p>
            </li>
            <li className="flex mt-2">
              <CheckIcon className="w-4 h-auto text-slate-700 mr-3" />
              <p>
                <b>Know</b> where <b>you stand</b> compared to the general
                population
              </p>
            </li>
            <li className="flex mt-2">
              <CheckIcon className="w-4 h-auto text-slate-700 mr-3" />
              <p>
                {" "}
                Identify your <b>cognitive strengths</b> and <b>weaknesses</b>
              </p>
            </li>
            <li className="flex mt-2">
              <CheckIcon className="w-4 h-auto text-slate-700 mr-3" />
              <p>
                {" "}
                Evidence-based personalized training to <b>boost IQ</b> by up to{" "}
                <b>37%</b> in 4 weeks
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-between">
          <h2 className="text-lg font-bold text-slate-700 ">
            Total due today:
          </h2>
          <div className="flex flex-col items-end">
            <div className="flex items-center">
              <h3 className="text-slate-300 text-sm mr-2 line-through">
                $14.99
              </h3>
              <h3 className="text-slate-700 text-lg font-bold">$0.99</h3>
            </div>
            <p className="text-xs text-red text-bold">You save 85%</p>
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
              <b>Cancel anytime</b> <br /> during the trial period to avoid
              being charged
            </p>
          </div>
          <div className="flex items-center text-sm mt-5">
            <ShieldCheckIcon className="w-10 h-auto text-slate-700 mr-2" />
            <p>
              <b>Secure</b>
              <br /> payment with <b>Stripe</b>
            </p>
          </div>
        </div>
        <Elements stripe={stripePromise}>
          <SubscriptionForm semail={email} />
        </Elements>
      </div>
    );
  };

  return (
    <section className="w-full px-1 md:px-6 mt-16 text-slate-700" id="checkout">
      {selectedLang === "FR" ? contentFr() : contentEn()}
    </section>
  );
};

export default CheckoutForm;
