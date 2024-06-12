import React from "react";
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";

export const Links = [
    {
        name: "Home",
        path: "/",
        element: <Home />,
        showInNavigation: true,
    },
    {
        name: "About",
        path: "/About",
        element: <About />,
        showInNavigation: true,
    },
     {
        name: "Contact",
        path: "/Contact",
        element: <Contact />,
        showInNavigation: true,
    },
     {
        name: "Projects",
        path: "/Projects",
        element: <Projects />,
        showInNavigation: true,
    },

]