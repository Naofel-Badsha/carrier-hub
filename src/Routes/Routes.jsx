import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Statistics from "../Pages/Statistics/Statistics";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import FeaturedJobsDetails from "../Components/FeaturedJobsDetails/FeaturedJobsDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";


const myCreateRouter = createBrowserRouter([
        {
            path: "/",
            element: <Root></Root>,
            children:[
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: "/featuredJobsDetails/:id",
                    element: <FeaturedJobsDetails></FeaturedJobsDetails>,
                    loader: () => fetch('/jobs.json')
                },
                {
                    path: "/statistics",
                    element: <Statistics></Statistics>
                },
                {
                    path: "/appliedJobs",
                    element: <AppliedJobs></AppliedJobs>,
                    loader: () => fetch('/jobs.json')
                },
                {
                    path: "/blog",
                    element: <PrivateRoute><Blog></Blog></PrivateRoute>
                },
                {
                    path: "/login",
                    element: <Login></Login>
                },
                {
                    path: "/registation",
                    element: <Register></Register>
                },
            ]
        }
])

export default myCreateRouter;