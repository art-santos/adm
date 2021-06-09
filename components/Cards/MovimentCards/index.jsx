import React from 'react'
import {Container, Content, ContentIcon} from './styles.js'
import ListAltIcon from '@material-ui/icons/ListAlt';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import BlueSpinner from "../../Loading/blueSpinner";
import AnimatedNumber from "animated-number-react";



function MovimentCards(props) {

  function getIcon(){
    if(props.icon == 'list'){
      return <ListAltIcon style={{color: "white", fontSize:"140px", overflow: "auto", opacity:"0.6"}}/>
    }
    if(props.icon == 'location'){
      return <LocationOnIcon style={{color: "white", fontSize:"140px", overflow: "auto", opacity:"0.6"}} />
    }
    if(props.icon == 'wifi'){
      return <WifiTetheringIcon style={{color: "white", fontSize:"140px", overflow: "auto", opacity:"0.6"}}/>
    }
  }

  if (props.loading) {
    return (
      <>
      <Container color={props.color}>
        <Content>
        <span>{props.title}</span>
          <BlueSpinner />
          <small>{props.footerlabel}</small>
        </Content>  
        <ContentIcon>
        {getIcon()}
        </ContentIcon>
      </Container>
      </>
    )
  }else{
    return(
      <>
      <Container color={props.color}>
        <Content>
          <span>{props.title}</span>
          <AnimatedNumber
          value={props.amount}
          formatValue={(value) => value.toFixed(0)}
          style={{
            transition: '0.8s ease-out',
            fontSize: 48,
        }}
        />
          <small>{props.footerlabel}</small>
        </Content>  
        <ContentIcon>
        {getIcon()}
        </ContentIcon>
      </Container>
    </>
    )
  }
}
export default MovimentCards;
