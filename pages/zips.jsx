import React from 'react';
import ContentHeader from '../components/Content/ContentHeader/index';
import ContentZip from '../components/Content/ContentZip/index';
import { Container, Title, Buttons } from '../styles/MainHeader/styles';

const zips = () => {
  return (
    <>
      <Container>
        <Title>
            <ContentHeader title={'View Zip Data'} />
        </Title>
    </Container>  
      <ContentZip />
    </>
  );
};

export default zips;
