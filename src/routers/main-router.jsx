import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [],
  },
]);

export default router;
