import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout.jsx";

import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Product from "./components/Product/Product.jsx";
import Github from "./components/Github/Github.jsx";
import GithubInfoLoader from "./components/GithubInfoLoader/GithubInfoLoader.jsx";
import InnerPageOfAbout from "./components/InnerPageOfAbout/InnerPageOfAbout.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

//start routing
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />}>
        <Route path="innerpageofabout" element={<InnerPageOfAbout />} />
      </Route>
      <Route path="contact" element={<Contact />} />
      <Route path="product/:productID" element={<Product />} />
      <Route loader={GithubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);

//end routing

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
