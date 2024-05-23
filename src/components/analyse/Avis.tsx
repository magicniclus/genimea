"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CheckIcon, StarIcon } from "@heroicons/react/20/solid";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Define the types for the languages and content
type Language = "FR" | "EN";

const reviews = [
  {
    name: "John",
    comment: "This product exceeded my expectations. The quality is top-notch!",
    date: "May 1, 2023",
  },
  {
    name: "Emma",
    comment: "Fantastic service and very quick delivery. Highly recommended!",
    date: "April 20, 2023",
  },
  {
    name: "Michael",
    comment: "Great value for the price. Will definitely buy again.",
    date: "March 15, 2023",
  },
  {
    name: "Sophia",
    comment: "I am extremely satisfied with my purchase. Excellent quality!",
    date: "February 10, 2023",
  },
  {
    name: "William",
    comment: "The customer service was amazing and the product is great.",
    date: "January 5, 2023",
  },
  {
    name: "Olivia",
    comment: "Highly recommend this product. Five stars!",
    date: "December 30, 2022",
  },
  {
    name: "James",
    comment: "Very satisfied with my purchase. Will recommend to others.",
    date: "November 25, 2022",
  },
  {
    name: "Isabella",
    comment: "Exceeded my expectations in every way. Fantastic product!",
    date: "October 18, 2022",
  },
];

const Avis = () => {
  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR"); // Default to 'FR'

  useEffect(() => {
    const lang = searchParams.get("lang");
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  const contentFr = () => {
    return (
      <>
        <div className="flex mx-auto">
          <h2 className="font-bold text-slate-700">Excellent</h2>
          <div className="flex ml-2">
            <StarIcon className="w-5 h-5 text-yellow-500" />
            <StarIcon className="w-5 h-5 text-yellow-500" />
            <StarIcon className="w-5 h-5 text-yellow-500" />
            <StarIcon className="w-5 h-5 text-yellow-500" />
            <StarIcon className="w-5 h-5 text-slate-200" />
          </div>
          <p className="text-sm text-slate-500 ml-1">
            <span className="font-semibold text-slate-700">4,3</span> basé sur{" "}
            <span className="font-semibold text-slate-700">210</span> avis
          </p>
        </div>
        <div className="max-w-5xl w-full mx-auto rounded-xl flex flex-col items-center p-4 mt-3 px-5">
          <Carousel className="w-full max-w-5xl">
            <CarouselContent className="-ml-1">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4 bg-white border border-slate-200 rounded-md h-400 flex flex-col text-slate-700">
                    <div className="flex items-center mb-2">
                      <span className="font-semibold text-sm">
                        {review.name}
                      </span>
                      <div className="flex ml-2">
                        <StarIcon className="w-5 h-5 text-yellow" />
                        <StarIcon className="w-5 h-5 text-yellow" />
                        <StarIcon className="w-5 h-5 text-yellow" />
                        <StarIcon className="w-5 h-5 text-yellow" />
                        <StarIcon className="w-5 h-5 text-yellow" />
                      </div>
                    </div>
                    <p className="mb-2 flex text-xs text-slate-400 items-center p-1 w-max">
                      <CheckIcon className="w-3 h-3 text-green-500 mr-1" />
                      Avis vérifié
                    </p>
                    <p className="text-gray-700 mb-2 text-xs flex-grow">
                      {review.comment}
                    </p>
                    <p className="text-slate-400 text-xs mt-auto">
                      {review.date}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="w-full flex items-end justify-end mt-7">
            <div className="flex items-end">
              <div className="p-1 rounded-full bg-slate-700 flex justify-center items-center">
                <StarIcon className="w-4 h-4 text-white" />
              </div>
              <p className="font-bold text-sm text-slate-700 ml-1">
                REVIEWWWS<span className="text-xs font-normal">.com</span>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  const contentEn = () => {
    return (
      <>
        {" "}
        <div className="flex mx-auto">
          <h2 className="font-bold text-slate-700">Excellent</h2>
          <div className="flex ml-2">
            <StarIcon className="w-5 h-5 text-yellow" />
            <StarIcon className="w-5 h-5 text-yellow" />
            <StarIcon className="w-5 h-5 text-yellow" />
            <StarIcon className="w-5 h-5 text-yellow" />
            <StarIcon className="w-5 h-5 text-slate-200" />
          </div>
          <p className="text-sm text-slate-500 ml-1">
            <span className="font-semibold text-slate-700">4,3</span> based on{" "}
            <span className="font-semibold text-slate-700">210</span> reviews
          </p>
        </div>
        <div className="max-w-5xl w-full mx-auto rounded-xl flex flex-col items-center p-4 mt-3">
          <Carousel className="w-full max-w-5xl">
            <CarouselContent className="-ml-1">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4 bg-white border border-slate-200 rounded-md h-400 flex flex-col h-[200px] text-slate-700">
                    <div className="flex items-center mb-2">
                      <span className="font-semibold text-sm">
                        {review.name}
                      </span>
                      <div className="flex ml-2">
                        <StarIcon className="w-5 h-5 text-yellow" />
                        <StarIcon className="w-5 h-5 text-yellow" />
                        <StarIcon className="w-5 h-5 text-yellow" />
                        <StarIcon className="w-5 h-5 text-yellow" />
                        <StarIcon className="w-5 h-5 text-yellow" />
                      </div>
                    </div>
                    <p className="mb-2 flex text-xs text-slate-400 items-center p-1 w-max">
                      <CheckIcon className="w-3 h-3 text-green-500 mr-1" />
                      Verified Customer
                    </p>
                    <p className="text-gray-700 mb-2 text-xs flex-grow">
                      {review.comment}
                    </p>
                    <p className="text-slate-400 text-xs mt-auto">
                      {review.date}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="w-full flex items-end justify-end mt-7">
            <div className="flex items-end">
              <div className="p-1 rounded-full bg-slate-700 flex justify-center items-center">
                <StarIcon className="w-4 h-4 text-white" />
              </div>
              <p className="font-bold text-slate-700 ml-1">
                REVIEWWWS<span className="text-xs font-normal">.com</span>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <section className="w-full px-1 md:px-6 mt-2 flex flex-col items-center">
      {selectedLang === "FR" ? contentFr() : contentEn()}
    </section>
  );
};

export default Avis;
