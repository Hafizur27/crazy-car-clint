import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home/Home";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import SingleToy from "../pages/SingleToy/SingleToy";
import Update from "../pages/Update/Update";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/addToy",
          element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
            path:"/logIn",
            element: <LogIn></LogIn>
        },
        {
            path: "/register",
            element: <SignUp></SignUp>
        },
        {
          path: "/allToys",
          element: <AllToys></AllToys>,
          loader: () => fetch('https://crazy-car-server.vercel.app/allToys')
        },
        {
          path: "/allToys/:id",
          element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
          loader: ({params}) => fetch(`https://crazy-car-server.vercel.app/myToys/${params.id}`)
        },
        {
          path: "/myToy",
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: "/:id",
          element: <Update></Update>,
          loader: ({params}) => fetch(`https://crazy-car-server.vercel.app/myToys/${params.id}`) 
        }
      ]
    },
  ]);

  export default router;