interface StepCardsProps {
  totalStep: number;
  step: number;
}

const StepCards: React.FC<StepCardsProps> = ({ totalStep, step }) => {
  // Créez un tableau vide de la longueur de totalStep et utilisez .map pour itérer
  const stepsArray = Array.from({ length: totalStep }, (_, index) => index);

  return (
    <section className="w-full mt-2 px-4 md:px-6 mt-2 sm:block hidden">
      <div className="max-w-5xl mx-auto w-full rounded-xl p-1.5 flex">
        <div className=" flex items-center flex-wrap justify-start mx-auto">
          {stepsArray.map((_, idx) => (
            <div
              key={idx + 1}
              className={`h-auto min-w-[40px] w-[4%] mt-3 mr-2 bg-${
                _ + 1 > step
                  ? "slate-200 text-slate-700"
                  : "textBlue text-white "
              } rounded-full transition-all duration-300 ease-in-out flex justify-center items-center transition-all duration-1000 ease-in-out`}
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
