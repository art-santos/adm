import React, { useState, useEffect } from 'react';
import ContentHeader from '../components/Content/ContentHeader/index';
import { Container, Title, Buttons } from '../styles/MainHeader/styles';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ContentCards from '../components/Content/ContentCards';

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
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

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
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>ATT</MenuItem>
            <MenuItem value={20}>FRONTIER</MenuItem>
            <MenuItem value={30}>CENTURYLINK</MenuItem>
          </Select>
        </FormControl>
      </Container>
      <ContentCards />
    </>
  );
}
