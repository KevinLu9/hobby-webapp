import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.tsx";
import Resume from "./pages/resume.tsx";
import Projects from "./pages/projects.tsx";
import Navbar from "./components/Navbar.tsx";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
];
const renderRoutes = (
  routes: Array<{ path: string; element: JSX.Element }>
) => {
  return routes.map((route: { path: string; element: JSX.Element }) => {
    return <Route key={route.path} path={route.path} element={route.element} />;
  });
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          {renderRoutes(routes)}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
