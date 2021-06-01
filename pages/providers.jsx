import React from 'react';
import ContentHeader from '../components/Content/ContentHeader/index';
import ContentProviders from '../components/Content/ContentProviders/index';
import { Container, Title, Buttons } from '../styles/MainHeader/styles';


const pages = () => {
  return (
    <>
    <Container>
        <Title>
            <ContentHeader title={'Providers'} />
        </Title>
    </Container>  
      <ContentProviders />
    </>
  );
};
 
export default pages;
