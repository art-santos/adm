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
    height: 100,
  },
});

export function ProvidersCard(props) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea style={{padding: "15px"}}>
        <Typography gutterBottom variant="h6" component="h6" alignSelf="center" direction="column" alignItems="center" justify="center" style={{textTransform: "uppercase", textAlign: "center", fontWeight:"700", height:"50px"}}>
              {props.title}
            </Typography>
          <CardMedia
            className={classes.media}
            image={'/' + props.image}
            width= "50px"
            height= "100px"
            title={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6" style={{ textAlign: "center", fontWeight:"700"}}>
              {props.phone}
            </Typography>
            
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="large" color="primary" >
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

export default ProvidersCard;
