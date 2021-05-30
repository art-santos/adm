import React, { useState, useEffect } from "react";
import Container from "./styles";
import PlansCard from "../../Cards/PlansCard/index";
import BlueSpinner from "../../Loading/blueSpinner";
import usePlans from "../../Hooks/usePlans";
import axios from "axios";
import useSWR from "swr";

export default function Content() {
  const [plans, setPlans] = useState([])
  
  useEffect(async () => {
   const result = await axios("/api/plans/90024/", {
    headers: {                  
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization", 
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
      "Content-Type": "application/json;charset=UTF-8"                   
  }})
   setPlans(result.data.items)
   console.log(plans);
  }, [])

  return (
    <>
      <div>
        <Container>
          {plans.map((item, i) => {
            return(
              <PlansCard title={item.name}/>
            )
          })}  
        </Container>
      </div>
    </>
  );
}
