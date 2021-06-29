import React, { useState, useEffect } from 'react';
import ContentHeader from '../components/Content/ContentHeader/index';
import { Container, Title, Buttons } from '../styles/MainHeader/styles';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ContentAlts from '../components/Content/ContentAlts';
import EditTagContext from '../Context/EditTagContext'
import { useRouter } from 'next/router';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));


export default function Pages({data}) {
  const classes = useStyles();
  const router = useRouter();
  const [page, setPage] = useState('mobile');
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  

 return (
    <>
      <Container>
        <Title>
          <ContentHeader title={'Select a Page'} />
        </Title>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">
            Page
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label" 
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={page}
            onChange={(e) => {setPage(e.target.value)}}
          >
            {data.map(item => {
              return (
                <a href={`/tags/?id=${item._id}`} style={{color:'#2d2d2d'}}><MenuItem value={`${item.page}`}>{item.page}</MenuItem></a>
              )
            })}
          </Select>
        </FormControl>
      </Container> 
      <EditTagContext.Provider value={{data, page}}>
      <ContentAlts />
      </EditTagContext.Provider>
    </>
  );
}
export async function getServerSideProps(context) {
  try{
    const res = await fetch('http://clever-admin.vercel.app/api/metatags', {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*'
      }})
    const json = await res.json();
    return {
      props:{data:json.items, }
    }
    }catch(e){
      console.log(e)
    }
}

// Pages.getInitialProps = async (ctx) => {
//     try{
//     const res = await fetch('http://clever-admin.vercel.app/api/metatags', {
//       mode: 'cors',
//       headers: {
//         'Access-Control-Allow-Origin':'*'
//       }})
//     const json = await res.json();
//     return {
//       data:json.items, 
//     }
//     }catch(e){
//       console.log(e)
//     }
// }
