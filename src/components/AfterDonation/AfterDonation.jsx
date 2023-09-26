import { Link } from "react-router-dom";

const AfterDonation =({donation}) =>{
    const { id,image,category,title,BackgroundColor,TextColor,CategoryColor,bigImage,price } = donation;
    return (
        <div className="pt-20">
           <div className="card card-side w-[700px] bg-base-100 shadow-xl">
  <figure><img className="w-[350px]" src={image} /></figure>
  <div className="card-body rounded-r-lg"style={{backgroundColor: BackgroundColor}}>
    <button className="rounded-lg" style={{backgroundColor: CategoryColor,color:TextColor}}>{category}</button>
    <p className="text-2xl">{title}</p>
    <p style={{color: TextColor}}>{price}</p>
    <div className="card-actions">
      <Link to={`/details/${id}`}><button className="btn"style={{backgroundColor: TextColor,color: 'white'}}>View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    )
}
export default AfterDonation;