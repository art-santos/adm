import React, {useState} from 'react';
import ContentHeader from '../../components/Content/ContentHeader/index';
import ContentRelevance from '../../components/Content/ContentRelevance/index';
import { Container, Title, Buttons } from '../../styles/MainHeader/styles';
import DragAndDropCard from '../../components/Cards/DragAndDropCards/index'
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import AlertDialog from '../../components/Popup/PopupProviders/index'
import RelevanceContext from '../../Context/RelevanceContext'
import axios from 'axios'
import BlueSpinner from '../../components/Loading/blueSpinner';



const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
    width: "50px"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Relevance = () => {
  const [relevanceItems, setRelevanceItems] = useState([])
  const [load, setLoad] = useState(false)

  async function handleClick(){
    setLoad(true)
    for(let i=0; i < relevanceItems.length; i++){

      await axios.put(`https://backend-cp.herokuapp.com/api/plans/update/relevance/${relevanceItems[i]._id}`, {
        relevance: relevanceItems[i].relevance
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
    }
    setLoad(false)
  }

  return (
    <>
      <Container>
        <Title>
          <ContentHeader title={'Order Relevance'} />
         </Title>
            <Button onClick={handleClick} variant="contained" color="primary" size="large" style={{width: "40%", height: "50%", margin:"auto"}}>
                SAVE
            </Button>
          <AlertDialog />
      </Container>
      {load ? <div style={{display: 'flex', width:"80%", height:"100%", justifyContent: 'center', alignItems: 'center'}}><BlueSpinner /></div> : <RelevanceContext.Provider value={{setRelevanceItems}}>
      <ContentRelevance type='credit-cards'/>
      </RelevanceContext.Provider>}
    </>
  );
};

export default Relevance;
