"use client";
import BarChart from "@/components/dashboard/BarChart";
import Provider from "@/components/dashboard/ProviderDashboard";
import Stats from "@/components/dashboard/Stats";
import PdfGenerator from "@/components/pdf/PdfGenerator";
import { RootState } from "@/redux/rootReducer";
import { useSelector } from "react-redux";

const Page = () => {
  const data = useSelector((state: RootState) => state.user);
  return (
    <Provider>
      <Stats data={data} />
      <BarChart data={data} />
      <PdfGenerator data={data} />
      <h3 className="mt-10 mb-4 text-base font-semibold leading-7 text-gray-900">
        Training
      </h3>
      <div className="flex items-center justify-center h-64 bg-blue-50 border border-blue-200 rounded-md shadow-md p-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">
            Training Section Under Maintenance
          </h3>
          <p className="mt-2 text-sm text-gray-700">
            We are currently making some exciting updates to this section. It
            will be available in a few days. Thank you for your patience!
          </p>
        </div>
      </div>
    </Provider>
  );
};

export default Page;
