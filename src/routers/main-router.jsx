import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import LandingPage from "../pages/CommonPage/LandingPage";
import WorkerLandingPage from "../pages/WorkerPage/LandingPage";
import GHLandingPage from "../pages/GuestHousePage/LandingPage";
import LoginPage from "../pages/CommonPage/LoginPage";
import SelectRegisterPage from "../pages/CommonPage/SelectPage";
import WorkerRegisterPage from "../pages/WorkerPage/RegisterPage";
import GHRegisterPage from "../pages/GuestHousePage/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "worker", element: <WorkerLandingPage /> },
      { path: "guesthouse", element: <GHLandingPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "select-register", element: <SelectRegisterPage /> },
      { path: "register/worker", element: <WorkerRegisterPage /> },
      { path: "register/guesthouse", element: <GHRegisterPage /> },
    ],
  },
]);

export default router;
