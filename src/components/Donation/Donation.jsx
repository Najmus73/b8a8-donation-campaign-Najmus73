import { useEffect, useState } from "react";
import AfterDonation from "../AfterDonation/AfterDonation";

const Donation = () => {
   const [donations, setDonations] = useState([])
   const [notFound, setNotFound] = useState("")

   useEffect(()=>{
    const donationItems = JSON.parse(localStorage.getItem('donations'));
    if(donationItems){
        setDonations(donationItems)
    }else{
         setNotFound('No Data Found')
    }
   },[])

    return(
        <div>
           {notFound ? <p className="h-[80vh] flex justify-center items-center">{notFound}</p> : 
           <div className="grid grid-cols-2">
               {
                donations.map(donation =><AfterDonation key={donation.id} donation={donation}></AfterDonation>)
               }
           </div> }
        </div>
    )
}
export default Donation; 