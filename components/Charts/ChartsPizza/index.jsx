import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';


export function ChartsPizza (props) {

  const data = [
    { country: 'Russia', area: 12 },
    { country: 'Canada', area: 7 },
    { country: 'USA', area: 7 },
    { country: 'China', area: 7 },
    { country: 'Brazil', area: 6 },
    { country: 'Australia', area: 5 },
    { country: 'India', area: 2 },
    { country: 'Others', area: 55 },
  ];

    return (
      <Paper>
        <Chart
          data={data}
        >
          <PieSeries
            valueField="area"
            argumentField="country"
            innerRadius={0.7}

          />
          <Title
            text={"Plans Searched in "+ props.month}
          />
          <Animation />
        </Chart>
      </Paper>
   );
}

export default ChartsPizza;