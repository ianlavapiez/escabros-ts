import { useMemo } from "react";
import { useAppSelector } from "hooks/useDispatchSelector";

export const useAuthSelector = () => {
  const error = useAppSelector((state) => state.auth.error);
  const loading = useAppSelector((state) => state.auth.loading);
  const successMessage = useAppSelector((state) => state.auth.successMessage);
  const user = useAppSelector((state) => state.auth.user);

  return useMemo(
    () => [error, loading, successMessage, user] as const,
    [error, loading, successMessage, user]
  );
};
