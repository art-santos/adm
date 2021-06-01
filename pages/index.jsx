import React, { useState, useEffect } from 'react';
import ContentHeader from '../components/Content/ContentHeader/index';
import { Container, Title, Buttons } from '../styles/MainHeader/styles';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import getMonth from '../components/Functions/Date/getMonth';
import getYear from '../components/Functions/Date/getYear';
import ContentDashboard from '../components/Content/ContentDashboard'

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
useEffect(() => {
  

}, [])
  return (
    <>
      <Container>
        <Title>
          <ContentHeader title={'Select a Date'} />
        </Title>
        <Buttons>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Year</InputLabel>
            <Select defaultValue="" id="grouped-select">
              <MenuItem value={getYear()}>{getYear()}</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-select">Month</InputLabel>
            <Select defaultValue="" id="grouped-select">
              <MenuItem value="">
                <em>{getMonth()}</em>
              </MenuItem>
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
      <ContentDashboard />
    </>
  );
}
