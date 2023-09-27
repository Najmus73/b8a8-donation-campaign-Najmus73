import swal from "sweetalert";

const DonationID = ({donation}) => {
    const { id,image,category,title,BackgroundColor,TextColor,CategoryColor,bigImage,price,details } = donation;
    const handleAddToDonation = () =>{
        const addedDonationArray = [];

        const donationItems = JSON.parse(localStorage.getItem('donations'))

        if(!donationItems){
           addedDonationArray.push(donation)
           localStorage.setItem('donations',JSON.stringify(addedDonationArray))
           swal("Good job!", "Donation added successfully", "success");
        }
        else{
           const isExits = donationItems.find(donation=>donation.id == id)
           if(!isExits){
            addedDonationArray.push(...donationItems,donation)
            localStorage.setItem('donations',JSON.stringify(addedDonationArray))
            swal("Good job!", "Donation added successfully", "success");
           }else{
            swal("error", "No duplicate allowed", "error");
           }
  
        }
    }
    return(
        <div className="pt-16 rounded-lg">
           <div className="w-[1200px] h-[600px] mx-auto" style={{backgroundImage:`url(${bigImage})`,backgroundSize:'100%',backgroundRepeat:'no-repeat'}}>

           <div className="pt-[530px] pl-6 w-[1200px]">
              <button onClick={handleAddToDonation} className="btn text-white" style={{backgroundColor: TextColor}}>Donate ${price}</button>
            </div>
           </div>
           <div className="w-[1200px] mx-auto pt-8">
              <h1 className="text-2xl font-bold pb-4">{title}</h1>
              <p><small>{details}</small></p>
           </div>
        </div>
    )
}
export default DonationID; 