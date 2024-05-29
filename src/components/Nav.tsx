"use client";

/* eslint-disable @next/next/no-img-element */
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import LanguageSelect from "./buttons/LanguageSelect";

// Define the types for the languages and content
type Language = "FR" | "EN";
interface Content {
  espace: string;
  navigation: { name: string; href: string }[];
}

const content: Record<Language, Content> = {
  FR: {
    espace: "Mon Espace",
    navigation: [
      { name: "Comment ça marche", href: "#how" },
      { name: "Faits intéressants", href: "#interesting" },
      { name: "FAQ", href: "#FAQ" },
    ],
  },
  EN: {
    espace: "My Space",
    navigation: [
      { name: "How It Works", href: "#how" },
      { name: "Interesting Facts", href: "#interesting" },
      { name: "FAQ", href: "#FAQ" },
    ],
  },
};

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR"); // Default to 'FR'

  // Update the language state based on URL search parameters
  useEffect(() => {
    const lang = searchParams?.get("lang");
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-textBlue">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <a
          href={"/" + (selectedLang === "FR" ? "?lang=FR" : "")}
          className="-m-1.5 p-1.5 flex items-center"
        >
          <span className="sr-only">Genimea</span>
          <img className="h-8 w-auto" src="./logoWhite.png" alt="logo" />
          <span className="text-white text-xl font-bold ml-1">Genimea</span>
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {content[selectedLang].navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-sm font-semibold leading-6 text-white"
            >
              {item.name}
            </a>
          ))}
          <LanguageSelect />
          <a
            href={"/signin" + (selectedLang === "FR" ? "?lang=FR" : "?lang=EN")}
            className="text-sm font-semibold leading-6 text-white px-2 border border-white rounded-md"
          >
            {content[selectedLang].espace}
          </a>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 " />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-textBlue">
          <div className="flex items-center justify-between">
            <a
              href={"/" + (selectedLang === "FR" ? "?lang=FR" : "")}
              className="-m-1.5 p-1.5 flex items-center"
            >
              <span className="sr-only">Genimea</span>
              <img className="h-8 w-auto" src="./logoWhite.png" alt="logo" />
              <span className="text-white text-xl font-bold ml-2">Genimea</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-white">
              <div className="space-y-2 py-6">
                {content[selectedLang].navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleScroll(e, item.href);
                      setMobileMenuOpen(false);
                    }}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-textBlue/70"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href={
                    "/signin" +
                    (selectedLang === "FR" ? "?lang=FR" : "?lang=EN")
                  }
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-textBlue/70"
                >
                  {content[selectedLang].espace}
                </a>
                <LanguageSelect />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Nav;
