import React, {useState, useEffect} from 'react'
import { AppProps } from 'next/app';
import Head from 'next/head';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from '../components/screen/Layout/Layout';
import SignInSide from '../components/Login/index';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET','PUT','POST', 'DELETE', 'HEAD'],
})

function MyApp({ Component, pageProps }) {
  const [token, setToken] = useState(true)
  useEffect(() => {
    if(localStorage.getItem('token')){
      setToken(true)
    }
  }, [])

  if(!token){
    return(
      <>
      <Head>
        <title>LOGIN</title>
      </Head>
        <CssBaseline />
        <SignInSide />
      </>
    )
  }else{
    return (
      <>
      <DndProvider backend={HTML5Backend}>
        <Head>
          <title>ADMIN</title>
        </Head>
        <Layout>
          <CssBaseline />
          <Component {...pageProps} />
        </Layout>
        </DndProvider>
      </>
    );
  }
  
}

export default MyApp;
