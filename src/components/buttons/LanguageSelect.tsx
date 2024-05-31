/* eslint-disable react-hooks/exhaustive-deps */
// Importing necessary hooks and components
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const LanguageSelect = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const langues = {
    FR: "Français",
    EN: "English",
  };

  // Detect browser language or default to 'FR'
  const detectLanguage = () => {
    if (typeof window !== "undefined") {
      const browserLang = navigator.language.slice(0, 2).toUpperCase();
      return langues.hasOwnProperty(browserLang) ? browserLang : "FR";
    }
    return "FR";
  };

  // Initializing the selected language state
  const [selectedLang, setSelectedLang] = useState(
    searchParams?.get("lang") || detectLanguage()
  );

  useEffect(() => {
    // Automatically update the URL with detected language if not set
    if (!searchParams?.has("lang")) {
      const initialLang = detectLanguage();
      const newQuery = createQueryString("lang", initialLang);
      router.push(`${pathname}?${newQuery}`); // Remove the third argument
    }
  }, []); // Runs only once after the component mounts

  // Handling language change
  const handleLanguageChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const newLang = event.target.value;
      setSelectedLang(newLang); // Update local state

      const newQuery = createQueryString("lang", newLang);
      router.push(`${pathname}?${newQuery}`); // Update the URL
    },
    [pathname, router]
  );

  // Create a query string for the URL
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams?.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex items-center">
      <GlobeAltIcon className="h-5 w-5 text-white" />
      <select
        className="bg-textBlue text-white cursor-pointer"
        value={selectedLang}
        onChange={handleLanguageChange} // Use the handler function
      >
        {Object.entries(langues).map(([code, langue], index) => (
          <option key={index} value={code}>
            {langue}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelect;
