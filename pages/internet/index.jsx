import React, {useState, useEffect} from 'react';
import ContentHeader from '../../components/Content/ContentHeader/index';
import ContentProviders from '../../components/Content/ContentProviders/index';
import { Container, Title, Buttons } from '../../styles/MainHeader/styles';
import Button from '@material-ui/core/Button';
import PopupProviders from '../../components/Popup/PopupProviders/index'
import AddProviderContext from '../../Context/AddProviderContext';
import axios from 'axios'

export const Pages = ({data}) => {
  const [open, setOpen] = useState(false);
  const [relevance, setRelevance] = useState();
  data.sort((a, b) => a.relevance - b.relevance)
  function handleOpen(){
    setOpen(true)
  }

  return (
    <>
    <AddProviderContext.Provider value={{setOpen, open, setRelevance, relevance, data}}>
      <Container style={{width: "80%"}}>
          <Title>
              <ContentHeader title={'Providers'} />
          </Title>
              <Button onClick={handleOpen} variant="contained" color="primary" size="large" style={{width: "40%", height: "50%", margin:"auto", marginRight:"0px"}}>
                ADD NEW
              </Button>
      </Container>  
        <ContentProviders data={data}/>
        <PopupProviders len={data.length}/>
    </AddProviderContext.Provider>
    </>
  );
};
 
export default Pages;
export async function getServerSideProps(context) {
  const res = await fetch("https://backend-cp.herokuapp.com/api/plans/internet", {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }})
      const json = await res.json()

    return {
      props:{data: json.plans}
  }
}

// Pages.getInitialProps = async (ctx) => {
//       const res = await fetch("http://clever-admin.vercel.app/api/providers/", {
//         mode: 'cors',
//         headers: {
//           'Access-Control-Allow-Origin':'*'
//         }})
//       const json = await res.json()

//     return {
//       data: json.data
//   }
// }
