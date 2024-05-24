"use client";

import SubscriptionForm from "@/components/stripe/SubscriptionForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const page = () => {
  return (
    <div>
      <h1>Resultat</h1>
      <Elements stripe={stripePromise}>
        <SubscriptionForm />
      </Elements>
    </div>
  );
};

export default page;
