import React, {useEffect, useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios'
import EditTagContext from '../../../Context/EditTagContext'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 100,
  },
  margin: {
    margin: theme.spacing(1),
  }
}));

export function PlansAlt() {
  const classes = useStyles();

   
  const [metatitle, setMetatitle] = useState("");
  const [metadesc, setMetadesc] = useState("");
  const [ogtitle, setOgtitle] = useState("");
  const [ogdesc, setOgdesc] = useState("");
  const [page, setPage] = useState("60cf9a535d12990254bff6ab");
  const [location, setLocation] = useState("")
  
  useEffect(async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const res = await axios(`/api/metatags/${urlParams.get('id')}`, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*'
      }})
    if(urlParams.get('id')){
      setPage(urlParams.get('id'))
    }else{
      setPage('60cf9a535d12990254bff6ab')
    }
    
    setLocation(res.data.items[0].page)
    setMetatitle(res.data.items[0].metatags.title)
    setMetadesc(res.data.items[0].metatags.description)
    setOgtitle(res.data.items[0].metatags.ogtitle)
    setOgdesc(res.data.items[0].metatags.ogdescription)
    console.log(metatitle)
    console.log(metadesc)
    console.log(ogtitle)
    console.log(ogdesc)
  },[])


  function handleMetatitle(e){
    setMetatitle(e)
    console.log(metatitle)
  }
  function handleMetadesc(e){
    setMetadesc(e)
    console.log(metadesc)
  }
  function handleOgtitle(e){
    setOgtitle(e)
    console.log(ogtitle)
  }
  function handleOgdesc(e){
    setOgdesc(e)
    console.log(ogdesc)
  }

  async function handleSubmit(e){
    try{
   await axios.put(`/api/metatags/${page}`, {
      "metatags":
      {
      "title":metatitle, 
      "description": metadesc, 
      "ogtitle":ogtitle, 
      "ogdescription":ogdesc
    }
    })
  }catch(e){
    console.log(e)
  }
    window.location.reload()
  }

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea style={{padding: "15px"}}>
        <Typography gutterBottom variant="h3" component="h3" color="primary" style={{textAlign: "center"}}>
          {location.toUpperCase()}
          </Typography>
          <CardContent style={{display: "grid", gridTemplateColumns: "1fr", gridGap:"50px"}}>
          <FormControl className={classes.margin} spacing={1} style={{display: "grid", gridTemplateColumns: "1fr", gridGap:"15px"}}>
            <Typography gutterBottom variant="h6" component="h6" >
              TITLE
            </Typography>
            <TextField
            required
            id="outlined"
            value={metatitle}
            variant="outlined"
            onChange ={(e) => {handleMetatitle(e.target.value)}}
          />
          <Typography gutterBottom variant="h6" component="h6" >
              DESCRIPTION
          </Typography>
          <TextField
            required
            id="outlined"
            value={metadesc}
            variant="outlined"
            onChange ={(e) => {handleMetadesc(e.target.value)}}
          />
          <Typography gutterBottom variant="h6" component="h6" >
              OG:TITLE
            </Typography>
          <TextField
            required
            id="outlined"
            value={ogtitle}
            variant="outlined"
            onChange ={(e) => {handleOgtitle(e.target.value)}}
          />
          <Typography gutterBottom variant="h6" component="h6"  >
              OG:DESCRIPTION
          </Typography>
          <TextField
            required
            id="outlined"
            value={ogdesc}
            variant="outlined"
            onChange ={(e) => {handleOgdesc(e.target.value)}}
          />
          </FormControl>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="large" color="primary" onClick={handleSubmit}>
            Save
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default PlansAlt;