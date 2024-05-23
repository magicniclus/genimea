import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
interface ContainerTestProps {
  step: number;
  setStep: (step: number) => void;
  addResponse: { [key: number]: string | null };
  setAddResponse: React.Dispatch<
    React.SetStateAction<{ [key: number]: string | null }>
  >;
}

// Define the types for the languages and content
type Language = "FR" | "EN";

const ContainerTest: React.FC<ContainerTestProps> = ({
  step,
  setStep,
  addResponse,
  setAddResponse,
}) => {
  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR"); // Default to 'FR'

  useEffect(() => {
    const lang = searchParams.get("lang");
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  const response = Array.from({ length: 6 }, (_, index) => index);

  const handleStepClick = (idx: number) => {
    setAddResponse({ ...addResponse, [step]: translateIdxIntoLetter(idx) });
    if (step < 20) {
      setStep(step + 1);
    }
  };

  const translateIdxIntoLetter = (idx: number) => {
    switch (idx) {
      case 0:
        return "A";
      case 1:
        return "B";
      case 2:
        return "C";
      case 3:
        return "D";
      case 4:
        return "E";
      case 5:
        return "F";
      default:
        return "A";
    }
  };

  useEffect(() => {
    console.log(addResponse);
  }, [addResponse]);

  return (
    <div className="w-full min-h-[300px] rounded-md mt-5 p-1 md:p-3 flex justify-between flex-col md:flex-row">
      <div className="w-full md:w-5/12 shadow-md rounded-md p-1">
        <img
          src={`/images/test/question${step}.svg`}
          alt="question"
          className="w-full h-auto"
        />
      </div>
      <div className="w-full h-[100%] md:w-6/12 flex flex-col items-center">
        <h2 className="text-slate-700 mb-5 mt-7 md:mt-0">
          {selectedLang === "FR"
            ? "Choisissez votre réponse:"
            : "Choose your answer:"}
        </h2>
        <div className="w-full flex flex-wrap justify-between md:justify-around h-[100%]">
          {response.map((_, idx) => (
            <div
              key={idx}
              className={`p-3 shadow-md rounded-md group min-w-[30%] h-20 mt-3 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer flex justify-center items-center ${
                translateIdxIntoLetter(idx) === addResponse[step]
                  ? "bg-backgroundBlue bg-opacity-50"
                  : "bg-white hover:bg-backgroundBlue/50"
              }`}
              onClick={() => handleStepClick(idx)}
            >
              <img
                src={`/images/test/question${step}_answer${idx + 1}.svg`}
                alt="response"
                className={`w-4/6 h-auto group-hover:opacity-100 transition-all duration-300 ease-in-out ${
                  translateIdxIntoLetter(idx) === addResponse[step]
                    ? "opacity-100"
                    : "opacity-60"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContainerTest;
