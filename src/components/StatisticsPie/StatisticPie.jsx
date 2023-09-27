import { Line, LineChart, PieChart } from "recharts";
import PieDonation from "../PieChart/PieDonation";


const StatisticsPie = ({donation,fullData}) =>{
    const length = donation.length
    const fullLength = fullData.length
    const data = [
        {id:1,name:'Alice',math:length},
        {id:1,name:'Alice',math:length},
        {id:1,name:'Alice',math:length},
        {id:1,name:'Alice',math:length},
        {id:1,name:'Alice',math:length},
        {id:1,name:'Alice',math:fullLength},
        {id:1,name:'Alice',math:fullLength},
        {id:1,name:'Alice',math:fullLength},
        {id:1,name:'Alice',math:fullLength},
        {id:1,name:'Alice',math:fullLength},
        
    ];

    return (
        <div className="pt-24">
             <h1 className="text-center text-2xl font-bold">Donation Slots : {fullLength}</h1>
             <h1 className="text-center text-2xl font-bold">All Donations : {length}</h1>

             <LineChart width={400} height={400} data={data}>
             <Line type="monotone" dataKey="math" stroke="#8884d8" />
             </LineChart>
               <PieDonation length={length} fullLength={fullLength}></PieDonation>
             
        </div>
    )
}

export default StatisticsPie;