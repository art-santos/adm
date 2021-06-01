import React, { useState, useEffect } from "react";
import {Container, Chart, Title} from "./styles";
import ChartsZip from "../../Charts/ChartsZip/index";
import ProvidersCard from "../../Cards/ProvidersCard/index";
import BlueSpinner from "../../Loading/blueSpinner";
import axios from "axios";

export default function ContentDashboard(props) {

  return (
    <>
        <Chart>
          <Title>Total of Zip Codes of: {props.month}</Title>
          <ChartsZip />
        </Chart>
    </>
  );
}
