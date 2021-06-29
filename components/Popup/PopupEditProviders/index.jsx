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
  const {trimImage, open, setOpen, title, phone, telephone, id} = useContext(EditProviderContext)
  const [image, setImage] = useState(trimImage);
  const [name, setName] = useState(title)
  const [thisTelephone, setThisTelephone] = useState(phone)
  const [tel, setTel] = useState(telephone)
  const [load, setLoad] = useState(false);

  console.log(id + '    1')
  function handleClose(){
   setOpen(false)
  }
  const handleName = (e) => {
    setName(e)
  };
  const handleTelephone = (e) => {
    setThisTelephone(e)
  }
  const handleTel = (e) => {
    setTel(e)
  }

  const handleChange = async (e) => {
    setLoad(true)
    const res = await sendToCloud(e)
    setImage(res.url)
    setLoad(false)
  }

  const handleSubmit = async (e) => {
    console.log(image)
    setLoad(true)
    e.preventDefault()
    await axios.put(`/api/providers/${id}`, {
      provider:name,
      tel: tel,
      phone: thisTelephone,
      image: image
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
        <form onSubmit={(e) => {handleSubmit(e)}} style = {{ height: "500px", padding:"50px"}} className={classes.formControl}>
       
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Plan Name"
          variant="outlined"
          required={true}
          fullWidth
          value={name}
          onChange={(e) => {handleName((e.target.value).toLowerCase())}}
        />

        <TextField
          fullWidth
          id="Phone"
          name="Phone"
          label="Phone"
          type="Phone"
          variant="outlined"
          required={true}
          style={{marginTop:"15px"}}
          value={tel}
          onChange={(e) => {handleTel(e.target.value)}}
          inputProps={{maxLength:11}}
        />

        <TextField
          fullWidth
          id="Telephone"
          name="Telephone"
          label="Telephone"
          type="Telephone"
          variant="outlined"
          required={true}
          style={{marginTop:"15px"}}
          value={thisTelephone}
          onChange={(e) => { handleTelephone(e.target.value)}}
          inputProps={{maxLength:16}}
        />

        <ImageInput handleChange={handleChange} image={image}/>
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