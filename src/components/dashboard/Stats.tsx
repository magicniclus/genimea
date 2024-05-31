import { UserState } from "@/redux/dataUserManager";

interface SettingsProps {
  data: UserState;
}

const Stats: React.FC<SettingsProps> = ({ data }) => {
  const formatTimeInSeconds = (timeInSeconds: number) => {
    return (timeInSeconds / 60).toFixed(2) + " minutes";
  };

  return (
    <div className="mt-10">
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        Last IQ test
      </h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 bg-blue-50">
          <dt className="truncate text-sm font-medium text-gray-500">IQ</dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {data.userIQ}
          </dd>
        </div>
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6  bg-green-50">
          <dt className="truncate text-sm font-medium text-gray-500">
            Total time
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {data.timer && formatTimeInSeconds(data.timer)}
          </dd>
        </div>
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 bg-orange-50">
          <dt className="truncate text-sm font-medium text-gray-500">
            Average time per question
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {data.timer && formatTimeInSeconds(data.timer / 20)}
          </dd>
        </div>
      </dl>
      <div className="mt-5 text-xs">
        <p className="text-gray-700">
          These calculations are based on a real IQ test, considering your
          results, the total time taken, and your behavior during the test. The
          IQ score is derived using standard testing methodologies, while the
          total time and average time per question reflect your response speed
          and efficiency. This analysis provides a detailed insight into your
          cognitive abilities, helping to identify strengths and areas for
          improvement, which is crucial for personal development and cognitive
          enhancement strategies.
        </p>
      </div>
    </div>
  );
};

export default Stats;
