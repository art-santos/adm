import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, Theme, useTheme } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import LabelIcon from '@material-ui/icons/Label';
import LanguageIcon from '@material-ui/icons/Language';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import Logo from '../../Images/Logo';
import Link from 'next/link';
import Router, { useRouter } from 'next/router'


const drawerWidth = 260;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexGrow: 1,
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })
);

export default function LayoutComponent({ children }) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const router = useRouter()
  const [color, setColor] = useState({
    color1: '#fd9168',
    color2: '#396ab3',
    color3: '#396ab3',
    color4: '#396ab3', 
    color5: '#396ab3',
  });


  const [page, setPage] = useState("HOME");
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    localStorage.removeItem('token');
    Router.reload();
  };


  useEffect(async () => {
    if(window.location.pathname == '/'){
      setPage('HOME');
      setColor({
        color1: '#fd9168',
        color2: '#396ab3',
        color3: '#396ab3',
        color4: '#396ab3',
        color5: '#396ab3',
      });
    } 
    if(window.location.pathname == '/plans/'){
      setPage('PLANS');
      setColor({
        color1: '#396ab3',
        color2: '#fd9168',
        color3: '#396ab3',
        color4: '#396ab3',
        color5: '#396ab3',
      });
    } 
    if(window.location.pathname == '/providers/'){
      setPage('PROVIDERS');
      setColor({
        color1: '#396ab3',
        color2: '#396ab3',
        color3: '#fd9168',
        color4: '#396ab3',
        color5: '#396ab3',
      });
    } 
    if(window.location.pathname == '/relevance/'){
      setPage('RELEVANCE');
      setColor({
        color1: '#396ab3',
        color2: '#396ab3',
        color3: '#396ab3',
        color4: '#fd9168',
        color5: '#396ab3',
      });
    } 
    if(window.location.pathname == 'tags/?id=60cf9a535d12990254bff6ab'){
      setPage('TAGS');
      setColor({
        color1: '#396ab3',
        color2: '#396ab3',
        color3: '#396ab3',
        color4: '#396ab3',
        color5: '#fd9168',
      });
    }

  }, [])


  function handleProviders() {
    setPage('PROVIDERS');
    setColor({
      color1: '#396ab3',
      color2: '#396ab3',
      color3: '#fd9168',
      color4: '#396ab3',
      color5: '#396ab3',
    });
  }
  
  
  function handleRelevance() {
    setPage('RELEVANCE');
    setColor({
      color1: '#396ab3',
      color2: '#396ab3',
      color3: '#396ab3',
      color4: '#fd9168',
      color5: '#396ab3',
    });
  }
  function handleZips() {
    setPage('TAGS');
    setColor({
      color1: '#396ab3',
      color2: '#396ab3',
      color3: '#396ab3',
      color4: '#396ab3',
      color5: '#fd9168',
    });
  }
  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {page}
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={isOpen}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Link href={'/'}>
            <Logo />
          </Link>
        </div>
        <Divider style={{marginTop:"50px"}} />
        <List style={{overflowY:"scroll", marginTop:"5px"}}>
          <Link href="/internet">
            <ListItem
              button
              key={'PLANS'}
              value={'PLANS'}
              onClick={handleProviders}
            >
              <ListItemIcon>
                <HeadsetMicIcon style={{ color: router.pathname === "/internet" ? "rgb(253, 145, 104)" : "#396ab3" }}/>
              </ListItemIcon>
              <ListItemText primary={'INTERNET'} />
            </ListItem>
          </Link>
          <Link href="/internet/relevance">
            <ListItem
              button
              key={'RELEVANCE'}
              value={'RELEVANCE'}
              onClick={handleRelevance}
            >
              <ListItemIcon>
                <SwapVertIcon style={{ color: router.pathname === "/internet/relevance" ? "rgb(253, 145, 104)" : "#396ab3" }} />
              </ListItemIcon>
              <ListItemText primary={'INTERNET RELEVANCE'} />
            </ListItem>
          </Link>
          <Link href="/mobile">
            <ListItem
              button
              key={'PLANS'}
              value={'PLANS'}
              onClick={handleProviders}
            >
              <ListItemIcon>
                <HeadsetMicIcon style={{ color: router.pathname === "/mobile" ? "rgb(253, 145, 104)" : "#396ab3" }} />
              </ListItemIcon>
              <ListItemText primary={'MOBILE'} />
            </ListItem>
          </Link>
          <Link href="/mobile/relevance">
            <ListItem
              button
              key={'RELEVANCE'}
              value={'RELEVANCE'}
              onClick={handleRelevance}
            >
              <ListItemIcon>
                <SwapVertIcon style={{ color: router.pathname === "/mobile/relevance" ? "rgb(253, 145, 104)" : "#396ab3" }} />
              </ListItemIcon>
              <ListItemText primary={'MOBILE RELEVANCE'} />
            </ListItem>
          </Link>
          <Link href="/phone">
            <ListItem
              button
              key={'PLANS'}
              value={'PLANS'}
              onClick={handleProviders}
            >
              <ListItemIcon>
                <HeadsetMicIcon style={{ color: router.pathname === "/phone" ? "rgb(253, 145, 104)" : "#396ab3" }} />
              </ListItemIcon>
              <ListItemText primary={'PHONE'} />
            </ListItem>
          </Link>
          <Link href="/phone/relevance">
            <ListItem
              button
              key={'RELEVANCE'}
              value={'RELEVANCE'}
              onClick={handleRelevance}
            >
              <ListItemIcon>
                <SwapVertIcon style={{ color: router.pathname === "/phone/relevance" ? "rgb(253, 145, 104)" : "#396ab3" }} />
              </ListItemIcon>
              <ListItemText primary={'PHONE RELEVANCE'} />
            </ListItem>
          </Link>
          <Link href="/streaming">
            <ListItem 
              button
              key={'PLANS'}
              value={'PLANS'}
              onClick={handleProviders}
            >
              <ListItemIcon>
                <HeadsetMicIcon style={{ color: router.pathname === "/streaming" ? "rgb(253, 145, 104)" : "#396ab3" }} />
              </ListItemIcon>
              <ListItemText primary={'STREAMING'} />
            </ListItem>
          </Link>
          <Link href="/streaming/relevance">
            <ListItem
              button
              key={'RELEVANCE'}
              value={'RELEVANCE'}
              onClick={handleRelevance}
            >
              <ListItemIcon>
                <SwapVertIcon style={{ color: router.pathname === "/streaming/relevance" ? "rgb(253, 145, 104)" : "#396ab3" }} />
              </ListItemIcon>
              <ListItemText primary={'STREAMING RELEVANCE'} />
            </ListItem>
          </Link>
          
          <Link href="/insurance">
            <ListItem
              button
              key={'PLANS'}
              value={'PLANS'}
              onClick={handleProviders}
            >
              <ListItemIcon>
                <HeadsetMicIcon style={{ color: router.pathname === "/insurance" ? "rgb(253, 145, 104)" : "#396ab3" }} />
              </ListItemIcon>
              <ListItemText primary={'INSURANCE'} />
            </ListItem>
          </Link>
          <Link href="/insurance/relevance">
            <ListItem
              button
              key={'RELEVANCE'}
              value={'RELEVANCE'}
              onClick={handleRelevance}
            >
              <ListItemIcon>
                <SwapVertIcon style={{ color: router.pathname === "/insurance/relevance" ? "rgb(253, 145, 104)" : "#396ab3" }} />
              </ListItemIcon>
              <ListItemText primary={'INSURANCE RELEVANCE'} />
            </ListItem>
          </Link>
          <Link href="/tv">
            <ListItem
              button
              key={'PLANS'}
              value={'PLANS'}
              onClick={handleProviders}
            >
              <ListItemIcon>
                <HeadsetMicIcon style={{ color: router.pathname === "/tv" ? "rgb(253, 145, 104)" : "#396ab3" }} />
              </ListItemIcon>
              <ListItemText primary={'TV'} />
            </ListItem>
          </Link>
          
          <Link href="/tv/relevance">
            <ListItem
              button
              key={'RELEVANCE'}
              value={'RELEVANCE'}
              onClick={handleRelevance}
            >
              <ListItemIcon>
                <SwapVertIcon style={{ color: router.pathname === "/tv/relevance" ? "rgb(253, 145, 104)" : "#396ab3" }} />
              </ListItemIcon>
              <ListItemText primary={'TV RELEVANCE'} />
            </ListItem>
          </Link>
          <Link href="/home_security">
            <ListItem
              button
              key={'PLANS'}
              value={'PLANS'}
              onClick={handleProviders}
            >
              <ListItemIcon>
                <HeadsetMicIcon style={{ color: router.pathname === "/home_security" ? "rgb(253, 145, 104)" : "#396ab3" }} />
              </ListItemIcon>
              <ListItemText primary={'HOME SECURITY'} />
            </ListItem>
          </Link>
          <Link href="/home_security/relevance">
            <ListItem
              button
              key={'RELEVANCE'}
              value={'RELEVANCE'}
              onClick={handleRelevance}
            >
              <ListItemIcon>
                <SwapVertIcon style={{ color: router.pathname === "/home_security/relevance" ? "rgb(253, 145, 104)" : "#396ab3" }} />
              </ListItemIcon>
              <ListItemText primary={'HOME SECURITY RELEVANCE'} />
            </ListItem>
          </Link>
          <Link href="/credit_cards">
            <ListItem
              button
              key={'PLANS'}
              value={'PLANS'}
              onClick={handleProviders}
            >
              <ListItemIcon>
                <HeadsetMicIcon style={{ color: router.pathname === "/credit_cards" ? "rgb(253, 145, 104)" : "#396ab3" }} />
              </ListItemIcon>
              <ListItemText primary={'CREDIT CARDS'} />
            </ListItem>
          </Link>
          <Link href="/credit_cards/relevance">
            <ListItem
              button
              key={'RELEVANCE'}
              value={'RELEVANCE'}
              onClick={handleRelevance}
            >
              <ListItemIcon>
                <SwapVertIcon style={{ color: router.pathname === "/credit_cards/relevance" ? "rgb(253, 145, 104)" : "#396ab3" }} />
              </ListItemIcon>
              <ListItemText primary={'CREDIT CARD RELEVANCE'} />
            </ListItem>
          </Link>
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
}
