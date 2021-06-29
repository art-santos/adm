import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import BlueSpinner from '../../Loading/blueSpinner';
import useSWR from 'swr';
import axios from 'axios';



export function ChartsBar (props) {

  const fetcher = url => axios.get(url).then(res => res.data)
  const { data, error } = useSWR(`/api/zips/days/${props.date}/`, fetcher)

  if(error)return <div>Error...</div>;
  if(!data) return <div><BlueSpinner /></div>
    const content = [
      {month: "Jan - " + data.months[0].month,  amount: data.months[0].month},
      {month: "Feb - " + data.months[1].month,  amount: data.months[1].month},
      {month: "Mar - " + data.months[2].month , amount: data.months[2].month},
      {month: "Apr - " + data.months[3].month , amount: data.months[3].month},
      {month: "May - " + data.months[4].month , amount: data.months[4].month},
      {month: "Jun - " + data.months[5].month , amount: data.months[5].month},
      {month: "Jul - " + data.months[6].month , amount: data.months[6].month},
      {month: "Aug - " + data.months[7].month , amount: data.months[7].month},
      {month: "Sep - " + data.months[8].month , amount: data.months[8].month},
      {month: "Oct - " + data.months[9].month , amount: data.months[9].month},
      {month: "Nov - " + data.months[10].month, amount: data.months[10].month},
      {month: "Dec - " + data.months[11].month, amount: data.months[11].month}
    ];


    return (
      <Paper>
      <Chart
        data={content}
      >
        <ArgumentAxis />
        <ValueAxis max={12} />

        <BarSeries
          valueField="amount"
          argumentField="month"
        />
        <Title text={"Total of Zip Inputs by Month"} />
        
        <Animation />
      </Chart>
    </Paper>
   );
}


export default ChartsBar;