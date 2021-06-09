import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function BlueSpinner() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <CircularProgress style={{ margin: 'auto', color: "rgb(72, 168, 245)" }}/>
      </div>
    </>
  );
}
