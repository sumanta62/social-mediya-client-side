import { createBrowserRouter } from "react-router-dom";
import Aboute from "../Home/Aboute/Aboute";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main";
import Media from "../Media/Media";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
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
            
        ]
    }
])