import React, { useState, useEffect } from 'react';
import ContentHeader from '../components/Content/ContentHeader/index';
import { Container, Title, Buttons } from '../styles/MainHeader/styles';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ContentCards from '../components/Content/ContentCards';
import PopupPlans from '../components/Popup/PopupPlans/index'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import AddPlanContext from '../Context/AddPlanContext';


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


export const Pages = ({data1,data2}) => {
  const [providers, setProviders] = useState([]);
  const [plans, setPlans] = useState([]);
  const [provider, setProvider] = useState('att');
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);

  const filteredPlans = plans.filter(item => {
    return (item.provider == provider)
 })

 useEffect(async () => {
  const urlParams = new URLSearchParams(window.location.search)
  if(urlParams.get('id')){
    setProvider(urlParams.get('id'))
  }else{
    setProvider('att')
  }
}, [])
 

  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOpened = () => {
    setOpened(true)
  };

  
useEffect(() => {
  setProviders(data1)
  setPlans(data2)

}, [])

  return (
    <>
      <Container>
      <Button onClick={handleOpened}variant="contained" color="primary" size="large" style={{width: "20%", height: "100%"}}>
              ADD NEW
      </Button>
        <FormControl className={classes.formControl} style={{width: "50%", height: "50%"}}>
          <InputLabel id="demo-controlled-open-select-label">
            Provider
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={provider}
          >
            {providers.map(item => {
              return (
                <a href={`/plans/?id=${item.provider}`}><MenuItem value={`${item.provider}`}>{item.provider}</MenuItem></a>
              )
            })}
          </Select>
        </FormControl>
      </Container>
      <AddPlanContext.Provider value={{provider, opened, setOpened}}>
      <ContentCards content={filteredPlans} provider={provider} providers={providers}/>
      <PopupPlans provider={provider}/>
      </AddPlanContext.Provider>
    </> 
  );
}

export default Pages

export async function getServerSideProps(context) {
  const res = await fetch("http://clever-admin.vercel.app/api/providers/", {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*'
    }})
  const res1 = await fetch("http://clever-admin.vercel.app/api/plans/", {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*'
    }})
  const json = await res.json();
  const json1 = await res1.json();
  return {
    props: {
      data1: json.data,
      data2: json1.items
    }, 
  }
}

// Pages.getInitialProps = async (ctx) => {
  

//   return 
// }