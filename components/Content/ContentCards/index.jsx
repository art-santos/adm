import React, { useState, useEffect } from "react";
import Container from "./styles";
import PlansCard from "../../Cards/PlansCard/index";
import BlueSpinner from "../../Loading/blueSpinner";
import usePlans from "../../Hooks/usePlans";
import axios from "axios";

export default function Content(provider) {
  const [plans, setPlans] = useState([])
  
  useEffect(async () => {
   const result = await axios(`https://cors-anywhere.herokuapp.com/https://admin.cleverping.com/api/plans/`, {
    headers: {                  
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization", 
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
      "Content-Type": "application/json;charset=UTF-8"                   
  }})
   setPlans(result.data.items)
   console.log(provider.provider);
  }, [])

  return (
    <>
        <Container>
          {plans.map((item, i) => {
            return(
              <PlansCard image={item.image} title={item.name} speedtitle={item.speedtitle} dolar={item.price} cents={item.dolar} highlight1={item.desc1} highlight2={item.desc2} highlight3={item.desc3} highlight4={item.desc4}/>
            )
          })}  
        </Container>
    </>
  );
}
