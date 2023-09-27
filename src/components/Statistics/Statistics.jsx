import { useEffect, useState } from "react";
import StatisticsPie from "../StatisticsPie/StatisticPie";
import { useLoaderData } from "react-router-dom";


const Statistics = () => {
    const [donations, setDonations] = useState([])
    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem('donations'));
        if(donationItems){
            setDonations(donationItems);
        }
       },[])
       const fullData = useLoaderData();
       
       
    return(
        <div>
           <StatisticsPie donation={donations} fullData={fullData}></StatisticsPie>
        </div>
    )
}
export default Statistics; 