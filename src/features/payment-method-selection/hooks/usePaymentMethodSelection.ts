import { useQuery, useMutation } from "@tanstack/react-query";
import { paymentMethodSelectionApi } from "../api/paymentMethodSelection.api";

export const usePaymentMethods = () => {
  return useQuery({
    queryKey: ["paymentMethods"],
    queryFn: paymentMethodSelectionApi.getPaymentMethods,
  });
};

export const useSubmitPaymentMethod = () => {
  return useMutation({
    mutationKey: ["submitPaymentMethod"],
    mutationFn: paymentMethodSelectionApi.submitPaymentMethod,
  });
};

