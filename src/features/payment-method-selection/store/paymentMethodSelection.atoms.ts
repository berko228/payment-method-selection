import { atom } from "jotai";
import { atomWithMutation } from "jotai-tanstack-query";
import { PaymentMethod } from "../types/paymentMethodSelection.types";

export const selectedPaymentMethodAtom = atom<PaymentMethod | null>(null);

export const submitPaymentMethodAtom = atomWithMutation((get) => ({
  mutationKey: ["submitPaymentMethod"],
  mutationFn: async (paymentMethod: PaymentMethod) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock API delay
    return { success: true, message: "Payment method saved" };
  },
}));
