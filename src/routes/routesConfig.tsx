import { Navigate } from "react-router-dom";
import Login from "../pages/login/Login";

export type RoutesType = {
  path: string;
  element: any;
  children?: RoutesType[];
};

export const publicRoutes: RoutesType[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
];

export const privateRoutes: RoutesType[] = [
    // ConfigRoutes
]