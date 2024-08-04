import { useMemo } from "react";
import { useAppSelector } from "hooks/useDispatchSelector";

export const useAuthSelector = () => {
  const error = useAppSelector((state) => state.auth.error);
  const loading = useAppSelector((state) => state.auth.loading);
  const user = useAppSelector((state) => state.auth.user);

  return useMemo(() => [error, loading, user] as const, [error, loading, user]);
};
