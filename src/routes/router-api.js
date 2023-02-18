import {
  createBrowserRouter
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard-profesor",
    element: <ProfesorDashboard />,
  },
  {
    path: "/AdminDashboard-control",
    element: <AdminDashboard />,
  },
]);

export default router;