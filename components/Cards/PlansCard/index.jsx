import React, {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PopupEditPlans from '../../Popup/PopupEditPlans';
import DeleteWarningPlans from '../../Popup/DeleteWarningPlans';
import AddPlanContext from '../../../Context/AddPlanContext';
import EditPlanContext from '../../../Context/EditPlanContext';
import getImage from '../../../components/Functions/getImage'
import axios from 'axios'



const useStyles = makeStyles({
  root: {
    maxWidth: 280,
  },
  media: {
    height: 100,
  },
});

export function PlansCard(props) {
  const {provider} = useContext(AddPlanContext)
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const id = props.id
  console.log(props)
  function handleClick(e){
    setOpen(true)
  } 

  function handleDelete(e){
    setShowDelete(true)
  }

  return (
    <>
      <Card className={classes.root} key={props.id}>
        <CardActionArea style={{padding: "15px"}}>
          <CardMedia
            className={classes.media}
            image={getImage(props.image)}
            width= "50px"
            height= "100px"
            title={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6" color="primary">
              $ {props.dolar},{props.cents}
            </Typography>
            <Typography gutterBottom variant="h6" component="h6">
              {props.speedtitle}
            </Typography>
            <Typography gutterBottom variant="h6" component="h6">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ✔ {props.highlight1}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ✔ {props.highlight2}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ✔ {props.highlight3}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ✔ {props.highlight4}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" value={props.id} onClick={handleClick}>
            Edit
          </Button>
          <Button onClick={handleDelete} size="small" color="secondary">
            Delete
          </Button>
        </CardActions>
      </Card>
      <EditPlanContext.Provider value={{open, setOpen, showDelete, setShowDelete, id}}>
      <PopupEditPlans provider={provider} id={props.id} internetspeed={props.internetspeed} title={props.title} mainPrice={props.price} dspeed={props.speedtitle} dhighlight1={props.highlight1} dhighlight2={props.highlight2} dhighlight3={props.highlight3} dhighlight4={props.highlight4} dtype={props.type}/>
      <DeleteWarningPlans />
      </EditPlanContext.Provider>
    </>
  ); 
}

export default PlansCard;
