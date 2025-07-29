import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import './index.css'
import App from './App.jsx'
import Home from "./assets/components/Home.jsx";
import Me from "./assets/components/Me.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/me",
        element: <Me />
      },
    ]
  },
]);

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

