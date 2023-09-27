import { useLoaderData, useParams } from "react-router-dom";
import DonationID from "../DonationID/DonationID";

const DonationDetails = () =>{
     const donations = useLoaderData();
     const {id} = useParams()
     const idInt = parseInt(id);
     const donation = donations.find(donation => donation.id === idInt)

    return(
         <div id="fullDetails">
               <DonationID donation={donation}></DonationID>
         </div>
    )
}

export default DonationDetails;