import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 1920,
    maxHeight: 230
  },
  media: {
    height: 110,
    width: 300
  },
});

export function RelevanceCard(props) {
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
            height= "90px"
            title={props.title}
            style={{margin: "auto"}}
          />
          <CardContent>

          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default RelevanceCard;
