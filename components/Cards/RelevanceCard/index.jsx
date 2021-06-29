import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Image, Title } from './styles.js';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    maxHeight: 230
  },
  media: {
    height: 100,
    width: 250
  },
});

export function RelevanceCard(props) {
  const classes = useStyles();
  return (
    <>
     <Container key={props._id}>
       <Image>
          <img src={props.image}/>
       </Image>
       <Title>
          {props.title}
       </Title>
     </Container>
    </>
  );
}

export default RelevanceCard;
