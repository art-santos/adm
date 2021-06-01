import * as React from "react";
import {useState, useEffect} from "react";
import Paper from "@material-ui/core/Paper";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries
} from "@devexpress/dx-react-chart-material-ui";
import axios from 'axios';



export default function ChartsZip(){
const [zips, setZips] = useState([])

let data = [];

useEffect(async () => {
  const result = await axios(`/api/zips/05/`)
  setZips(result.day)
  console.log(zips);
 }, [])

  return(
  <Paper>
    <Chart data={data}>
      <ArgumentAxis />
      <ValueAxis />

      <LineSeries valueField="value" argumentField="argument" />
    </Chart>
  </Paper>
  )
};
