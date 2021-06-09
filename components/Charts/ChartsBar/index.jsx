import * as React from 'react';
import {useEffect} from 'react'; 
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
import useSWR, {mutate} from 'swr';
import axios from 'axios'



export function ChartsBar (props) {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR(`/api/zips/days/${props.date}/`, fetcher, { revalidateOnMount:true })
  console.log(props.date)
  if(error)return <div>Error...</div>;
  if(!data) return <div><BlueSpinner /></div>


    const content = [
      {plan: "internet - " + data.plans[0].internet, amount:data.plans[0].internet},
      {plan: "bundles - " + data.plans[1].bundles, amount:data.plans[1].bundles},
      {plan: "video - " + data.plans[2].video, amount:data.plans[2].video},
      {plan: "mobile - " + data.plans[3].mobile, amount:data.plans[3].mobile},
      {plan: "phone - " + data.plans[4].phone, amount:data.plans[4].phone}
    ];

    return (
      <Paper>
        <Chart
          data={content}
        >
          <ArgumentAxis />
          <ValueAxis max={5} />

          <BarSeries
            valueField="amount"
            argumentField="plan"
          />
      <Title text={"Most Searched Plans in " + props.month} />
     <Animation />
    </Chart>
  </Paper>
  );
}

export default ChartsBar;