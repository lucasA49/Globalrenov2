import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "./contexts/AuthAdminContext";
import "./App.css";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Realisation from "./Pages/Realisation";
import Cgv from "./Pages/Cgv";

// Code splitting — chargement à la demande
const BlogList = lazy(() => import("./blog/pages/BlogList"));
const BlogArticle = lazy(() => import("./blog/pages/BlogArticle"));
const AdminLogin = lazy(() => import("./admin/pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./admin/pages/AdminDashboard"));
const AdminArticlesList = lazy(() => import("./admin/pages/AdminArticlesList"));
const AdminArticleNew = lazy(() => import("./admin/pages/AdminArticleNew"));
const AdminArticleEdit = lazy(() => import("./admin/pages/AdminArticleEdit"));
import PrivateRoute from "./admin/components/PrivateRoute";

const Loader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="w-10 h-10 border-4 border-[#4F7A28] border-t-transparent rounded-full animate-spin" />
  </div>
);

const router = createBrowserRouter([
  // Site public
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/services", element: <Services /> },
  { path: "/realisations", element: <Realisation /> },
  { path: "/mentions-legales", element: <Cgv /> },

  // Blog public
  { path: "/blog", element: <Suspense fallback={<Loader />}><BlogList /></Suspense> },
  { path: "/blog/:slug", element: <Suspense fallback={<Loader />}><BlogArticle /></Suspense> },

  // Admin
  { path: "/admin/login", element: <Suspense fallback={<Loader />}><AdminLogin /></Suspense> },
  {
    path: "/admin/dashboard",
    element: <Suspense fallback={<Loader />}><PrivateRoute><AdminDashboard /></PrivateRoute></Suspense>,
  },
  {
    path: "/admin/articles",
    element: <Suspense fallback={<Loader />}><PrivateRoute><AdminArticlesList /></PrivateRoute></Suspense>,
  },
  {
    path: "/admin/articles/new",
    element: <Suspense fallback={<Loader />}><PrivateRoute><AdminArticleNew /></PrivateRoute></Suspense>,
  },
  {
    path: "/admin/articles/edit/:id",
    element: <Suspense fallback={<Loader />}><PrivateRoute><AdminArticleEdit /></PrivateRoute></Suspense>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
