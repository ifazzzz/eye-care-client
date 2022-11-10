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
                element : <Services></Services>,
                loader : () => fetch('http://localhost:5000/services')
            },
            {
                path : '/services/:id',
                element : <ServiceDetails></ServiceDetails>,
                loader : ({params}) => fetch(`https://eye-care-server.vercel.app/services/${params.id}`)
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
                element : <MyReviews></MyReviews>
            },
            {
                path : '/addService',
                element : <AddService></AddService>
            },
            {
                path: '/addReview/:id',
                element:<AddReview></AddReview>,
                loader : ({params}) => fetch(`https://eye-care-server.vercel.app/services/${params.id}`)
            }
            
        ]
    }
])