import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import getImage from '../../../components/Functions/getImage'
import DeleteWarningProviders from '../../Popup/DeleteWarningProviders'
import EditProviderContext from '../../../Context/EditProviderContext'
import PopupEditProviders from '../../Popup/PopupEditProviders'

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
  },
  media: {
    height: 100,
  },
});

export function ProvidersCard(props) {
  const classes = useStyles();

  const [showDelete, setShowDelete] = useState(false)
  const [open, setOpen] = useState(false)
  const id = props.id;
  const title = props.title;
  const phone = props.phone;
  const caps = props.caps;
  const price = props.price;
  const link = props.link;
  const speed = props.speed;
  const relevance = props.relevance;
  const telephone = props.telephone;
  const trimImage = getImage(props.image)


    function handleOpen() {
      setOpen(true);
    }
    async function handleDelete(e){
      // const res = await axios.delete(`/api/providers/${props.id}`)
      // res.status
      // window.location.reload()
      setShowDelete(true)
    }

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea style={{padding: "15px"}}>
        <Typography gutterBottom variant="h6" component="h6" alignSelf="center" direction="column" alignItems="center" justify="center" style={{textTransform: "uppercase", textAlign: "center", fontWeight:"700", height:"50px"}}>
              {title}
            </Typography>
          <CardMedia
            className={classes.media}
            image={trimImage}
            width= "40px"
            height= "100px"
            title={title}
          />
          <CardContent>
            
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={handleOpen} size="large" color="primary" >
            Edit
          </Button>
          <Button onClick={handleDelete} size="small" color="secondary">
            Delete
          </Button>
        </CardActions>
      </Card>
      <EditProviderContext.Provider value={{trimImage, showDelete, setShowDelete,id, open, setOpen, title, phone, telephone, caps, speed, link, price, relevance}}>
      <DeleteWarningProviders />
      <PopupEditProviders />
      </EditProviderContext.Provider>
    </>
  );
}

export default ProvidersCard;
 