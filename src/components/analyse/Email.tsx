"use client";

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

import { addProspect } from "@/firebase/database/database";
import { setEmail, setUserIQ, setUserId } from "@/redux/addProspect";
import { RootState } from "@/redux/store";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Define the types for the languages and content
type Language = "FR" | "EN";

interface EmailFormProps {
  selectedLang: Language;
  reponses: { [key: number]: string | null };
  initialReponses: { [key: number]: string };
  timer: number;
}

const EmailForm: React.FC<EmailFormProps> = ({
  selectedLang,
  reponses,
  initialReponses,
  timer,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [updateEmail, setUpdateEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setUpdateEmail(email);

    // Validate email with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };

  const allResponsesFilled = () => {
    return Object.values(reponses).every((value) => value !== null);
  };

  useEffect(() => {
    if (!allResponsesFilled()) {
      router.push("/start");
    }
  }, [reponses]);

  const calculateIQ = (
    reponses: { [key: number]: string | null },
    initialReponses: { [key: number]: string }
  ): number => {
    let correctAnswers = 0;
    for (const key in reponses) {
      if (reponses[key] === initialReponses[key]) {
        correctAnswers++;
      }
    }
    const iq = 100 + (correctAnswers - 10) * 5;
    return iq;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!allResponsesFilled()) {
      router.push("/start");
      return;
    } else if (isEmailValid) {
      const userIQ = calculateIQ(reponses, initialReponses);
      dispatch(setEmail(updateEmail));
      dispatch(setUserIQ(userIQ));

      const elements = {
        email: updateEmail,
        reponses,
        userIQ,
        timer,
      };
      try {
        await addProspect(elements).then((id) => {
          if (id) {
            dispatch(setUserId(id));
            router.push(
              "/resultats" + (selectedLang === "EN" ? "/?lang=EN" : "/?lang=FR")
            );
          } else {
            console.error("Failed to retrieve ID");
          }
        });
      } catch (error) {
        console.error("Error adding prospect: ", error);
      }
      router.push(
        "/resultats" + (selectedLang === "EN" ? "/?lang=EN" : "/?lang=FR")
      );
    }
  };

  return (
    <>
      {selectedLang === "FR" ? (
        <>
          <h1 className="text-3xl font-bold text-slate-700">
            Découvrez votre potentiel <span className="text-textBlue">QI</span>{" "}
            !
          </h1>
          <p className="text-slate-500 text-sm max-w-[500px] text-center mt-5">
            Entrez votre email pour obtenir un accès exclusif à notre évaluation
            détaillée du QI. Découvrez vos forces et faiblesses intellectuelles
            et commencez un voyage d&apos;amélioration cognitive.
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
                isEmailValid
                  ? "bg-textBlue hover:bg-textBlue/70"
                  : "bg-textBlue/70"
              }`}
            >
              Continuer
            </button>
            <p className="text-xs text-center max-w-[500px] mt-5 text-slate-500">
              Genimea IQ garantit la confidentialité de vos informations
              personnelles. En cliquant sur &quot;Continuer&quot; ci-dessous,
              vous reconnaissez avoir lu, compris et accepté les Conditions
              Générales et la Politique de Confidentialité de Genimea IQ.
            </p>
          </form>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-slate-700">
            Discover Your <span className="text-textBlue">IQ</span> Potential!
          </h1>
          <p className="text-slate-500 text-sm max-w-[500px] text-center mt-5">
            Enter your email to gain exclusive access to our detailed IQ
            assessment. Learn about your intellectual strengths and weaknesses
            and begin a journey of cognitive enhancement.
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
                isEmailValid
                  ? "bg-textBlue hover:bg-textBlue/70"
                  : "bg-textBlue/70"
              }`}
            >
              Continue
            </button>
            <p className="text-xs text-center max-w-[500px] mt-5 text-slate-500">
              Genimea IQ ensures the confidentiality of your personal
              information. By clicking &quot;Continue&quot; below you
              acknowledge that you have read, understood, and accepted Genimea
              IQ&apos;s Terms & Conditions and Privacy Policy.
            </p>
          </form>
        </>
      )}
    </>
  );
};

const Email = () => {
  const searchParams = useSearchParams();
  const reponses = useSelector(
    (state: RootState) => state.admin.prospect.reponses
  );
  const initialReponses = useSelector(
    (state: RootState) => state.admin.prospect.initialReponses
  );
  const timer = useSelector((state: RootState) => state.admin.prospect.timer);
  const [selectedLang, setSelectedLang] = useState<Language>("FR");

  useEffect(() => {
    const lang = searchParams?.get("lang");
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen bg-slate-50 flex justify-center items-center animate-pulse duration-2000 ease-in-out">
          <img src="/logo.png" alt="logo" className="w-20 h-auto" />
        </div>
      }
    >
      <section className="w-full px-1 md:px-6 mt-5">
        <div className="max-w-5xl w-full mx-auto rounded-xl flex flex-col items-center p-4 md:p-12">
          <EmailForm
            selectedLang={selectedLang}
            reponses={reponses}
            initialReponses={initialReponses}
            timer={timer}
          />
        </div>
      </section>
    </Suspense>
  );
};

export default Email;
