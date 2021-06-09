import React, { useState, useEffect } from "react";
import {Container, Chart, Charts, Title} from "./styles";
import ChartsZip from "../../Charts/ChartsZip/index";
import ChartsBar from "../../Charts/ChartsBar/index"
import ChartsBarMonths from "../../Charts/ChartsBarMonths/index"

export default function ContentDashboard(props) {

  return (
    <>
        <Chart>
          <ChartsZip data={props.data} loading={props.loading} month={props.actualMonth}/>
        </Chart>
        <Charts>
          <Chart>
          <ChartsBarMonths month={props.actualMonth} date={props.date}/>
          </Chart>
        <Chart>
          <ChartsBar date={props.date} plansData={props.plansData} date={props.date} month={props.actualMonth}/>
        </Chart>
        </Charts>
        
    </>
  );
}
