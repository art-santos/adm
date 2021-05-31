import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
  },
  media: {
    height: 80,
  },
});

export function PlansCard(props) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea style={{padding: "15px"}}>
          <CardMedia
            className={classes.media}
            image={'/' + props.image}
            width= "50px"
            height= "100px"
            title="Contemplative Reptile"
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
          <Button size="small" color="primary">
            Edit
          </Button>
          <Button size="small" color="secondary">
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default PlansCard;
