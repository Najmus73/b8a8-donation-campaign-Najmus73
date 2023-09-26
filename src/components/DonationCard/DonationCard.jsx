import { Link } from "react-router-dom";


const DonationCard = ({data}) =>{
    const { id,image,category,title,BackgroundColor,TextColor,CategoryColor } = data;
    return(
        
        <Link to={`/details/${id}`}>
        <div className="pb-10">
            <div className="card card-compact w-11/12 bg-base-100 shadow-xl rounded-lg">
             <figure><img className="w-96" src={image} /></figure>
              <div className="card-body rounded-b-lg" style={{backgroundColor:BackgroundColor}}>
              <h2 className="card-title"><button className="p-1 px-4 rounded-md" style={{backgroundColor: CategoryColor,color: TextColor}}>{category}</button></h2>
               <h1 className="text-2xl font-bold"style={{color: TextColor}}>{title}</h1>
              </div>
           </div> 
        </div>
        </Link>
        
    )
}
export default DonationCard;