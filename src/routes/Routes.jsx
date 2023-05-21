import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home/Home";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
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
          path: "addToy",

          element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
            path:"logIn",
            element: <LogIn></LogIn>
        },
        {
            path: "register",
            element: <SignUp></SignUp>
        },
        {
          path: "allToys",
          element: <AllToys></AllToys>,
          loader: () => fetch('http://localhost:5000/allToys')
        },
        {
          path: "allToys/:id",
          element: <SingleToy></SingleToy>
        },
        {
          path: "blogs",
          element: <Blogs></Blogs>
        },
        {
          path: "myToy",
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: "update",
          element: <Update></Update>
        }
      ]
    },
  ]);

  export default router;