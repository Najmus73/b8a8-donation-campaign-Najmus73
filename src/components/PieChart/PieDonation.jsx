import React from "react";
import { Chart } from "react-google-charts";
export const data = [
    ["Task", "Hours per Day"],
    ["Total Donation", 12],
    ["Donation Done", 5],
  ];
  
  export const options = {
    title: "All Donations :",
  };
  
  export  function PieChart() {
    return (
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    );
  }
  
const PieDonation= ({length,fullLength}) => {
    
    return (
        <div>
            <PieChart length={length} fullLength={fullLength} />
        </div>
    )
}
export default PieDonation;