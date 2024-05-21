interface StepBarProps {
  step: number;
  totalStep: number;
}

const StepBar: React.FC<StepBarProps> = ({ step, totalStep }) => {
  const widthPercentage = (step / totalStep) * 100;

  return (
    <section className="w-full mt-2  px-4 md:px-6">
      <div className="max-w-5xl mx-auto rounded-xl flex items-center justify-between w-full h-2.5 p-1.5 bg-slate-100 rounded-full">
        <div
          className="h-1 bg-textBlue rounded-full transition-all duration-1000 ease-in-out"
          style={{ width: `${widthPercentage}%` }}
        ></div>
      </div>
    </section>
  );
};

export default StepBar;
