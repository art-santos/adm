import React, { useState, useEffect } from "react";
import Container from "./styles";
import PlansCard from "../../Cards/PlansCard/index";
import BlueSpinner from "../../Loading/blueSpinner";
import axios from "axios";

export default function Content(provider) {
  const [plans, setPlans] = useState([])
  
  useEffect(async () => {
   const result = await axios(`/api/plans/`, {
    headers: {                  
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*", 
      "Access-Control-Allow-Methods": "*" ,
      "Content-Type": "*"                   
  }})
   setPlans(result.data.items)
  }, [])

  const filteredPlans = plans.filter(item => {
   return (item.provider == provider.provider)
 })

  return (
    <>
        <Container>
          {filteredPlans.map((item, i) => {
            return(
              <PlansCard image={item.image} title={item.name} speedtitle={item.speedtitle} dolar={item.price} cents={item.dolar} highlight1={item.desc1} highlight2={item.desc2} highlight3={item.desc3} highlight4={item.desc4}/>
            )
          })}  
        </Container>
    </>
  );
}
