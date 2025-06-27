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
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardOverview from "../Pages/Dashboard/DashboardOverview";
import DashAllGroup from "../Pages/Dashboard/DashAllGroup";

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
  },{
          path:"/dashboard",
          element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          errorElement:<Error></Error>,
          children:[{
            path:"/dashboard",
            element: <DashboardOverview></DashboardOverview>
          },{
            path:"/dashboard/addGroup",
            element:<PrivateRoute><CreateGroup></CreateGroup></PrivateRoute>
          },{
            path:"/dashboard/allGroup",
            element:<PrivateRoute><DashAllGroup></DashAllGroup></PrivateRoute>
          },{
            path:"/dashboard/myGroup",
            element:<PrivateRoute><MyGroups></MyGroups></PrivateRoute>
          }
          ]

        }
]);