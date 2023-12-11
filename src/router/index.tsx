import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import { AuthRoutes } from "./routes/auth";
import Error404 from "pages/error404";


export function ErrorElement() {
  let error = useRouteError();
  console.error(error);
  return <div>Dang!</div>;
}

const Home = lazy(() => import('pages'));


const routes = [
  {
    index: true,
    element: <Home />,
    errorElement: <ErrorElement />,
  },
  AuthRoutes,
  {
    path: "*",
    element: <Error404 />,
  },
];

function AppRouter() {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />

}

export default AppRouter;
