"use client";

import Provider from "@/components/dashboard/ProviderDashboard";
import Settings from "@/components/dashboard/Settings";
import { RootState } from "@/redux/rootReducer";
import { useSelector } from "react-redux";

const Page = () => {
  const data = useSelector((state: RootState) => state.user);

  return (
    <Provider title="Settings">
      <Settings data={data} />
    </Provider>
  );
};

export default Page;
