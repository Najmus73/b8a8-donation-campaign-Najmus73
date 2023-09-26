import swal from "sweetalert";

const DonationID = ({donation}) => {
    const { id,image,category,title,BackgroundColor,TextColor,CategoryColor,bigImage,price } = donation;
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
        <div>
           <div className="hero" style={{backgroundImage:` url(${bigImage})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <button onClick={handleAddToDonation} className="btn btn-primary">Donate {price}</button>
    </div>
  </div>
</div>
        </div>
    )
}
export default DonationID; 