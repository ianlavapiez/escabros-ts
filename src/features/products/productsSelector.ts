import { useMemo } from "react";
import { useAppSelector } from "hooks/useDispatchSelector";

export const useProductsSelector = () => {
  const error = useAppSelector((state) => state.products.error);
  const loading = useAppSelector((state) => state.products.loading);
  const products = useAppSelector((state) => state.products.entities);
  const successMessage = useAppSelector(
    (state) => state.products.successMessage
  );

  return useMemo(
    () => [error, loading, products, successMessage] as const,
    [error, loading, products, successMessage]
  );
};
