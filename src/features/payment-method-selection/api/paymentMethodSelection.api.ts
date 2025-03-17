const MOCK_PAYMENT_METHODS = [
    { id: "CARD", name: "Credit/Debit Card", icon: "card-icon" },
    { id: "BANK_TRANSFER", name: "Bank Transfer", icon: "bank-icon" },
    { id: "MOBILE_MONEY", name: "Mobile Money", icon: "mobile-icon" },
  ];
  
  export const paymentMethodSelectionApi = {
    getPaymentMethods: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MOCK_PAYMENT_METHODS;
    },
    submitPaymentMethod: async (data: { type: string }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (!data.type) throw new Error("Payment method is required");
      return { success: true, message: "Payment method saved" };
    },
  };
  