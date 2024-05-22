"use client";

import Container from "@/components/test/Container";
import ContainerTest from "@/components/test/ContainerTest";
import StepBar from "@/components/test/StepBar";
import StepCards from "@/components/test/StepCards";
import Timer from "@/components/test/Timer";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Define the types for the languages and content
type Language = "FR" | "EN";

interface Question {
  img: string;
  options: string[];
  answer: number;
}

const Page = () => {
  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR"); // Default to 'FR'

  useEffect(() => {
    const lang = searchParams.get("lang");
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  const [step, setStep] = useState(1);
  const [totalStep, setTotalStep] = useState(20);
  const [remainingTime, setRemainingTime] = useState(20 * 60);
  const [reponseValue, setReponseValue] = useState<{
    [key: string]: Question;
  }>({
    question1: {
      img: "/images/test/question1/Question 1.png",
      options: [
        "/images/test/question1/option1.png",
        "/images/test/question1/option2.png",
        "/images/test/question1/option3.png",
        "/images/test/question1/option4.png",
      ],
      answer: 1,
    },
    question2: {
      img: "/images/test/question2/question2.png",
      options: [
        "/images/test/question2/option1.png",
        "/images/test/question2/option2.png",
        "/images/test/question2/option3.png",
        "/images/test/question2/option4.png",
      ],
      answer: 1,
    },
    question3: {
      img: "/images/test/question3/question3.png",
      options: [
        "/images/test/question3/option1.png",
        "/images/test/question3/option2.png",
        "/images/test/question3/option3.png",
        "/images/test/question3/option4.png",
      ],
      answer: 1,
    },
    question4: {
      img: "/images/test/question4/question4.png",
      options: [
        "/images/test/question4/option1.png",
        "/images/test/question4/option2.png",
        "/images/test/question4/option3.png",
        "/images/test/question4/option4.png",
      ],
      answer: 1,
    },
  });

  const handleTimeChange = (newTime: number) => {
    setRemainingTime(newTime);
  };

  const contentFr = () => {
    return (
      <Container>
        <h1 className="font-bold text-slate-700">TEST QI</h1>
        <ContainerTest></ContainerTest>
        <div className="w-full flex justify-end mt-5">
          <button
            type="button"
            className="py-1 px-4 bg-textBlue text-white rounded-lg shadow-md"
            onClick={() => setStep(step + 1)}
          >
            {step === totalStep ? "Soumettre" : "Suivant"}
          </button>
        </div>
      </Container>
    );
  };

  const contentEn = () => {
    return (
      <Container>
        <h1 className="font-bold text-slate-700">IQ TEST</h1>
        <ContainerTest></ContainerTest>
        <div className="w-full flex justify-end mt-5">
          <button
            type="button"
            className="py-1 px-4 bg-textBlue text-white rounded-lg shadow-md"
            onClick={() => setStep(step + 1)}
          >
            {step === totalStep ? "Submit" : "Next"}
          </button>
        </div>
      </Container>
    );
  };

  return (
    <>
      <Timer onTimeChange={handleTimeChange} />
      <main className="relative">
        <StepBar step={step} totalStep={totalStep} />
        {selectedLang === "FR" ? contentFr() : contentEn()}
        <StepCards totalStep={totalStep} setStep={setStep} step={step} />
      </main>
    </>
  );
};

export default Page;
