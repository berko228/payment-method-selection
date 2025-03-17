import React, { forwardRef, useImperativeHandle, useState } from "react";
import { usePaymentMethods } from "../../hooks/usePaymentMethodSelection";
import { Radio } from "antd-mobile";

export interface PaymentMethodSelectionRef {
  getSelectedMethod: () => string | null;
}

const PaymentMethodSelection = forwardRef<PaymentMethodSelectionRef>(
  (_, ref) => {
    const { data: methods } = usePaymentMethods();
    const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

    useImperativeHandle(ref, () => ({
      getSelectedMethod: () => selectedMethod,
    }));

    return (
      <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl max-w-md mx-auto border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Select Payment Method
        </h2>
        <div className="space-y-3">
          {methods?.map((method) => (
            <div
              key={method.id}
              className={`flex items-center p-3 border rounded-lg cursor-pointer transition duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700 ${
                selectedMethod === method.id
                  ? "border-green-500 bg-gray-50 dark:bg-gray-700"
                  : "border-gray-300 dark:border-gray-600"
              }`}
              onClick={() => setSelectedMethod(method.id)}
            >
              <Radio.Group
                value={selectedMethod}
                onChange={(val) => setSelectedMethod(String(val))}
              >
                <Radio value={method.id} />
              </Radio.Group>
              <span className="ml-3 text-gray-800 dark:text-gray-300">
                {method.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

export default PaymentMethodSelection;
