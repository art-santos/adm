import React, { useState, useEffect } from 'react';

import ContentHeader from '../components/Content/ContentHeader/index';
import ContentDashboard from '../components/Content/ContentDashboard';
import MovimentCards from '../components/Cards/MovimentCards/index'
import BlueSpinner from '../components/Loading/blueSpinner';


import { Container, Title, Buttons, Cards } from '../styles/MainHeader/styles';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SwitchMonth from '../components/Functions/Date/switchMonth.js';

import axios from 'axios';
import useSWR, {mutate} from 'swr';


const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function Pages() {

  const classes = useStyles();

  //state management-------------------------

  const [days, setDays] = useState([]);
  const [zips, setZips] = useState("");
  const [totalZips, setTotalZips] = useState("");
  const [providers, setProviders] = useState("");
  const [plans, setPlans] = useState("");
  const [loading, setLoading] = useState(true);
  const [newLoading, setNewLoading] = useState(false);
  const [actualMonth, setActualMonth] = useState("June");
  const [plansData, setPlansData] = useState([]);
  const [monthData, setMonthData] = useState([]);
  const [month, setMonth] = useState()
  //axios request----------------------------

  let one = "/api/plans/count/";
  let two = "/api/providers/count/";

  const requestOne = axios.get(one);
  const requestTwo = axios.get(two);

//-------------------------------------------

  useEffect(async () => {
    let date = new Date();
    let nowDate = ("0"+(date.getMonth()+1).toString());
    let month;

    if(localStorage.getItem("month")){
       localStorage.getItem("month");
    }else{
      localStorage.setItem("month", nowDate);
    }
    month = localStorage.getItem("month");
    setActualMonth(SwitchMonth(month));

    setMonth(month);
  //----------------------------------------
    await axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
      const responseOne = responses[0]
      const responseTwo = responses[1]
      setPlans(responseOne.data.data);
      setProviders(responseTwo.data.data);
  }))

//-------------------------------------------


  const result = await axios(`/api/zips/days/${month}/`)
  setZips(result.data.month);
  setDays(result.data.day);
  setTotalZips(result.data.total)
  setPlansData(result.data.plans);
  setMonthData(result.data.months)
  setLoading(false)

  }, [])
//--------------------------------------------------------------------

//--------------------------------------------------------------------

async function changeData(e){
  setNewLoading(true);
  setZips("0");
  setDays([{day:0}]);
  setTotalZips("0");
  localStorage.setItem("month", e.target.value)
  const month = localStorage.getItem("month");
  const result = await axios(`/api/zips/days/${month}/`)
  setZips(result.data.month);
  setDays(result.data.day);
  setTotalZips(result.data.total)
  setActualMonth(SwitchMonth(month));
  setMonth(month)
  setNewLoading(false);

}

//--------------------------------------------
if(newLoading){
  return(
    <>
      <BlueSpinner />
    </>
  )
}else{
  return(
    <>
    <Container>
        <Title>
          <ContentHeader title={'Select a Date'} />
        </Title>
        <Buttons>
          <FormControl className={classes.formControl} >
            <InputLabel htmlFor="grouped-select">Month</InputLabel>
            <Select defaultValue="" id="grouped-select" onChange={changeData}>
              <MenuItem value="01">January</MenuItem>
              <MenuItem value="02">February</MenuItem>
              <MenuItem value="03">March</MenuItem>
              <MenuItem value="04">April</MenuItem>
              <MenuItem value="05">May</MenuItem>
              <MenuItem value="06">June</MenuItem>
              <MenuItem value="07">July</MenuItem>
              <MenuItem value="08">August</MenuItem>
              <MenuItem value="09">September</MenuItem>
              <MenuItem value="10">October</MenuItem>
              <MenuItem value="11">November</MenuItem>
              <MenuItem value="12">December</MenuItem>
            </Select>
          </FormControl>
        </Buttons>
      </Container>
      <Cards>
      
      <MovimentCards 
        title="PLANS"
        amount={plans}
        footerlabel = "Total of Plans"
        icon="list"
        color="#3f51b5"
        loading={loading}
      />
      <MovimentCards 
        title="MONTH ZIPS"
        amount={zips}
        footerlabel = "Month Total - Zips"
        icon="location"
        color="#ff723b"
        loading={loading}
      />
      <MovimentCards 
        title="TOTAL ZIPS"
        amount={totalZips}
        footerlabel = "Total Zips"
        icon="wifi"
        color="#3f51b5"
        loading={loading}
      />
      <MovimentCards 
        title="PROVIDERS"
        amount={providers}
        footerlabel = "Total of providers"
        icon="wifi"
        color="#ff723b"
        loading={loading}
      />
      </Cards>
      <ContentDashboard data={days} loading={loading} actualMonth={actualMonth} date={month}/>
    </>
  )
}
  
}

