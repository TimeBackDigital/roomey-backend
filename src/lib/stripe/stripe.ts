import Stripe from "stripe";
import { appConfig } from "../../config/app-config";

export const stripe = new Stripe(appConfig.STRIPE_SECRET_KEY, {
  apiVersion: "2025-07-30.basil",
});
