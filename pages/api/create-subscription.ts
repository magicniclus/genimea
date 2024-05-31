/* eslint-disable import/no-anonymous-default-export */
// pages/api/create-subscription.ts

import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { email, paymentMethodId } = req.body;

  try {
    // Create customer
    const customer = await stripe.customers.create({
      email,
      payment_method: paymentMethodId,
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    });

    // Create initial payment of 1.99€
    const initialPaymentIntent = await stripe.paymentIntents.create({
      amount: 99, // 1.99€ in cents
      currency: "eur",
      customer: customer.id,
      payment_method: paymentMethodId,
      off_session: true,
      confirm: true,
    });

    if (initialPaymentIntent.status !== "succeeded") {
      throw new Error("Initial payment failed");
    }

    // Create subscription with 7-day trial period
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [
        {
          price: process.env.STRIPE_PRICE_ID_RECURRING as string, // The ID of the recurring price
          quantity: 1,
        },
      ],
      trial_period_days: 7,
      expand: ["latest_invoice.payment_intent"],
    });

    res.status(200).json(subscription);
  } catch (error) {
    console.error("Error creating subscription:", error);
    res.status(500).json({ error: (error as Error).message });
  }
};
