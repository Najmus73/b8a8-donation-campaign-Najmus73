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
           <div className="w-[390px] h-[200px] md:w-[1200px] md:h-[600px] mx-auto" id="details" style={{backgroundImage:`url(${bigImage})`,backgroundSize:'100%',backgroundRepeat:'no-repeat'}}>

           <div className="pt-36 md:pt-[530px] md:w-[1200px] pl-6 " id="donateBtn">
              <button onClick={handleAddToDonation} className="btn text-white" style={{backgroundColor: TextColor}}>Donate ${price}</button>
            </div>
            <div className="w-[1280] h-[100px] bg-black mt-[-76px] bg-opacity-50" id="opacity">

            </div>
           </div>
           <div className="w-[390px] md:w-[1200px] mx-auto pt-8" id="detailsText">
              <h1 className="text-2xl font-bold pb-4">{title}</h1>
              <p><small>{details}</small></p>
           </div>
        </div>
    )
}
export default DonationID; 