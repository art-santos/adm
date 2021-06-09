import React, { useState, useEffect } from 'react';
import ContentHeader from '../components/Content/ContentHeader/index';
import { Container, Title, Buttons } from '../styles/MainHeader/styles';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ContentCards from '../components/Content/ContentCards';
import axios from 'axios';

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
  const [providers, setProviders] = useState([])
  const classes = useStyles();
  const [provider, setProvider] = useState('att');
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  
useEffect(async () => {
  const result = await axios("/api/providers/", {
    headers: {                  
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization", 
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
      "Content-Type": "application/json;charset=UTF-8"                   
  }})
  setProviders(result.data.data)
}, [])

  return (
    <>
      <Container>
        <Title>
          <ContentHeader title={'Select a Provider'} />
        </Title>
        <FormControl className={classes.formControl}>
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
            onChange={(e) => {setProvider(e.target.value); console.log(e.target.value)}}
          >
            {providers.map(item => {
              return (
                <MenuItem onClick={(e) => {console.log(e.target.value)}}value={`${item.provider}`}>{item.provider}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Container>
      <ContentCards provider={provider}/>
    </>
  );
}
