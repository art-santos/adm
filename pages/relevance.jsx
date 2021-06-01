import React from 'react';
import ContentHeader from '../components/Content/ContentHeader/index';
import ContentRelevance from '../components/Content/ContentRelevance/index';
import { Container, Title, Buttons } from '../styles/MainHeader/styles';

const Relevance = () => {
  return (
    <>
      <Container>
        <Title>
            <ContentHeader title={'Sort By Relevance'} />
        </Title>
    </Container>  
      <ContentRelevance />
    </>
  );
};

export default Relevance;
 