import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import store, { persistor } from "app/store.ts";
import Spinner from "components/spinner/Spinner.tsx";

import AppRouter from "./AppRouter.tsx";

import "./main.css";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <Suspense fallback={<Spinner />}>
          <RouterProvider router={AppRouter} />
        </Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
