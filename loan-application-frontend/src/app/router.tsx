import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/components/layout/MainLayout";
import CreditRequestPage from "@/pages/CreditRequest.page";
import ErrorPage from "@/pages/Error.page";
import HomePage from "@/pages/Home.page";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/credit-request",
        element: <CreditRequestPage />,
      },
    ],
  },
]);

export default router;
