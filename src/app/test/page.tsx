/* eslint-disable @next/next/no-img-element */
"use client";

import Container from "@/components/test/Container";
import ContainerTest from "@/components/test/ContainerTest";
import StepBar from "@/components/test/StepBar";
import StepCards from "@/components/test/StepCards";
import Timer from "@/components/test/Timer";
import { setReponses, setTimer } from "@/redux/addProspect";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// Define the types for the languages and content
type Language = "FR" | "EN";

interface Question {
  img: string;
  options: string[];
  answer: number;
}

const TestContent = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR");

  useEffect(() => {
    const lang = searchParams?.get("lang");
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  const [addResponse, setAddResponse] = useState<{
    [key: number]: string | null;
  }>({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null,
    11: null,
    12: null,
    13: null,
    14: null,
    15: null,
    16: null,
    17: null,
    18: null,
    19: null,
    20: null,
  });

  const [step, setStep] = useState(1);
  const [totalStep, setTotalStep] = useState(20);
  const [remainingTime, setRemainingTime] = useState(20 * 60);

  const handleTimeChange = (newTime: number) => {
    setRemainingTime(newTime);
  };

  const allResponsesFilled = () => {
    return Object.values(addResponse).every((value) => value !== null);
  };

  const handleSubmit = async () => {
    await dispatch(setReponses(addResponse));
    await dispatch(setTimer(remainingTime));
    router.push("/test/analyse" + "?lang=" + selectedLang);
  };

  const contentFr = () => {
    return (
      <Container>
        <ContainerTest
          addResponse={addResponse}
          setAddResponse={setAddResponse}
          step={step}
          setStep={setStep}
        ></ContainerTest>
        {step < totalStep && (
          <div
            className={`w-full flex justify-${
              step > 1 ? "between" : "end"
            } mt-5`}
          >
            {step > 1 && (
              <button
                className="bg-white py-1 px-4 text-slate-700 rounded-md cursor-pointer md:hidden block"
                onClick={() => setStep(step - 1)}
              >
                Précedent
              </button>
            )}
            <button
              type="button"
              className="py-1 px-4 bg-textBlue text-white rounded-lg shadow-md md:hidden block"
              onClick={() => setStep(step + 1)}
            >
              {step === totalStep ? "Soumettre" : "Suivant"}
            </button>
          </div>
        )}

        <div className="flex w-full md:justify-end justify-center">
          {step === 20 && allResponsesFilled() && (
            <div className="flex flex-col  md:w-1/2 w-full mt-7 md:mt-0">
              <button
                className="py-2 px-4 bg-yellow text-white text-lg rounded-lg shadow-md block hover:shadow-lg transition-all duration-300 ease-in-out text-center"
                onClick={handleSubmit}
              >
                VOIR MON RESULTAT
              </button>
              <p className="text-slate-400 text-xs mt-3">
                Voulez-vous confirmer vos réponses ? Vous ne pourrez plus les
                modifier après validation.
              </p>
            </div>
          )}
        </div>
      </Container>
    );
  };

  const contentEn = () => {
    return (
      <Container>
        <ContainerTest
          addResponse={addResponse}
          setAddResponse={setAddResponse}
          step={step}
          setStep={setStep}
        ></ContainerTest>
        {step < totalStep && (
          <div
            className={`w-full flex justify-${
              step > 1 ? "between" : "end"
            } mt-5`}
          >
            {step > 1 && (
              <button
                className="bg-white py-1 px-4 text-slate-700 rounded-md cursor-pointe md:hidden blockr"
                onClick={() => setStep(step - 1)}
              >
                Previous
              </button>
            )}
            <button
              type="button"
              className="py-1 px-4 bg-textBlue text-white rounded-lg shadow-md md:hidden block"
              onClick={() => setStep(step + 1)}
            >
              {step === totalStep ? "Submit" : "Next"}
            </button>
          </div>
        )}
        <div className="flex w-full md:justify-end justify-center">
          {step === 20 && allResponsesFilled() && (
            <div className="flex flex-col md:w-1/2 w-full mt-7 md:mt-0">
              <button
                className="py-2 px-4 bg-yellow text-white text-lg rounded-lg shadow-md block hover:shadow-lg transition-all duration-300 ease-in-out text-center"
                onClick={handleSubmit}
              >
                GET MY RESULT
              </button>
              <p className="text-slate-400 text-xs mt-3">
                Do you want to confirm your answers? You will not be able to
                edit them after validation.
              </p>
            </div>
          )}
        </div>
      </Container>
    );
  };

  return (
    <>
      <Timer onTimeChange={handleTimeChange} />
      <main className="relative">
        <StepBar step={step} totalStep={totalStep} />
        {selectedLang === "EN" ? contentEn() : contentFr()}
        <StepCards totalStep={totalStep} setStep={setStep} step={step} />
      </main>
    </>
  );
}; // Assurez-vous que le chemin est correct

const Page = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen bg-slate-50 flex justify-center items-center animate-pulse duration-2000 ease-in-out">
          <img src="/logo.png" alt="logo" className="w-20 h-auto" />
        </div>
      }
    >
      <TestContent />
    </Suspense>
  );
};

export default Page;
