import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import ErrorPage from "./ErrorPage";
import Index from "./pages/Index";
import Programming from "./pages/Programming";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import { Provider } from "react-redux";
import store from "./app/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "programming",
        element: <Programming />,
      },
      {
        path: "search/:searchQuery",
        element: <Search />,
      },
      {
        path: "saved",
        element: <Saved />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
