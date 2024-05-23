/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import addProspect from "@/firebase/database/database";
import { setEmail } from "@/redux/addProspect";
import { RootState } from "@/redux/store";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Define the types for the languages and content
type Language = "FR" | "EN";

const Email = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR"); // Default to 'FR'
  const [updateEmail, setUpdateEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);

  const state = useSelector(
    (state: RootState) => state.admin.prospect.reponses
  );

  useEffect(() => {
    const lang = searchParams.get("lang");
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setUpdateEmail(email);

    // Validate email with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };

  useEffect(() => {
    console.log(state);
    if (state) {
      router.push("/start");
    }
  }, [state]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state) {
      router.push("/start");
    }
    if (isEmailValid && state) {
      const elements = { email: updateEmail, reponses: state };
      await addProspect(elements);
      dispatch(setEmail(updateEmail));
      router.push("/resultats");
    }
  };

  const contentFr = () => {
    return (
      <>
        <h1 className="text-3xl font-bold text-slate-700">
          Découvrez votre potentiel <span className="text-textBlue">QI</span> !
        </h1>
        <p className="text-slate-500 text-sm max-w-[500px] text-center mt-5">
          Entrez votre email pour obtenir un accès exclusif à notre évaluation
          détaillée du QI. Découvrez vos forces et faiblesses intellectuelles et
          commencez un voyage d&apos;amélioration cognitive.
        </p>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Adresse e-mail"
            value={updateEmail}
            onChange={handleEmailChange}
            className="w-full border border-slate-300 rounded-md p-2 mt-5"
          />
          <button
            type="submit"
            disabled={!isEmailValid}
            className={`px-4 py-2 text-lg text-white cursor-pointer rounded-md w-max mt-5 transition duration-300 ease-in-out ${
              isEmailValid ? "bg-textBlue hover:bg-yellow-600" : "bg-gray-400"
            }`}
          >
            Continuer
          </button>
          <p className="text-xs text-center max-w-[500px] mt-5 text-slate-500">
            Genimea IQ garantit la confidentialité de vos informations
            personnelles. En cliquant sur &quot;Continuer&quot; ci-dessous, vous
            reconnaissez avoir lu, compris et accepté les Conditions Générales
            et la Politique de Confidentialité de Genimea IQ.
          </p>
        </form>
      </>
    );
  };

  const contentEn = () => {
    return (
      <>
        <h1 className="text-3xl font-bold text-slate-700">
          Discover Your <span className="text-textBlue">QI</span> Potential!!
        </h1>
        <p className="text-slate-500 text-sm max-w-[500px] text-center mt-5">
          Enter your email to gain exclusive access to our detailed IQ
          assessment. Learn about your intellectual strengths and weaknesses and
          begin a journey of cognitive enhancement.
        </p>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={updateEmail}
            onChange={handleEmailChange}
            className="w-full border border-slate-300 rounded-md p-2 mt-5"
          />
          <button
            type="submit"
            disabled={!isEmailValid}
            className={`px-4 py-2 text-lg text-white cursor-pointer rounded-md w-max mt-5 transition duration-300 ease-in-out ${
              isEmailValid ? "bg-textBlue hover:bg-yellow-600" : "bg-gray-400"
            }`}
          >
            Continue
          </button>
          <p className="text-xs text-center max-w-[500px] mt-5 text-slate-500">
            Genimea IQ ensures the confidentiality of your personal information.
            By clicking &quot;Continue&quot; below you acknowledge that you have
            read, understood, and accepted Genimea IQ&apos;s Terms & Conditions
            and Privacy Policy.
          </p>
        </form>
      </>
    );
  };

  return (
    <section className="w-full px-1 md:px-6 mt-5">
      <div className="max-w-5xl w-full mx-auto rounded-xl flex flex-col items-center p-4 md:p-12">
        {selectedLang === "EN" ? contentEn() : contentFr()}
      </div>
    </section>
  );
};

export default Email;
