import { useEffect, useState } from "react";
import AfterDonation from "../AfterDonation/AfterDonation";

const Donation = () => {
   const [donations, setDonations] = useState([])
   const [notFound, setNotFound] = useState(false);
   const [isShow, setIsShow] = useState(false);

   useEffect(()=>{
    const donationItems = JSON.parse(localStorage.getItem('donations'));
    if(donationItems){
        setDonations(donationItems)
    }else{
         setNotFound('No Data Found')
    }
   },[])
   const handleRemove = ()=>{
    localStorage.clear();
    setDonations([]);
    setNotFound('No Data Found')
   }
    return(
        <div className="pt-12">
           {notFound ? <p className="h-[80vh] flex justify-center items-center">{notFound}</p> : 

        <div>
         {donations.length > 0 && <button onClick={handleRemove} className="px-5 py-1.5 bg-blue-600 text-white rounded-lg block mx-auto">Delete All Donations</button>}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-10" id="donation"> 
               {
                  isShow ? donations.map(donation =><AfterDonation key={donation.id} donation={donation}></AfterDonation>)
                  :
                  donations.slice(0, 4).map(donation =><AfterDonation key={donation.id} donation={donation}></AfterDonation>)
               }
           </div>
           <div className="pb-10"id="seeBtn">
             {donations.length > 4 && <button onClick={()=>setIsShow(!isShow)} className="px-5 py-1.5 bg-blue-600 text-white rounded-lg block mx-auto">{isShow ? 'Show Less':'Show More'}</button>}
           </div> 

           </div>}</div>
    )
}
export default Donation; 