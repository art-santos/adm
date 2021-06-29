import React, {useState} from 'react';
import ContentHeader from '../components/Content/ContentHeader/index';
import ContentProviders from '../components/Content/ContentProviders/index';
import { Container, Title, Buttons } from '../styles/MainHeader/styles';
import Button from '@material-ui/core/Button';
import PopupProviders from '../components/Popup/PopupProviders/index'
import AddProviderContext from '../Context/AddProviderContext';

const Pages = ({data}) => {
  const [open, setOpen] = useState(false);
  const [relevance, setRelevance] = useState();

  function handleOpen(){
    setOpen(true)
  }

  return (
    <>
    <AddProviderContext.Provider value={{setOpen, open, setRelevance, relevance}}>
      <Container style={{width: "80%"}}>
          <Title>
              <ContentHeader title={'Providers'} />
          </Title>
              <Button onClick={handleOpen} variant="contained" color="primary" size="large" style={{width: "40%", height: "50%", margin:"auto", marginRight:"0px"}}>
                ADD NEW
              </Button>
      </Container>  
        <ContentProviders data={data}/>
        <PopupProviders />
    </AddProviderContext.Provider>
    </>
  );
};
 
export default Pages;

Pages.getInitialProps = async (ctx) => {
      const res = await fetch("https://clever-admin.vercel.app/api/providers/")
      const json = await res.json()
    return {
      data: json.data
  }
}