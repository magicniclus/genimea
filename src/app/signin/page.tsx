"use client";

import Nav from "@/components/Nav";
import { signInWithEmailPassword } from "@/firebase/auth/authentification"; // Assurez-vous que le chemin est correct
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Définir les types pour les langues et le contenu
type Language = "FR" | "EN";

const Page = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR");

  // État pour les champs de formulaire et les messages d'erreur
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Update the language state based on URL search parameters
  useEffect(() => {
    const lang = searchParams?.get("lang");
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError(
        selectedLang === "FR"
          ? "Adresse e-mail invalide."
          : "Invalid email address."
      );
      return;
    }

    try {
      await signInWithEmailPassword(email, password);
      router.push("/dashboard");
      // Redirigez ou effectuez d'autres actions après la connexion réussie
    } catch (err) {
      setError(
        selectedLang === "FR"
          ? "Erreur de connexion. Veuillez vérifier vos informations."
          : "Login error. Please check your credentials."
      );
    }
  };

  const contentFr = () => {
    return (
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Connectez-vous à votre compte
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit} method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Adresse e-mail
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-textBlue sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mot de passe
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-textBlue sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-600 text-sm mt-2">{error}</div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-textBlue focus:ring-textBlue"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm leading-6 text-gray-900"
                  >
                    Se souvenir de moi
                  </label>
                </div>

                <div className="text-sm leading-6">
                  <a
                    href={
                      "/reset" +
                      (selectedLang === "FR" ? "?lang=FR" : "?lang=EN")
                    }
                    className="font-semibold text-textBlue hover:text-textBlue/70"
                  >
                    Mot de passe oublié ?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-textBlue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-textBlue"
                >
                  Se connecter
                </button>
              </div>
            </form>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Pas encore membre ?{" "}
            <a
              href={
                "/start" + (selectedLang === "FR" ? "?lang=FR" : "?lang=EN")
              }
              className="font-semibold leading-6 text-textBlue hover:text-textBlue/70"
            >
              Commencez
            </a>
          </p>
        </div>
      </div>
    );
  };

  const contentEn = () => {
    return (
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit} method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-textBlue sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-textBlue sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-600 text-sm mt-2">{error}</div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-textBlue focus:ring-textBlue"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm leading-6 text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm leading-6">
                  <a
                    href={
                      "/reset" +
                      (selectedLang === "FR" ? "?lang=FR" : "?lang=EN")
                    }
                    className="font-semibold text-textBlue hover:text-textBlue/70"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-textBlue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-textBlue/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-textBlue"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href={
                "/start" + (selectedLang === "FR" ? "?lang=FR" : "?lang=EN")
              }
              className="font-semibold leading-6 text-textBlue hover:text-textBlue/70"
            >
              Start
            </a>
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <Nav />
      {selectedLang === "FR" ? contentFr() : contentEn()}
    </>
  );
};

export default Page;
