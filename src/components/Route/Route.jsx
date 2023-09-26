import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Donation from "../Donation/Donation";
import Statistics from "../Statistics/Statistics";
import ErrorPage from "../ErrorPage/ErrorPage";
import DonationDetails from "../DonationDetails/DonationDetails";


const myCreatedRouter = createBrowserRouter([
    {
       path : "/",
       element : <MainLayout></MainLayout>,
       errorElement : <ErrorPage></ErrorPage>,
       children:[
           {
            path : "/",
            element : <Home></Home>,
            loader : () => fetch('/DonationData.json')
           },
           {
             path : "/donation",
             element : <Donation></Donation>
           },
           {
            path: "/Statistics",
            element : <Statistics></Statistics>
           },
           {
            path : "/details/:id",
            element :<DonationDetails></DonationDetails>,
            loader : () => fetch('../DonationData.json')
            
           }
       ]
    }
])

export default myCreatedRouter;