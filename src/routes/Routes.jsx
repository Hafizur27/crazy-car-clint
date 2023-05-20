import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home/Home";
import AddToy from "../pages/AddToy/AddToy";

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
        }
      ]
    },
  ]);

  export default router;