import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaymentMethodSchema } from "../../types/paymentMethodSelection.types";
import Confetti from "react-confetti";

const PaymentMethodDetails = ({ method }: { method: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(PaymentMethodSchema),
    mode: "onChange",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const onSubmit = (data: any) => {
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white dark:bg-gray-900">
        <Confetti />
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl max-w-md mx-auto p-6 text-center border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-green-600">
            Payment Successful!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Your payment details have been submitted successfully.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl max-w-md mx-auto border border-gray-200 dark:border-gray-700 space-y-4"
    >
      {method === "CARD" && (
        <div className="flex flex-col gap-2">
          <input
            {...register("cardNumber")}
            placeholder="Card Number"
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>
          )}
        </div>
      )}
      {method === "BANK_TRANSFER" && (
        <div className="flex flex-col gap-2">
          <input
            {...register("bankAccount")}
            placeholder="Bank Account"
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
          {errors.bankAccount && (
            <p className="text-red-500 text-sm">{errors.bankAccount.message}</p>
          )}
        </div>
      )}
      {method === "MOBILE_MONEY" && (
        <div className="flex flex-col gap-2">
          <input
            {...register("mobileNumber")}
            placeholder="Mobile Number"
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
          {errors.mobileNumber && (
            <p className="text-red-500 text-sm">
              {errors.mobileNumber.message}
            </p>
          )}
        </div>
      )}
      <button
        type="submit"
        className="w-full p-2 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        onClick={onSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default PaymentMethodDetails;
