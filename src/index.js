// src/pages/index.js
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import { Actors, Directors, Home, Movie } from './pages';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={createBrowserRouter(routes)}>
    <App />
  </RouterProvider>
);
