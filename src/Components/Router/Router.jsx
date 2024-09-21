import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Onas from "../Onas/Onas";

const router = createBrowserRouter ([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/onas",
        element:<Onas/>
    },

])

export default router

