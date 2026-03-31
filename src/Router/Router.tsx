import { createBrowserRouter } from "react-router";
import  MainLayOut from "../LayOut/MainLayOut";
import HomePage from "../Pages/HomePage";
import CompanyPage from "@/Pages/CompanyPage";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut />,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "/company",
                element: <CompanyPage/>
            }
        ]
    },

]);