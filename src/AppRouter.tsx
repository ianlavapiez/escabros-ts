import { createBrowserRouter } from "react-router-dom";

import { LoginPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
]);

export default router;
