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
import Works from "./assets/components/Works/Works.jsx";
import Gems from "./assets/components/Gems.jsx";

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
      {
        path: "/works",
        element: <Works />
      },
      {
        path: "/gems",
        element: <Gems />
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

