import { useMemo } from "react";
import { useAppSelector } from "hooks/useDispatchSelector";

export const useMedicinesSelector = () => {
  const error = useAppSelector((state) => state.medicines.error);
  const loading = useAppSelector((state) => state.medicines.loading);
  const medicines = useAppSelector((state) => state.medicines.entities);

  return useMemo(
    () => [error, loading, medicines] as const,
    [error, loading, medicines]
  );
};
