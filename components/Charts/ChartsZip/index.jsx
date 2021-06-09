import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries, 
  Title
} from "@devexpress/dx-react-chart-material-ui";
import BlueSpinner from "../../Loading/blueSpinner";


export default function ChartsZip(props){
  const days = props.data;
  const loading = props.loading;


  const mapped = days.map((item, i) => {
    return {argument: i,  value: item.day,}
  })

  if (loading) {
    return (
      <>
     
          <BlueSpinner style={{margin: "auto"}}/>
        
      </>
    )
  }else{
    return(
      <>
      <Paper>
        <Chart data={mapped}>
          <ArgumentAxis />
          <ValueAxis />
          <LineSeries valueField="value" argumentField="argument" />
          <Title
            text={'Daily Zip Inputs in ' + props.month}
          />
        </Chart>
      </Paper>
    </>
    )
  }

  
};
