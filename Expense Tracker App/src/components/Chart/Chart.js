import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";


const Chart = (props) => {
    const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); // getting only the value from the array
    const totalMaximum =Math.max(...dataPointValues); // getting the biggest(maximum) amount 

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => ( //dataPoint is an object // dataPoints is an array of objects
        <ChartBar 
        key={dataPoint.label}
        value={dataPoint.value} 
        maxValue={totalMaximum} 
        label={dataPoint.label} />
      ))}
    </div>
  );
};

export default Chart;
