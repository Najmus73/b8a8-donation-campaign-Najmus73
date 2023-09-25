import { useLoaderData } from "react-router-dom";
import DonationCard from "../DonationCard/DonationCard";

const Home = () =>{
    const AllData = useLoaderData();
    
    return (
        <div>
        <div className="flex flex-col items-center pt-24">
             <h1 className="text-4xl font-bold">I Grow By Helping People In Need</h1>
             <div className="pt-7">
                <input className="border p-1.5 rounded-l-lg pr-32" type="text" placeholder="Search here..." />
                <button className="bg-red-400 p-1.5 px-4 rounded-r-lg">Search</button>
             </div>
        </div>
          <div className="grid grid-cols-4 pt-72">
              {
                AllData.map(data =><DonationCard key={data.id} data={data}></DonationCard>)
              }
          </div>
        </div>
    )
}
export default Home;