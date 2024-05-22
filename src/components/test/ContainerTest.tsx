"use client";

import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
interface ContainerTestProps {
  step: number;
  setStep: (step: number) => void;
}

// Définir le type indexable pour addResponse
interface ResponseMap {
  [key: number]: string | null;
}

const ContainerTest: React.FC<ContainerTestProps> = ({ step, setStep }) => {
  const response = Array.from({ length: 6 }, (_, index) => index);
  const question = Array.from({ length: 6 }, (_, index) => index);

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

  const handleStepClick = (idx: number) => {
    setAddResponse({ ...addResponse, [step]: translateIdxIntoLetter(idx) });
    setStep(step + 1);
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
          Choose your answer:
        </h2>
        <div className="w-full flex flex-wrap justify-between md:justify-around h-[100%]">
          {response.map((_, idx) => (
            <div
              key={idx}
              className="p-3 shadow-md bg-white rounded-md group min-w-[30%] h-20 mt-3 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer flex justify-center items-center hover:bg-backgroundBlue/50"
              onClick={handleStepClick.bind(null, idx)}
            >
              <img
                src={`/images/test/question${step}_answer${idx + 1}.svg`}
                alt="response"
                className="w-4/6 h-auto opacity-60 group-hover:opacity-100 transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContainerTest;
