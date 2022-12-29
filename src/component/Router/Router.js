import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Aboute from "../Home/Aboute/Aboute";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main";
import Media from "../Media/Media";
import MediaDetails from "../Media/MediaDetails";
import Login from "../UserCreate/Login/Login";
import Register from "../UserCreate/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Main></Main>,
            },
            {
                path:'/aboute',
                element: <Aboute></Aboute>,
            },
            {
                path:'/media',
                element: <Media></Media>,
            },
            {
                path:'/login',
                element: <Login></Login>,
            },
            {
                path:'/register',
                element: <Register></Register>,
            },
            {
                path:'/mediaDetails/:id',
                element: <MediaDetails></MediaDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/mediaDetails/${params.id}`)
            },
            
        ]
    }
])