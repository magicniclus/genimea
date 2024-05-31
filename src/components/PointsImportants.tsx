"use client";

/* eslint-disable @next/next/no-img-element */
import {
  BookOpenIcon,
  CubeTransparentIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

type Language = "FR" | "EN";

const avantageFr = [
  {
    name: "Mémoire",
    imageUrl: (
      <div className="w-28 h-28 flex justify-center items-center rounded-full border border-[7px] border-textBlue/60 ">
        <BookOpenIcon className="w-16 text-textBlue" />
      </div>
    ),
    bio: "Améliorez votre mémoire à court et à long terme grâce à nos exercices stimulants! Nos activités sont conçues pour stimuler diverses parties du cerveau, renforçant ainsi votre capacité à retenir et à rappeler des informations importantes. Que ce soit pour les tâches quotidiennes ou les défis académiques, améliorer votre mémoire peut vous aider à être plus efficace et plus performant dans toutes les sphères de votre vie.",
  },
  {
    name: "Spatialisation",
    imageUrl: (
      <div className="w-28 h-28 flex justify-center items-center rounded-full border border-[7px] border-textBlue/60 ">
        <CubeTransparentIcon className="w-16 text-textBlue" />
      </div>
    ),
    bio: "Développez vos compétences en visualisation spatiale et en orientation. Nos exercices vous aideront à mieux comprendre et naviguer dans l'espace qui vous entoure, en améliorant vos compétences en orientation et en navigation. Ces compétences sont essentielles non seulement pour des activités telles que la conduite et le sport, mais aussi pour des tâches quotidiennes comme organiser votre espace de travail ou trouver votre chemin dans une nouvelle ville.",
  },
  {
    name: "Logique",
    imageUrl: (
      <div className="w-28 h-28 flex justify-center items-center rounded-full border border-[7px] border-textBlue/60 ">
        <PuzzlePieceIcon className="w-16 text-textBlue" />
      </div>
    ),
    bio: "Renforcez votre capacité de raisonnement logique à travers des défis complexes. Nos exercices sont conçus pour stimuler votre pensée critique et votre capacité à résoudre des problèmes. En améliorant votre logique, vous serez mieux préparé à aborder des situations complexes et à trouver des solutions efficaces, que ce soit dans votre vie personnelle ou professionnelle.",
  },
  {
    name: "Réactivité",
    imageUrl: (
      <div className="w-28 h-28 flex justify-center items-center rounded-full border border-[7px] border-textBlue/60 ">
        <LightBulbIcon className="w-16 text-textBlue" />
      </div>
    ),
    bio: "Améliorez votre vitesse de réaction et votre prise de décision sous pression. Nos exercices sont conçus pour vous aider à réagir plus rapidement et de manière plus efficace dans des situations de haute pression. Que ce soit pour des activités sportives, des jeux vidéo, ou des situations de la vie réelle, une meilleure réactivité peut faire toute la différence.",
  },
];

const avantageEn = [
  {
    name: "Memory",
    imageUrl: (
      <div className="w-28 h-28 flex justify-center items-center rounded-full border border-[7px] border-textBlue/60 ">
        <BookOpenIcon className="w-16 text-textBlue" />
      </div>
    ),
    bio: "Enhance your short and long-term memory with our stimulating exercises! Our activities are designed to engage various parts of the brain, thereby strengthening your ability to retain and recall important information. Whether for daily tasks or academic challenges, improving your memory can help you become more efficient and effective in all aspects of your life.",
  },
  {
    name: "Spatialization",
    imageUrl: (
      <div className="w-28 h-28 flex justify-center items-center rounded-full border border-[7px] border-textBlue/60 ">
        <CubeTransparentIcon className="w-16 text-textBlue" />
      </div>
    ),
    bio: "Develop your spatial visualization and orientation skills. Our exercises will help you better understand and navigate the space around you, enhancing your skills in orientation and navigation. These skills are crucial not only for activities like driving and sports but also for daily tasks such as organizing your workspace or finding your way in a new city.",
  },
  {
    name: "Logic",
    imageUrl: (
      <div className="w-28 h-28 flex justify-center items-center rounded-full border border-[7px] border-textBlue/60 ">
        <PuzzlePieceIcon className="w-16 text-textBlue" />
      </div>
    ),
    bio: "Strengthen your logical reasoning ability through complex challenges. Our exercises are designed to stimulate your critical thinking and problem-solving skills. By improving your logic, you will be better prepared to tackle complex situations and find effective solutions, whether in your personal or professional life.",
  },
  {
    name: "Reactivity",
    imageUrl: (
      <div className="w-28 h-28 flex justify-center items-center rounded-full border border-[7px] border-textBlue/60 ">
        <LightBulbIcon className="w-16 text-textBlue" />
      </div>
    ),
    bio: "Improve your reaction speed and decision-making under pressure. Our exercises are designed to help you react more quickly and effectively in high-pressure situations. Whether for sports, video games, or real-life scenarios, better reactivity can make a significant difference.",
  },
];

const PointsImportants = () => {
  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR");

  useEffect(() => {
    const lang = searchParams?.get("lang");
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  const contentFr = () => {
    return (
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 px-4 xl:grid-cols-3">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ce que ce test évalue :
          </h2>
          <a
            href={"/test" + "?lang=FR"}
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
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-20 px-4 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What This Test Evaluates:
          </h2>
          <a
            href={"/test" + "?lang=EN"}
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
    <div className="bg-white py-24 md:py-32 lg:py-40" id="how">
      {selectedLang === "FR" ? contentFr() : contentEn()}
    </div>
  );
};

const WrapperComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PointsImportants />
    </Suspense>
  );
};

export default WrapperComponent;
