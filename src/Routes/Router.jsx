import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/MainLayout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateGroup from "../Pages/CreateGroup/CreateGroup";
import PrivateRoute from "./PrivateRoute";
import AllGroups from "../Pages/AllGroup/AllGroups";
import GroupDetails from "../Pages/GroupDetails/GroupDetails";
import MyGroups from "../Pages/MyGroup/MyGroup";
import Error from "../Pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },{
          path:"/login",
          element:<Login></Login>
        },{
          path:"/register",
          element:<Register></Register>
        },{
          path:"/create-group",
          element:<PrivateRoute><CreateGroup></CreateGroup></PrivateRoute>
        },{
          path:"/allGroups",
          element:<AllGroups></AllGroups>
        },{
          path:"/groups/:id",
          element:<PrivateRoute><GroupDetails></GroupDetails></PrivateRoute>
        },{
          path:"/myGroup",
          element:<PrivateRoute><MyGroups></MyGroups></PrivateRoute>
        }
    ]
  },
]);