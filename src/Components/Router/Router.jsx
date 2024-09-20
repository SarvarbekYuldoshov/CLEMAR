import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Onas from "../Onas/Onas";
import Menu from "../Menu/Menu";
import Hero from "../Hero/Hero";


const router = createBrowserRouter ([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/onas",
        element:<Onas/>
    },
    {
        path: "/",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        element: <Hero/>,
        children:[
            {
                path:"/menu",
                element:<Menu/>
            },
        ]
    },

])

export default router

