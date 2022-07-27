import React,{useState, useContext, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import EditProviderContext from '../../../Context/EditProviderContext';
import ImageInput from '../../../components/Form/ImageInput/index';
import sendToCloud from '../../Functions/sendToCloud'
import axios from 'axios'
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Input, Radio, RadioGroup, Text, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function PopupEditProviders() {

  const classes = useStyles();
  const {trimImage, open, setOpen, title, phone, caps, price, link, speed, relevance, telephone, id, call_now, order_online, website, is_business} = useContext(EditProviderContext)
  const [orderOnline, setOrderOnline] = React.useState(order_online);
  const [callNow, setCallNow] = React.useState(call_now);
  const [websiteLink, setWebsiteLink] = React.useState(website)
  const [isBusiness, setIsBusiness] = React.useState(is_business)
  const [image, setImage] = useState(trimImage);
  const [file, setFile] = useState(null);
  const [name, setName] = useState(title)
  const [thisTelephone, setThisTelephone] = useState(phone)
  const [this_caps, setCaps] = useState(caps)
  const [this_price, setPrice] = useState(price)
  const [this_link, setLink] = useState(link)
  const [this_speed, setSpeed] = useState(speed)
  const [this_relevance, setRelevance] = useState(relevance)
  const [tel, setTel] = useState(telephone)
  const [load, setLoad] = useState(false);
  
  function handleClose(){
   setOpen(false)
  }
  const handleName = (e) => {
    setName(e)
  };
  const handleCaps =  (e) => {
    setCaps(e)
  }

  const handlePrice = (e) => {
    setPrice(e)
  }

  const handleLink = (e) => {
    setLink(e)
  }

  const handleWebsiteLink = (e) => {
    setWebsiteLink(e)
  }

  const handleSpeed = (e) => {
    setSpeed(e)
  }

  const handleRelevance = (e) => {
    setRelevance(e)
  }

  const handleTel = (e) => {
    setTel(e)
  }

  const handleFile = (e) => {
    setFile(e.target.files[0])
  }

  const handleChange = async (e) => {
    setLoad(true)
    const res = await sendToCloud(e)
    setImage(res.url)
    setLoad(false)
  }

  const handleSubmit = async (e) => {
    setLoad(true)
    e.preventDefault()
    await axios.put(`https://backend-cp.herokuapp.com/api/plans/update/${id}`, {
      image: image,
      name: name,
      provider: name,
      caps: this_caps,
      price: this_price,
      link: this_link,
      speed: this_speed,
      relevance: this_relevance,
      telephone: tel, 
      call_now: callNow,
      order_online: orderOnline,
      is_business: isBusiness,
      website: websiteLink
    })
    setLoad(false)
    handleClose()
    window.location.reload()
  }
  return (  
      <>
        <Dialog open={open} aria-labelledby="form-dialog-title">
        {load ?<div style={{height: "500px", width:"500px", display: "flex", justifyContent:"center", alignItems:"center"}}> <CircularProgress /> </div>: <>
        <DialogTitle id="form-dialog-title" style={{ textAlign: "center"}}>{title.toUpperCase()}</DialogTitle>
        <form onSubmit={(e) => {handleSubmit(e)}} style = {{ padding:"50px"}} className={classes.formControl}>
       
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Provider Name"
          variant="outlined"
          required={false}
          value={name}
          onChange={(e) => {handleName((e.target.value))}}
        />

          <TextField
          fullWidth
          id="Speed"
          name="Speed"
          label="Speed" 
          type="Speed"
          variant="outlined"
          required={false}
          style={{marginTop:"15px"}}
          value={this_speed}
          onChange={(e) => {handleSpeed(e.target.value)}}
          inputProps={{maxLength:11}}
        />

        <TextField
          fullWidth
          id="Caps"
          name="Caps"
          label="Caps"
          type="Caps"
          variant="outlined"
          required={false}
          style={{marginTop:"15px"}}
          value={this_caps}
          onChange={(e) => {handleCaps(e.target.value)}}
          inputProps={{maxLength:25}}
        />

        <TextField
          fullWidth
          id="Link"
          name="Link"
          label="Website Link"
          type="Link"
          variant="outlined"
          required={false}
          style={{marginTop:"15px"}}
          value={this_link}
          onChange={(e) => {handleLink(e.target.value)}}
          inputProps={{maxLength:100}}
        />
        <TextField
          fullWidth
          id="Link"
          name="Link"
          label="Order Online Link"
          type="Link"
          variant="outlined"
          required={false}
          style={{marginTop:"15px"}}
          value={websiteLink}
          onChange={(e) => {handleWebsiteLink(e.target.value)}}
          inputProps={{maxLength:100}}
        />
        <TextField
          fullWidth
          id="Phone"
          name="Phone"
          label="Phone"
          type="Phone"
          variant="outlined"
          required={false}
          style={{marginTop:"15px"}}
          value={tel}
          onChange={(e) => {handleTel(e.target.value)}}
          inputProps={{maxLength:11}}
        />

        <TextField
          fullWidth
          id="Price"
          name="Price"
          label="Price"
          type="Price"
          variant="outlined"
          required={false}
          style={{marginTop:"15px"}}
          value={this_price}
          onChange={(e) => {handlePrice(e.target.value)}}
          inputProps={{maxLength:6}}
        />
        <FormLabel id="demo-radio-buttons-group-label">Buttons available</FormLabel>
        <FormGroup>
          <FormControlLabel control={<Checkbox checked={callNow} onChange={() => {setCallNow(!callNow)}} />}  label="Call Now" />
          <FormControlLabel control={<Checkbox checked={orderOnline} onChange={() => {setOrderOnline(!orderOnline)}} />} label="Order Online" />
        </FormGroup>
        <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Client</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="false"
          name="radio-buttons-group"
        >
          <FormControlLabel value="true" control={<Radio checked={isBusiness} onChange={() => {setIsBusiness(true)}}/>} label="Business" />
          <FormControlLabel value="false" control={<Radio checked={!isBusiness} onChange={() => {setIsBusiness(false)}} />} label="Residential" />
        </RadioGroup>
      </FormControl>

        <TextField
          fullWidth
          id="Relevance"
          name="Relevance"
          label="Relevance"
          type="Relevance"
          variant="outlined"
          disabled={true}
          required={false}
          style={{marginTop:"15px"}}
          value={this_relevance}
          onChange={(e) => {handleRelevance(e.target.value)}}
          inputProps={{maxLength:2}}
        />
        <ImageInput handleChange={handleChange} image={image}/>
        {/* <div style={{display: 'flex', flexDirection:'column', justifyContent: 'space-around', width:"70%", margin:"auto" ,marginTop:"50px", marginBottom:"10px"}}>
        <label for="avatar">Insert CSV file with zips</label>
        <Input type="file" id="zipcodes" name="zipcodes" placeholder="zipcodes csv file" onChange={(e) => {handleFile(e.target.files[0])}} style={{marginTop:"15px"}} />
        </div> */}
        <div style={{display: 'flex', justifyContent: 'space-around', marginTop:"50px", marginBottom:"10px"}}>

        <Button color="primary" variant="contained"  type="submit">
          Submit
        </Button>
        <Button onClick={handleClose} color="secondary" variant="contained">
          Cancel
        </Button>
        </div> 
      </form>
      </>}
      </Dialog>
   </>   
  );
}