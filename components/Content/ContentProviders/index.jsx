import React, { useState, useEffect, useContext } from "react";
import Container from "./styles";
import ProvidersCard from "../../Cards/ProvidersCard/index";
import AddProviderContext from '../../../Context/AddProviderContext';

export default function ContentProviders({data}) {

  useEffect(async () => {
   setPlans(data)
   setRelevance((data).length+1)
  }, [])

  const [plans, setPlans] = useState([])
  const {setRelevance} = useContext(AddProviderContext)
  

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
