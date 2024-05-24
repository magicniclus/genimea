"use client";

import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const SubscriptionForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

      const response = await fetch("/api/create-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          paymentMethodId: paymentMethod.id,
        }),
      });

      if (!response.ok) {
        throw new Error("Error creating subscription");
      }

      const subscription = await response.json();
      console.log("Subscription successful!", subscription);
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

  return (
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
        className="w-full px-3 py-3 text-[#a0aec0] border rounded-md focus:outline-none focus:ring-none mb-5"
      />
      {/* <div className="w-[70%] h-0.5 bg-slate-200 mx-auto" /> */}
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
        disabled={!stripe || loading}
        className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 disabled:bg-indigo-300"
      >
        {loading ? "Processing..." : "START 7-DAY TRIAL"}
      </button>
    </form>
  );
};

export default SubscriptionForm;
