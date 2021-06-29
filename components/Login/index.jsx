import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import users from '../Data/users';
import Router from 'next/router'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://elevenrush.com/">
        ElevenRush
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(/elevenrushsvg.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: '75% 50%',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(5, 0, 3),
  },
}));

//----------------------------------------------------------------------

export default function SignInSide() {
  const classes = useStyles();
  const [user, setUser] = useState({email: "", password: ""});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)

  useEffect(() => {
    users.map(item => {
      setUser({email: item.email, password: item.password});
    })
  }, [])

 function handleSubmit(e){
   e.preventDefault();
   if(email == user.email && password == user.password){
    localStorage.setItem('token', true)
    setError(false)
    Router.reload();
   }else{
     setError(true)
   }
  }

  return (
    <Grid container component="main" className={classes.root} >
      <CssBaseline />
      <Grid item xs={false} sm={5} md={6} className={classes.image} />
      <Grid item xs={12} sm={7} md={6} component={Paper} elevation={7} square style={{margin: "auto", borderRadius: "15px 0px 0px 15px"}}>
        <div className={classes.paper} >
          
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          
          <form className={classes.form} onSubmit={handleSubmit} action="/">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Elevenrush Mail"
              name="email"
              placeholder="Your Elevenrush Mail"
              autoFocus
              onChange={(e) => {setEmail( e.target.value)}}

            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              placeholder="Your Password"
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => {setPassword( e.target.value)}}
            />
            {error ? <Typography component="p" variant="p" color="secondary">Password or Email invalid</Typography> :  null}
            {/* {<FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />} */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
      
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}