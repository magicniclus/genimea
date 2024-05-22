/* eslint-disable @next/next/no-img-element */
interface ContainerTestProps {
  step: number;
  setStep: (step: number) => void;
}

const ContainerTest: React.FC<ContainerTestProps> = ({ step, setStep }) => {
  const response = Array.from({ length: 6 }, (_, index) => index);
  const question = Array.from({ length: 6 }, (_, index) => index);

  const handleStepClick = (idx: number) => {
    setStep(step + 1);
  };

  return (
    <div className="w-full min-h-[300px] rounded-md mt-5 p-1 md:p-3 flex justify-between flex-col md:flex-row">
      <div className="w-full md:w-5/12">
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
              className="p-3 shadow-md bg-white rounded-md group min-w-[27%] h-20 mt-3 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer flex justify-center items-center hover:bg-backgroundBlue/50"
              onClick={handleStepClick.bind(null, idx)}
            >
              <img
                src={`/images/test/question${step}_answer${idx + 1}.svg`}
                alt="response"
                className="w-4/6 h-auto opacity-40 group-hover:opacity-100 transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContainerTest;
