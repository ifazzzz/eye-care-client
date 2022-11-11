import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/Registration/SignUp";
import AddReview from "../Reviews/AddReview";
import Root from "../layout/Root";
import AddService from "../pages/AddService/AddService";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import ServiceDetails from "../pages/Services/ServiceDetails";
import Services from "../pages/Services/Services";
import MyReviews from "../pages/MyReviews/MyReviews";
import PrivateRoute from "./PrivateRoute";
import EditReview from "../pages/MyReviews/EditReview";

export const router = createBrowserRouter([
    {
        path:'/',
        element : <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/home',
                element : <Home></Home>
            },
            
            {
                path : '/services',
                element : <Services></Services>
            },
            {
                path : '/services/:id',
                element : <ServiceDetails></ServiceDetails>,
                loader : ({params}) => fetch(`https://eye-care-server-ifazzzz.vercel.app/services/${params.id}`)
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/signup',
                element : <SignUp></SignUp>
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            },
            {
                path : '/myReviews',
                element : <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path : '/addService',
                element : <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/addReview',
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>               
            },
            {
                path : '/editReview',
                element : <EditReview></EditReview>
            }
            
        ]
    }
])