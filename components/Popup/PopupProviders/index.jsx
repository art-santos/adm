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

export default function PopupProviders() {
  const {open, setOpen, relevance} = useContext(AddProviderContext)
  const [image, setImage] = useState("");
  const [display, setDisplay] = useState("none")
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [telephone, setTelephone] = useState("")
  const [load, setLoad] = useState(false)
  
  function handleClose(){
   setOpen(false)
  }
  const handleName = (e) => {
    setName(e)
  };

  const handlePhone = (e) => {
    const re = /^[0-9\n\-() ]+$/;
    if (e === '' || re.test(e)) {
      setPhone(e)
   }
 };

  const handleTelephone = (e) => {
    const re = /^[0-9\b]+$/;
    if (e === '' || re.test(e)) {
      setTelephone(e)
   }
  };

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
      await axios.post('/api/providers', 
     {
      "provider": name,
      "relevance": relevance,
      "tel": telephone,
      "phone":phone,
      "image":image,
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
          fullWidth
          value={name}
          onChange={(e) => {handleName(e.target.value)}}
        />
        <TextField
          fullWidth
          id="phone"
          name="phone"
          label="Phone 1 (833) 531-0303"
          type="phone"
          variant="outlined"
          required={true}
          style={{marginTop:"15px"}}
          value={phone}
          onChange={(e) => {handlePhone(e.target.value)}}
          inputProps={{maxLength :16}}
        />
        <TextField
          fullWidth
          id="telephone"
          name="telephone"
          label="telephone 18335310303"
          type="phone"
          variant="outlined"
          required={true}
          style={{marginTop:"15px"}}
          value={telephone}
          onChange={(e) => {handleTelephone(e.target.value)}}
          inputProps={{maxLength :11}}
        />
        <ImageInput handleChange={handleChange} image={image}/>
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