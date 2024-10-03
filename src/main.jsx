import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import ErrorPage from "./ErrorPage";
import Index from "./pages/Index";
import Programming from "./pages/Programming";
import { indexLoader, programmingLoader, searchLoader } from "./loader/loader";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: indexLoader,
      },
      {
        path: "programming",
        element: <Programming />,
        loader: programmingLoader,
      },
      {
        path: "search/:searchQuery",
        element: <Search />,
        loader: searchLoader,
      },
      {
        path: "saved",
        element: <Saved />,
        loader: programmingLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
