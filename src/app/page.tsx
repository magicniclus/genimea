import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import Certificat from "@/components/Certificat";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import PointsImportants from "@/components/PointsImportants";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Banner />
      <Nav />
      <main className="relative">
        <div
          className="absolute inset-x-0 -top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#99D1E5] to-[#6B95AE] opacity-15"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>
        <Hero />
        <div className="relative">
          <div
            className="absolute inset-x-0  -top-54 z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#99D1E5] to-[#6B95AE] opacity-15"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            />
          </div>
          <div
            className="absolute inset-x-0 top-[60%] z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#99D1E5] to-[#6B95AE] opacity-20"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            />
          </div>
          <Cards />
          {/* <Header /> */}
          <PointsImportants />
          <FAQ />
          <Stats />
          <Certificat />
          {/* <PolarChart /> */}
          <Pricing />
        </div>
      </main>
    </>
  );
}
