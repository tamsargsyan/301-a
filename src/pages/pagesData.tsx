import { routerType } from "../types/router.types";
import Home from "./Home";
import OurProjects from "./OurProject";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
  {
    path: "projects",
    element: <OurProjects />,
    title: "Projects",
  },
];

export default pagesData;
