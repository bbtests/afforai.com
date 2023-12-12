// import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { ErrorElement } from "..";
import Login from 'pages/auth/login';
import ForgotPassword from 'pages/auth/forgot_password';
import Signup from 'pages/auth/signup';


export const AuthRoutes = {
  path: "",
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
