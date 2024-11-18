import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login_Signup from "./pages/Login_Signup.jsx";
import Board from "./pages/Board.jsx";
import { ThemeProvider, UserProvider } from "./contexts/contexts";

const router = createBrowserRouter([
  {
    path: "/", // Check the ID here later
    element: <App />,
  },
  {
    path: "/boards/:id", // Check the ID here later
    element: <Board />,
  },
  {
    path: "/login_signup", // Check the ID here later
    element: <Login_Signup />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);
