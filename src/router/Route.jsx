import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Home from "../page/Home/Home";
import About from "../page/About/About";
import Contact from "../page/Contact/Contact";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import AdminLayout from "../layout/AdminLayout";
import AddService from "../page/AddService/AddService";


const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout>
            <Outlet></Outlet>
        </MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/admin',
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                path: 'addService',
                element: <AddService></AddService>
            }
        ]
    }
]);

export default myCreatedRoute;