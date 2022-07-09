import React,{useState, useContext} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import ImageInput from '../../Form/ImageInput/index'
import sendToCloud from '../../Functions/sendToCloud'
import AddProviderContext from '../../../Context/AddProviderContext'
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios'
import { Input } from '@material-ui/core';
import Papa from "papaparse";

export default function PopupProviders({len}) {
  const {open, setOpen, relevance} = useContext(AddProviderContext)
  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);
  const [display, setDisplay] = useState("none")
  const [telephone, setTelephone] = useState("")
  const [zips, setZips] = useState([])
  const [name, setName] = useState("")
  const [this_caps, setCaps] = useState("")
  const [this_price, setPrice] = useState("")
  const [this_link, setLink] = useState("")
  const [this_speed, setSpeed] = useState("")
  const [this_relevance, setRelevance] = useState("")
  const [tel, setTel] = useState(telephone)
  const [load, setLoad] = useState(false);
  
  function handleClose(){
   setOpen(false)
  }
  const handleName = (e) => {
    setName(e)
  };

 const handleFile = async (e) => {
  await Papa.parse(e, {
    fastMode: false,
    chunkSize: 10000,
    RemoteChunkSize: 100000000,
    header: false,
    skipEmptyLines: true,
    complete: function (results) {
      setZips(results.data.join(','))
    },
  });
}

  const handleTelephone = (e) => {
    const re = /^[0-9\b]+$/;
    if (e === '' || re.test(e)) {
      setTelephone(e)
   }
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

  const handleSpeed = (e) => {
    const re = /^[0-9\b]+$/;
    if (e === '' || re.test(e)) {
      setSpeed(e)
   }
  }

  const handleRelevance = (e) => {
    setRelevance(e)
  }

  const handleTel = (e) => {
    setTel(e)
  }

  const handleChange = async (e) => {
    setLoad(true)
    const res = await sendToCloud(e)
    setImage(res.url)
    setDisplay("block")
    setLoad(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      await axios.post('https://backend-cp.herokuapp.com/api/create-plan', 
    {
      "tel": tel,
      "name": name,
      "image": image,
      "provider": name,
      "caps": this_caps,
      "price": this_price,
      "link": this_link,
      "speed": this_speed,
      "relevance": len+1,
      "zip": zips
      })
    }catch(e){
      setFullLoad(false)
    }
    window.location.reload()
  }

  return (  
      <>
        <Dialog open={open} aria-labelledby="form-dialog-title">
        {load ?<div style={{height: "500px", width:"500px", display: "flex", justifyContent:"center", alignItems:"center"}}> <CircularProgress /> </div>: <>
        <DialogTitle id="form-dialog-title" style={{ textAlign: "center"}}>PROVIDER INFO</DialogTitle>
        <form onSubmit={(e) => {handleSubmit(e)}} style = {{ height: "500px", padding:"50px"}}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Provider Name"
          variant="outlined"
          required={true}
          value={name}
          onChange={(e) => {handleName(e.target.value)}}
        />
        
        <TextField
          fullWidth
          id="telephone"
          name="telephone"
          label="telephone (18335310303)"
          type="phone"
          variant="outlined"
          required={true}
          style={{marginTop:"15px"}}
          value={telephone}
          onChange={(e) => {handleTelephone(e.target.value)}}
          inputProps={{maxLength :11}}
        />
        <TextField
          fullWidth
          id="speed"
          name="speed"
          label="speed (1000)"
          type="phone"
          variant="outlined"
          required={true}
          style={{marginTop:"15px"}}
          value={this_speed}
          onChange={(e) => {handleSpeed(e.target.value)}}
          inputProps={{maxLength :4}}
        />
        <TextField
          fullWidth
          id="caps"
          name="caps"
          label="caps (Unlimited)"
          type="phone"
          variant="outlined"
          required={true}
          style={{marginTop:"15px"}}
          value={this_caps}
          onChange={(e) => {handleCaps(e.target.value)}}
          inputProps={{maxLength :25}}
        />
        <TextField
          fullWidth
          id="price"
          name="price"
          label="price (10,00)"
          type="phone"
          variant="outlined"
          required={true}
          style={{marginTop:"15px"}}
          value={this_price}
          onChange={(e) => {handlePrice(e.target.value)}}
          inputProps={{maxLength :6}}
        />
        <TextField
          fullWidth
          id="link"
          name="link"
          label="link (/frontier)"
          type="phone"
          variant="outlined"
          required={true}
          style={{marginTop:"15px"}}
          value={this_link}
          onChange={(e) => {handleLink(e.target.value)}}
          inputProps={{maxLength :11}}
        />
        <ImageInput handleChange={handleChange} image={image}/>
        <div style={{display: 'flex',flexDirection:'column', justifyContent: 'space-around', width:"70%", margin:"auto" ,marginTop:"50px", marginBottom:"50px"}}>
        <label for="avatar">Insert CSV file with zips</label>
        <Input type="file" id="zipcodes" name="zipcodes" accept=".csv" placeholder="zipcodes csv file" onChange={(e) => {handleFile(e.target.files[0])}} style={{marginTop:"15px"}} />
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <Button color="primary" variant="contained"  type="submit" style={{marginBottom:"15px", display:display}}>
          Submit
        </Button>
        <Button color="secondary" variant="contained" onClick={handleClose} style={{marginBottom:"15px"}}>
          Cancel
        </Button>
        </div> 
      </form></>}
      </Dialog>
   </>   
  );
}