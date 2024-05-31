/* eslint-disable import/no-anonymous-default-export */

import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { subscriptionId } = req.body;

  try {
    // Cancel the subscription
    const deletedSubscription = await stripe.subscriptions.cancel(
      subscriptionId
    );

    res.status(200).json(deletedSubscription);
  } catch (error) {
    console.error("Error cancelling subscription:", error);
    res.status(500).json({ error: (error as Error).message });
  }
};
