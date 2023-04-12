import ChallengePage from "../pages/Challanges";
import Home from "../pages/Home";
import LandingPage from "../pages/Landing";
import Page404 from "../pages/404";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", Component: Home, ErrorBoundary: Page404 },
  { path: "/challenge", Component: ChallengePage },
]);

export default router;
