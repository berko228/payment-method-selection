import { z } from "zod";

export const PaymentMethodSchema = z.object({
  type: z.enum(["CARD", "BANK_TRANSFER", "MOBILE_MONEY"]),
  cardNumber: z
    .string()
    .min(16, { message: "Card number must be exactly 16 digits" })
    .max(16, { message: "Card number must be exactly 16 digits" })
    .optional()
    .transform((val) => (val ? Number(val) : undefined)),
  bankAccount: z
    .string()
    .min(6, { message: "Bank account number must be at least 6 digits" })
    .optional()
    .transform((val) => (val ? Number(val) : undefined)),
  mobileNumber: z
    .string()
    .min(10, { message: "Mobile number must be at least 10 digits" })
    .optional()
    .transform((val) => (val ? Number(val) : undefined))
});

export type PaymentMethod = z.infer<typeof PaymentMethodSchema>;