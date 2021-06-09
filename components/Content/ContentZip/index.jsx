import React, { useState, useEffect } from "react";
import Container from "./styles";
import RelevanceCard from "../../Cards/RelevanceCard/index";
import BlueSpinner from "../../Loading/blueSpinner";
import axios from "axios";

export default function ContentRelevance(provider) {
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
              <>
              <RelevanceCard image={item.image} title={item.provider}/>
              </>
            )
          })}  
        </Container>
    </>
  );
}
