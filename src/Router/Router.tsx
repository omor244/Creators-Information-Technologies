import { createBrowserRouter } from "react-router";
import  MainLayOut from "../LayOut/MainLayOut";
import HomePage from "../Pages/HomePage";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut />,
        children: [
            {
                index: true,
                element: <HomePage/>
            }
        ]
    },

]);