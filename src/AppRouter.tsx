import { createBrowserRouter } from "react-router-dom";

import PrivateRoute from "routes/PrivateRoute";

import { AdminPage, LoginPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <AdminPage />,
      },
    ],
  },
]);

export default router;
