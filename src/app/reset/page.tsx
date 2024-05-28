"use client";

import Nav from "@/components/Nav";
import { sendPasswordReset } from "@/firebase/auth/authentification"; // Assurez-vous que le chemin est correct
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Définir les types pour les langues et le contenu
type Language = "FR" | "EN";

const Page = () => {
  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR");

  // État pour les champs de formulaire et les messages d'erreur
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

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
    setError("");
    setMessage("");
    if (!validateEmail(email)) {
      setError(
        selectedLang === "FR"
          ? "Adresse e-mail invalide."
          : "Invalid email address."
      );
      return;
    }

    try {
      await sendPasswordReset(email);
      setMessage(
        selectedLang === "FR"
          ? "Email de réinitialisation envoyé avec succès."
          : "Password reset email sent successfully."
      );
    } catch (err) {
      setError(
        selectedLang === "FR"
          ? "Erreur lors de l'envoi de l'email. Veuillez réessayer."
          : "Error sending email. Please try again."
      );
    }
  };

  const contentFr = () => {
    return (
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Réinitialisez votre mot de passe
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

              {error && (
                <div className="text-red-600 text-sm mt-2">{error}</div>
              )}

              {message && (
                <div className="text-green-600 text-sm mt-2">{message}</div>
              )}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-textBlue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-textBlue/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-textBlue"
                >
                  Envoyer
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
            Reset your password
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

              {error && (
                <div className="text-red-600 text-sm mt-2">{error}</div>
              )}

              {message && (
                <div className="text-green-600 text-sm mt-2">{message}</div>
              )}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-textBlue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-textBlue/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-textBlue"
                >
                  Reset password
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
