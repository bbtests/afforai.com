import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { ErrorElement } from "..";

const Login = lazy(() => import('pages/auth/login'));
const ForgotPassword = lazy(() => import('pages/auth/forgot_password'));
const Signup = lazy(() => import('pages/auth/signup'));


export const AuthRoutes = {
  path: "auth",
  errorElement: <ErrorElement />,
  children: [
    {
      index: true,
      element: <Navigate to="login" />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "forgot-password",
      element: <ForgotPassword />,
    },
  ],
};
