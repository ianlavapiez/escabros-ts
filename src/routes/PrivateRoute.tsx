import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AppState } from "app/store";
import { useAppSelector } from "hooks/useDispatchSelector";

const PrivateRoute: React.FC = () => {
  const user = useAppSelector((state: AppState) => state.auth.user);

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
