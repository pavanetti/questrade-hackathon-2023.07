import MainLayout from "@/components/layout/MainLayout";
import ErrorPage from "@/pages/Error.page";
import HomePage from "@/pages/Home.page";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
