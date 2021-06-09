import React, { useState, useEffect } from "react";
import Container from "./styles";
import ProvidersCard from "../../Cards/ProvidersCard/index";
import BlueSpinner from "../../Loading/blueSpinner";
import axios from "axios";

export default function ContentProviders(provider) {
  const [plans, setPlans] = useState([])
  
  useEffect(async () => {
   const result = await axios(`/api/providers/`, {
    headers: {                  
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*", 
      "Access-Control-Allow-Methods": "*" ,
      "Content-Type": "*"                   
  }})
   setPlans(result.data.data)
  }, [])

  

  return (
    <>
        <Container>
          {plans.map((item, i) => {
            return(
              <ProvidersCard image={item.image} title={item.provider} phone={item.phone} dolar={item.price} cents={item.dolar} highlight1={item.desc1} highlight2={item.desc2} highlight3={item.desc3} highlight4={item.desc4}/>
            )
          })}  
        </Container>
    </>
  );
}
