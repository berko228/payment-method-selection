"use client";
import { useRef, useState } from "react";
import PaymentMethodSelection, {
  PaymentMethodSelectionRef,
} from "@/features/payment-method-selection/ui/components/PaymentMethodSelection";
import PaymentMethodDetails from "@/features/payment-method-selection/ui/components/PaymentMethodDetails";

export default function Home() {
  const ref = useRef<PaymentMethodSelectionRef>(null);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
        {!selectedMethod && <PaymentMethodSelection ref={ref} />}
        {selectedMethod && <PaymentMethodDetails method={selectedMethod} />}
      </div>
      <div className="mt-6 flex gap-4">
        {selectedMethod && (
          <button
            onClick={() => setSelectedMethod(null)}
            className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-600 transition"
          >
            Back
          </button>
        )}
        <button
          onClick={() =>
            setSelectedMethod(ref.current?.getSelectedMethod() || null)
          }
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
