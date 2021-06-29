import React, { useState, useEffect, useContext } from "react";
import Container from "./styles";
import ProvidersCard from "../../Cards/ProvidersCard/index";
import AddProviderContext from '../../../Context/AddProviderContext';
import axios from "axios";

export default function ContentProviders({data}) {
  const [plans, setPlans] = useState([])
  const {setRelevance, relevance} = useContext(AddProviderContext)

  useEffect(() => {
   setPlans(data)
   setRelevance((data).length+1)
  }, [])

  

  return (
    <>
        <Container>
          {plans.map((item, i) => {
            return(
              <ProvidersCard id={item._id} image={item.image} title={item.provider} phone={item.phone} telephone={item.tel}/>
            )
          })}  
        </Container>
    </>
  );
}
