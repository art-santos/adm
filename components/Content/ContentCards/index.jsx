import React, { useState, useEffect } from "react";
import Container from "./styles";
import PlansCard from "../../Cards/PlansCard/index";

export default function ContentCards({content, provider,  providers}) {
    const filteredImage = providers.filter(item => {
      return (item.provider == provider)
   })

  return (
    <>
       <Container>
          {content.map((item, i) => {
            return(
              <PlansCard id={item._id} image={filteredImage[0].image} title={item.name} price={item.price} speedtitle={item.speedtitle} internetspeed={item.internetspeed} dolar={item.price} cents={item.dolar} highlight1={item.desc1} highlight2={item.desc2} highlight3={item.desc3} highlight4={item.desc4} type={item.type}/>            )
          })}  
        </Container> 
    </> 
  ); 
}
