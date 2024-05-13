"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Define the types for the languages and content
type Language = "FR" | "EN";

const faqsFr = [
  {
    id: 1,
    question: "Qu'est-ce qui est inclus dans votre test de QI en ligne ?",
    answer:
      "Notre test de QI en ligne offre une évaluation complète de votre intelligence en se basant sur des normes ajustées selon le groupe d'âge. Il est conçu pour mesurer divers aspects de l'intelligence, incluant la logique, la compréhension verbale et les compétences spatiales.",
  },
  {
    id: 2,
    question: "Comment puis-je accéder au test après mon inscription ?",
    answer:
      "Après une période d'essai de deux jours, vous pourrez accéder au test depuis votre tableau de bord personnel. Le test peut être réalisé à votre propre rythme.",
  },
  {
    id: 3,
    question: "Combien de temps faut-il pour compléter le test ?",
    answer:
      "La durée moyenne du test est de 20 minutes, mais cela peut varier légèrement en fonction de votre rythme de réponse aux questions.",
  },
  {
    id: 4,
    question: "Comment puis-je recevoir mes résultats ?",
    answer:
      "Les résultats sont générés instantanément après la fin du test et sont accessibles via votre compte. Vous recevrez également un rapport détaillé par email.",
  },
  {
    id: 5,
    question: "Le test peut-il être repris plusieurs fois ?",
    answer:
      "Le test peut être repris à tout moment pendant votre abonnement mensuel.",
  },
  {
    id: 6,
    question: "Que faire si j'ai des problèmes techniques durant le test ?",
    answer:
      "En cas de problème technique, vous pouvez contacter notre support clientèle disponible 24/7 pour obtenir de l'aide immédiate.",
  },
  // Plus de questions...
];

const faqsEn = [
  {
    id: 1,
    question: "What is included in your online IQ test?",
    answer:
      "Our online IQ test provides a comprehensive assessment of your intelligence based on age-adjusted norms. It is designed to measure various aspects of intelligence including logical reasoning, verbal comprehension, and spatial skills.",
  },
  {
    id: 2,
    question: "How can I access the test after signing up?",
    answer:
      "Following a two-day trial period, you can access the test from your personal dashboard. The test can be taken at your own pace.",
  },
  {
    id: 3,
    question: "How long does it take to complete the test?",
    answer:
      "The average time to complete the test is 20 minutes, but this can vary slightly depending on how quickly you respond to the questions.",
  },
  {
    id: 4,
    question: "How will I receive my results?",
    answer:
      "Results are generated instantly after completing the test and can be accessed through your account on the site. You will also receive a detailed report via email.",
  },
  {
    id: 5,
    question: "Can the test be retaken?",
    answer:
      "The test can be retaken at any time during your monthly subscription.",
  },
  {
    id: 6,
    question:
      "What should I do if I encounter technical problems during the test?",
    answer:
      "If you experience technical issues, you can contact our 24/7 customer support for immediate assistance.",
  },
  // More questions...
];

const FAQ = () => {
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
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            F.A.Q
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Nous répondons à vos questions les plus fréquentes. Vous avez une
            autre question et ne trouvez pas la réponse que vous cherchez ?
            Contactez notre équipe de support en{" "}
            <a
              href="mailto:support@genimea.com"
              className="font-semibold text-textBlue hover:text-textBlue"
            >
              nous adressant un email,
            </a>{" "}
            et nous vous répondrons dans les 24 heures.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            {faqsFr.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    );
  };

  const contentEn = () => {
    return (
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            We answer your most frequent questions. Do you have another question
            and can&apos;t find the answer you&apos;re looking for? Please
            contact our support team{" "}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              by sending us an email,
            </a>{" "}
            and we will respond within 24 hours.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            {faqsEn.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white">
      {selectedLang === "FR" ? contentFr() : contentEn()}
    </div>
  );
};

export default FAQ;
