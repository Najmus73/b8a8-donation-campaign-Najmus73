import { useEffect, useState } from "react";
import StatisticsPie from "../StatisticsPie/StatisticPie";


const Statistics = () => {
    const [donations, setDonations] = useState([])
    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem('donations'));
        if(donationItems){
            setDonations(donationItems);
        }
       },[])
       
    return(
        <div>
           {
            donations.map(donation => <StatisticsPie key={donation.id} donation={donation}></StatisticsPie>)
           }
        </div>
    )
}
export default Statistics; 