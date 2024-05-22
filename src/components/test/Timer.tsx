"use client";

import { ClockIcon } from "@heroicons/react/20/solid";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

const Timer = ({
  onTimeChange,
}: {
  onTimeChange: (newTime: number) => void;
}) => {
  const [time, setTime] = useState(0); // Start at 0 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime + 1; // Increment the time by 1 second
        onTimeChange(newTime); // Pass the new time to the parent
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, [onTimeChange]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <header className="w-full">
      <div className="max-w-5xl mx-auto rounded-xl flex flex-row items-center justify-between p-6 lg:px-8">
        <div className="-m-1.5 p-1.5 flex items-center">
          <span className="sr-only">Genimea</span>
          <img className="h-8 w-auto" src="./logo.png" alt="logo" />
          <span className="text-slate-700 text-xl font-bold ml-1">Genimea</span>
        </div>
        <div className="flex items-center px-2 py-0.5 rounded-full bg-backgroundBlue/50">
          <ClockIcon className="h-5 w-5 text-slate-700 mr-1" />
          <p className="text-lg text-slate-700">{formatTime(time)}</p>
        </div>
      </div>
    </header>
  );
};

export default Timer;
