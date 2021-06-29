import React,{useState, useContext, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputCsv from '../../Form/CsvInput/index'
import AddProviderContext from '../../../Context/AddProviderContext';
import CircularProgress from '@material-ui/core/CircularProgress';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import AddPlanContext from '../../../Context/AddPlanContext';


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

export default function PopupPlans({provider}) {
  const {opened, setOpened} = useContext(AddPlanContext)

  const classes = useStyles();
  const [file, setFile] = useState("");
  const [display, setDisplay] = useState("none")
  const [name, setName] = useState("");
  const [price, setPrice] = useState("00,00");
  const [speed, setSpeed] = useState(100);
  const [speedTitle, setSpeedTitle] = useState("100 Mbps")
  const [load, setLoad] = useState(false);
  const [type, setType] = useState("internet");
  const [highlight1, setHighlight1] = useState(""); 
  const [highlight2, setHighlight2] = useState("");
  const [highlight3, setHighlight3] = useState("");
  const [highlight4, setHighlight4] = useState("");

  function handleClose(){
   setOpened(false)
  }
  const handleName = (e) => {
    setName(e)
  };

  const handlePrice = (e) => {
    const re = /^[0-9, ]+$/;
    if (e === '' || re.test(e)) {
      setPrice(e)
   }
 };
 const handleSpeed = (e) => {
  const re = /^[0-9]+$/;
  if (e === '' || re.test(e)) {
    setSpeed(e)
 }
};
const handleSpeedTitle = (e) => {
    setSpeedTitle(e)
};

 const handleType = (e) => {
  setType(e)
}
  const handleHighlight1 = (e) => {
      setHighlight1(e)
  };
  const handleHighlight2 = (e) => {
    setHighlight2(e)
};
  const handleHighlight3 = (e) => {
    setHighlight3(e)
  };
  const handleHighlight4 = (e) => {
    setHighlight4(e)
  };

  const handleChange = async (e) => {
    setLoad(true)
    setFile(e.name)
    setDisplay('block')
    setLoad(false)
  }

  const handleSubmit = (e) => {
    setLoad(true)
    e.preventDefault()
    try{
      axios.post('/api/plans', 
     {
      "provider":provider,
      "name":name,
      "speed":speed,
      "speedtitle":speedTitle,
      "price":price,
      "desc1":highlight1,
      "desc2":highlight2,
      "desc3":highlight3,
      "desc4":highlight4,
      "type":type
      })
    }catch(e){
      setFullLoad(false)
    }
    setLoad(false)
    handleClose()
    window.location.reload()
  }

  return (  
      <>
        <Dialog open={opened} aria-labelledby="form-dialog-title">
        {load ?<div style={{height: "500px", width:"500px", display: "flex", justifyContent:"center", alignItems:"center"}}> <CircularProgress /> </div>: <>
        <DialogTitle id="form-dialog-title" style={{ textAlign: "center"}}>{provider.toUpperCase()}</DialogTitle>
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
          onChange={(e) => {handleName(e.target.value)}}
        />
        <TextField
          fullWidth
          id="price"
          name="price"
          label="Price"
          type="price"
          variant="outlined"
          required={true}
          style={{marginTop:"15px"}}
          value={price}
          onChange={(e) => {handlePrice(e.target.value)}}
          inputProps={{maxLength:6}}
        />
        {/* <TextField
          fullWidth
          id="speed"
          name="speed"
          label="Speed"
          type="text"
          variant="outlined"
          required={true}
          style={{marginTop:"15px"}}
          value={speed}
          onChange={(e) => {handleSpeed(e.target.value)}}
          inputProps={{maxLength :10}}
        /> */}
        <TextField
          fullWidth
          id="SpeedTitle"
          name="SpeedTitle"
          label="SpeedTitle"
          type="SpeedTitle"
          variant="outlined"
          required={true}
          style={{marginTop:"15px"}}
          value={speedTitle}
          onChange={(e) => {handleSpeedTitle(e.target.value)}}
          inputProps={{maxLength :10}}
        />
        <InputLabel id="demo-simple-select-helper-label" style={{marginTop:"15px"}}>Type</InputLabel >
        <Select
          labelId="simple-select-label"
          id="simple-select"
          label="Type"
          value={type}
          fullWidth
          onChange={(e) => {handleType(e.target.value)}}
        >
          <MenuItem value={'internet'}>Internet</MenuItem>
          <MenuItem value={'phone'}>Phone</MenuItem>
          <MenuItem value={'video'}>Video</MenuItem>
          <MenuItem value={'bundles'}>Bundles</MenuItem>
          <MenuItem value={'mobile'}>Mobile</MenuItem>
        </Select>
        <TextField
          fullWidth
          id="highlight1"
          name="highlight1"
          type="text"
          label="Highlight 1"
          variant="outlined"
          required={true}
          style={{marginTop:"15px"}}
          value={highlight1}
          onChange={(e) => {handleHighlight1(e.target.value)}}
          inputProps={{maxLength : 50}}
        />
        <TextField
          fullWidth
          id="highlight2"
          name="highlight2"
          label="Highlight 2"
          type="text"
          variant="outlined"
          required={true}
          style={{marginTop:"15px"}}
          value={highlight2}
          onChange={(e) => {handleHighlight2(e.target.value)}}
          inputProps={{maxLength :50}}
        />
        <TextField
          fullWidth
          id="highlight3"
          name="highlight3"
          label="Highlight 3"
          type="text"
          variant="outlined"
          required={true}
          style={{marginTop:"15px"}}
          value={highlight3}
          onChange={(e) => {handleHighlight3(e.target.value)}}
          inputProps={{maxLength :50}}
        />
        <TextField
          fullWidth
          id="highlight4"
          name="highlight4"
          label="Highlight 4"
          type="text"
          variant="outlined"
          required={true}
          style={{marginTop:"15px"}}
          value={highlight4}
          onChange={(e) => {handleHighlight4(e.target.value)}}
          inputProps={{maxLength :50}}
        />
        <InputCsv handleChange={handleChange} file={file}/>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <Button color="primary" variant="contained"  type="submit" style={{marginBottom:"15px", display:display}}>
          Submit
        </Button>
        <Button onClick={handleClose} color="secondary" variant="contained" onClick={handleClose} style={{marginBottom:"15px"}}>
          Cancel
        </Button>
        </div> 
      </form></>}
      </Dialog>
   </>   
  );
}