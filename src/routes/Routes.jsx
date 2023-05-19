import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LogIn from "../LogIn/LogIn";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"logIn",
            element: <LogIn></LogIn>
        }
      ]
    },
  ]);

  export default router;