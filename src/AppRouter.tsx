import { createBrowserRouter } from "react-router-dom";

import { AdminPage, LoginPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
]);

export default router;
