import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Donation from "../Donation/Donation";
import Statistics from "../Statistics/Statistics";


const myCreatedRouter = createBrowserRouter([
    {
       path : "/",
       element : <MainLayout></MainLayout>,
       children:[
           {
            path : "/",
            element : <Home></Home>,
            loader : () => fetch('DonationData.json')
           },
           {
             path : "/donation",
             element : <Donation></Donation>
           },
           {
            path: "/Statistics",
            element : <Statistics></Statistics>
           }
       ]
    }
])

export default myCreatedRouter;