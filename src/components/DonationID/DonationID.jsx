const DonationID = ({donation}) => {
    console.log(donation)
    const { id,image,category,title,BackgroundColor,TextColor,CategoryColor,bigImage,price } = donation;
    return(
        <div>
           <div className="hero" style={{backgroundImage:` url(${bigImage})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <button className="btn btn-primary">Donate {price}</button>
    </div>
  </div>
</div>
        </div>
    )
}
export default DonationID; 