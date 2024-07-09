import { lazy } from "react";

const AdminPage = lazy(() => import("./Admin"));
const LoginPage = lazy(() => import("./Login"));

export { AdminPage, LoginPage };
