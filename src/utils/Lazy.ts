import { lazy } from "react";

const Lazy = {
  Landing_Page: lazy(() => import("../pages/landing_page/Landing-Page")),
  Page_Layout: lazy(() => import("../layout/Page-Layout")),
  About_Page: lazy(() => import("../pages/about_page/About-Page")),
  Project_1: lazy(() => import("../pages/project_1/Project_1")),
  Project_2: lazy(() => import("../pages/project_2/Project_2")),
  Project_3: lazy(() => import("../pages/project_3/Project_3")),
};

export default Lazy;
