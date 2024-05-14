"use client";

import {
  BookOpenIcon,
  CubeTransparentIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Define the types for the languages and content
type Language = "FR" | "EN";

const avantageFr = [
  {
    name: "Memoire",
    imageUrl: (
      <div className="w-28 h-28 flex justify-center items-center rounded-full border border-[7px] border-textBlue/60 ">
        <BookOpenIcon className="w-16 text-textBlue" />,
      </div>
    ),
    bio: "Our brain training games are developed in collaboration with field experts, including neuroscientists and cognitive psychologists. Together, we condensed our expertise, scientific literature, and research studies on the human brain into engaging exercises that advance cognitive function and promote brain health!",
  },
  {
    name: "Spacialisations",
    imageUrl: (
      <div className="w-28 h-28 flex justify-center items-center rounded-full border border-[7px] border-textBlue/60 ">
        <CubeTransparentIcon className="w-16 text-textBlue" />,
      </div>
    ),
    bio: "Our brain training games are developed in collaboration with field experts, including neuroscientists and cognitive psychologists. Together, we condensed our expertise, scientific literature, and research studies on the human brain into engaging exercises that advance cognitive function and promote brain health!",
  },
  {
    name: "Logique",
    imageUrl: (
      <div className="w-28 h-28 flex justify-center items-center rounded-full border border-[7px] border-textBlue/60 ">
        <PuzzlePieceIcon className="w-16 text-textBlue" />,
      </div>
    ),
    bio: "Our brain training games are developed in collaboration with field experts, including neuroscientists and cognitive psychologists. Together, we condensed our expertise, scientific literature, and research studies on the human brain into engaging exercises that advance cognitive function and promote brain health!",
  },
  {
    name: "Réactivité",
    imageUrl: (
      <div className="w-28 h-28 flex justify-center items-center rounded-full border border-[7px] border-textBlue/60 ">
        <LightBulbIcon className="w-16 text-textBlue" />,
      </div>
    ),
    bio: "Our brain training games are developed in collaboration with field experts, including neuroscientists and cognitive psychologists. Together, we condensed our expertise, scientific literature, and research studies on the human brain into engaging exercises that advance cognitive function and promote brain health!",
  },
];

const avantageEn = [
  {
    name: "Memoire",
    imageUrl: (
      <div className="w-28 h-28 flex justify-center items-center rounded-full border border-[7px] border-textBlue/60 ">
        <BookOpenIcon className="w-16 text-textBlue" />,
      </div>
    ),
    bio: "Our brain training games are developed in collaboration with field experts, including neuroscientists and cognitive psychologists. Together, we condensed our expertise, scientific literature, and research studies on the human brain into engaging exercises that advance cognitive function and promote brain health!",
  },
  {
    name: "Spacialisations",
    imageUrl: (
      <div className="w-28 h-28 flex justify-center items-center rounded-full border border-[7px] border-textBlue/60 ">
        <CubeTransparentIcon className="w-16 text-textBlue" />,
      </div>
    ),
    bio: "Our brain training games are developed in collaboration with field experts, including neuroscientists and cognitive psychologists. Together, we condensed our expertise, scientific literature, and research studies on the human brain into engaging exercises that advance cognitive function and promote brain health!",
  },
  {
    name: "Logique",
    imageUrl: (
      <div className="w-28 h-28 flex justify-center items-center rounded-full border border-[7px] border-textBlue/60 ">
        <PuzzlePieceIcon className="w-16 text-textBlue" />,
      </div>
    ),
    bio: "Our brain training games are developed in collaboration with field experts, including neuroscientists and cognitive psychologists. Together, we condensed our expertise, scientific literature, and research studies on the human brain into engaging exercises that advance cognitive function and promote brain health!",
  },
  {
    name: "Réactivité",
    imageUrl: (
      <div className="w-28 h-28 flex justify-center items-center rounded-full border border-[7px] border-textBlue/60 ">
        <LightBulbIcon className="w-16 text-textBlue" />,
      </div>
    ),
    bio: "Our brain training games are developed in collaboration with field experts, including neuroscientists and cognitive psychologists. Together, we condensed our expertise, scientific literature, and research studies on the human brain into engaging exercises that advance cognitive function and promote brain health!",
  },
];

const PointsImportants = () => {
  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR");

  useEffect(() => {
    const lang = searchParams.get("lang");
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  const contentFr = () => {
    return (
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ce que ce test évalue :
          </h2>
          <a
            href="/test"
            className="px-6 py-2 bg-textBlue rounded-md text-white text-2xl mt-7 hover:text-textBlue hover:bg-white hover:border hover:border-textBlue hover:border-2 transition duration-300 ease-in-out text-center md:text-start group flex max-w-[fit-content]"
          >
            {" "}
            Commencer le test{" "}
          </a>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            L&apos;objectif est de fournir une mesure quantifiée de
            l&apos;intelligence d&apos;une personne par rapport à son groupe
            d&apos;âge.
          </p>
        </div>
        <ul
          role="list"
          className="lg:pl-14 mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-1 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {avantageFr.map((avantage) => (
            <li key={avantage.name}>
              {avantage.imageUrl}
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                {avantage.name}
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {avantage.bio}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const contentEn = () => {
    return (
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What This Test Evaluates:
          </h2>
          <a
            href="/test"
            className="px-6 py-2 bg-textBlue rounded-md text-white text-2xl mt-7 hover:text-textBlue hover:bg-white hover:border hover:border-textBlue hover:border-2 transition duration-300 ease-in-out text-center md:text-start group flex max-w-[fit-content]"
          >
            {" "}
            Start the test{" "}
          </a>
          <p className="mt-6 text-lg leading-8 text-gray-600"></p>
        </div>
        <ul
          role="list"
          className="md:pl-14 mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {avantageEn.map((avantage) => (
            <li key={avantage.name}>
              {avantage.imageUrl}
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                {avantage.name}
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {avantage.bio}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <div className="bg-white py-24 md:py-32 lg:py-40">
      {selectedLang === "FR" ? contentFr() : contentEn()}
    </div>
  );
};

export default PointsImportants;
