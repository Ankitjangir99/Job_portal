import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import Login from "../components/auth/Login";
import ForgotPassword from "../pages/ForgotPassword";
import Signup from "../components/auth/Signup";
import Brouse from "../pages/Brouse";
import Jobs from "../pages/Jobs";
import Profile from "../pages/Profile";
import Company from "../components/admin/Company";
import AdminJobs from "../components/admin/AdminJobs";
import Addjob from "../components/admin/Addjob";
import AddCompany from "../components/admin/AddCompany";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children: [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "jobs",
                element : <Jobs/>
            },
            {
                path : "signup",
                element : <Signup/>
            },
            {
                path : "brouse",
                element : <Brouse/>
            },
            {
                path : "profile",
                element : <Profile/>
            },
            {
                path : "admin/companies",
                element : <Company/>
            },
            {
                path : "admin/jobs",
                element : <AdminJobs/>
            },
            {
                path : "admin/addjob",
                element : <Addjob/>
            },
            {
                path : "admin/addcompany",
                element : <AddCompany/>
            },
            {
                path : "forgot-password",
                element : <ForgotPassword/>
            }
        ]
    }
])
export default router;