import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Onas from "../Onas/Onas";
import Menu from "../Menu/Menu";


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
        element: <App />,
        children:[
            {
                path:"/",
                element:<Menu/>
            },
        ]
    },

])

export default router

