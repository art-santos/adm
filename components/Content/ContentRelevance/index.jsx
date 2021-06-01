import React, { useState, useEffect } from "react";
import Container from "./styles";
import RelevanceCard from "../../Cards/RelevanceCard/index";
import BlueSpinner from "../../Loading/blueSpinner";
import axios from "axios";

export default function ContentRelevance(provider) {
  const [plans, setPlans] = useState([])
  
  useEffect(async () => {
   const result = await axios(`https://cors-anywhere.herokuapp.com/https://admin.cleverping.com/api/providers/`, {
    headers: {                  
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization", 
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
      "Content-Type": "application/json;charset=UTF-8"                   
  }})
   setPlans(result.data.data)
  }, [])

  

  return (
    <>
        <Container>
          {plans.map((item, i) => {
            return(
              <>
              <h3>{i+1}.</h3>
              <RelevanceCard image={item.image} title={item.provider}/>
              </>
            )
          })}  
        </Container>
    </>
  );
}
