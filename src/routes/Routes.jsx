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

          element: <AddToy></AddToy>
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
          path: 'blogs',
          element: <Blogs></Blogs>
        },
        {
          path: 'myToy',
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;