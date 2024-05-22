interface StepCardsProps {
  totalStep: number;
  step: number;
  setStep: (step: number) => void;
}

const StepCards: React.FC<StepCardsProps> = ({ totalStep, step, setStep }) => {
  // Créez un tableau vide de la longueur de totalStep et utilisez .map pour itérer
  const stepsArray = Array.from({ length: totalStep }, (_, index) => index);

  const handleStepClick = (idx: number) => {
    if (idx + 1 < step) {
      setStep(idx + 1);
    }
  };

  return (
    <section className="w-full mt-2 px-4 md:px-6 mt-2 sm:block hidden">
      <div className="max-w-5xl mx-auto w-full rounded-md p-1.5 flex">
        <div className=" flex items-center flex-wrap justify-start mx-auto">
          {stepsArray.map((_, idx) => (
            <div
              onClick={handleStepClick.bind(null, idx)}
              key={idx + 1}
              className={`h-auto min-w-[40px] w-[4%] mt-3 mr-2 ${
                idx + 1 < step && "cursor-pointer"
              } bg-${
                _ + 1 > step
                  ? "slate-200 text-slate-700"
                  : "textBlue text-white "
              } rounded-md transition-all duration-300 ease-in-out flex justify-center items-center transition-all duration-1000 ease-in-out`}
            >
              {_ + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepCards;
