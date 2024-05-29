"use client";

import { createUserWithEmailPassword } from "@/firebase/auth/authentification";
import {
  addUserToNewPath,
  removeUserFromPath,
} from "@/firebase/database/database";
import { setUserId } from "@/redux/addProspect";
import { RootState } from "@/redux/store";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Définir les types pour les langues et le contenu
type Language = "FR" | "EN";

type SubscriptionFormProps = {
  semail?: string;
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ semail }) => {
  const dispatch = useDispatch();
  const userEmail = useSelector(
    (state: RootState) => state.admin.prospect.email
  );
  const userId = useSelector((state: RootState) => state.admin.prospect.userId);
  const user = useSelector((state: RootState) => state.admin.prospect);

  const router = useRouter();

  const searchParams = useSearchParams();
  const [selectedLang, setSelectedLang] = useState<Language>("FR");

  useEffect(() => {
    const lang = searchParams?.get("lang");
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState(semail || "");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateRandomPassword = (length: number) => {
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Generate random password
    const randomPassword = generateRandomPassword(12);
    console.log("Generated password:", randomPassword);

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const cardElement = elements.getElement(CardNumberElement);

    if (!cardElement) {
      setError("Card element not found");
      setLoading(false);
      return;
    }

    try {
      const { paymentMethod, error: paymentMethodError } =
        await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
        });

      if (paymentMethodError || !paymentMethod) {
        throw new Error(
          paymentMethodError?.message || "Failed to create payment method"
        );
      }

      const subscriptionResponse = await fetch("/api/create-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          paymentMethodId: paymentMethod.id,
        }),
      });

      if (!subscriptionResponse.ok) {
        throw new Error("Error creating subscription");
      }

      const subscription = await subscriptionResponse.json();
      console.log("API response:", subscription); // Log the response

      // Check if subscription.id exists
      if (!subscription.id) {
        throw new Error("Stripe subscription ID is undefined");
      }

      console.log("Subscription successful!", subscription);

      // Send email with credentials
      const emailResponse = await fetch("/api/sendIdentifiant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          motDePasse: randomPassword,
        }),
      });

      if (!emailResponse.ok) {
        throw new Error("Error sending email");
      }

      const emailResult = await emailResponse.json();
      console.log("Email API response:", emailResult);

      // Create user in Firebase Authentication
      const firebaseUser = await createUserWithEmailPassword(
        email,
        randomPassword
      );
      console.log("User created in Firebase Auth:", firebaseUser);

      // Additional logic for Firebase operations
      if (userEmail) {
        const clientPath = `client/${(firebaseUser as any).uid}`;
        const stripeSubscriptionId = subscription.id;

        if (stripeSubscriptionId) {
          try {
            await addUserToNewPath(
              { ...user, stripeSubscriptionId },
              clientPath
            );
            console.log("User added to client path:", clientPath);
            await removeUserFromPath(`prospect/${userId}`);
            console.log(
              "User removed from prospect path:",
              `prospect/${userId}`
            );

            dispatch(setUserId(clientPath));
            router.push(
              "/dashboard" + (selectedLang === "EN" ? "/?lang=EN" : "/?lang=FR")
            );
          } catch (firebaseError) {
            console.error("Firebase operation error: ", firebaseError);
          }
        } else {
          console.error("Stripe subscription ID is undefined.");
        }
      } else {
        router.push("/" + (selectedLang === "EN" ? "?lang=EN" : "?lang=FR"));
      }
    } catch (error: any) {
      setError(error.message);
      console.error("Error:", error);
    }

    setLoading(false);
  };
  const elementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#32325d",
        "::placeholder": {
          color: "#a0aec0",
        },
        iconStyle: "solid",
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
    hideIcon: false,
  };

  const contentFr = () => (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <label
        htmlFor="cardNumber"
        className="block text-sm font-medium text-gray-700"
      >
        Email utilisateur
      </label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-3 py-3 text-slate-700 border rounded-md focus:outline-none focus:ring-none mb-5"
      />
      <div className="space-y-2">
        <label
          htmlFor="cardNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Numéro de carte
        </label>
        <CardNumberElement
          id="cardNumber"
          options={elementOptions}
          className="w-full p-3 border rounded-md"
        />
      </div>
      <div className="flex md:space-x-4 flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <label
            htmlFor="cardExpiry"
            className="block text-sm font-medium text-gray-700"
          >
            Date d&apos;expiration (MM/AA)
          </label>
          <CardExpiryElement
            id="cardExpiry"
            options={elementOptions}
            className="w-full p-3 border rounded-md"
          />
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <label
            htmlFor="cardCvc"
            className="block text-sm font-medium text-gray-700"
          >
            CVC
          </label>
          <CardCvcElement
            id="cardCvc"
            options={elementOptions}
            className="w-full p-3 border rounded-md"
          />
        </div>
      </div>
      {error && <div className="text-red text-xs">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || loading || !userEmail || !userId}
        className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 disabled:bg-indigo-300"
      >
        {loading ? "Traitement..." : "COMMENCEZ L'ESSAI DE 7 JOURS"}
      </button>
    </form>
  );

  const contentEn = () => (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <label
        htmlFor="cardNumber"
        className="block text-sm font-medium text-gray-700"
      >
        User Email
      </label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-3 py-3 text-slate-700 border rounded-md focus:outline-none focus:ring-none mb-5"
      />
      <div className="space-y-2">
        <label
          htmlFor="cardNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Card Number
        </label>
        <CardNumberElement
          id="cardNumber"
          options={elementOptions}
          className="w-full p-3 border rounded-md"
        />
      </div>
      <div className="flex md:space-x-4 flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <label
            htmlFor="cardExpiry"
            className="block text-sm font-medium text-gray-700"
          >
            Expiration Date (MM/YY)
          </label>
          <CardExpiryElement
            id="cardExpiry"
            options={elementOptions}
            className="w-full p-3 border rounded-md"
          />
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <label
            htmlFor="cardCvc"
            className="block text-sm font-medium text-gray-700"
          >
            CVC
          </label>
          <CardCvcElement
            id="cardCvc"
            options={elementOptions}
            className="w-full p-3 border rounded-md"
          />
        </div>
      </div>
      {error && <div className="text-red text-xs">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || loading || !userEmail || !userId}
        className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 disabled:bg-indigo-300"
      >
        {loading ? "Processing..." : "START 7-DAY TRIAL"}
      </button>
    </form>
  );

  return <>{selectedLang === "FR" ? contentFr() : contentEn()}</>;
};

export default SubscriptionForm;
