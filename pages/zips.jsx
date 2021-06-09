import React from 'react';
import ContentHeader from '../components/Content/ContentHeader/index';
import ContentZip from '../components/Content/ContentZip/index';
import { Container, Title, Buttons } from '../styles/MainHeader/styles';
import AddressForm from '../components/Form/FormPlanEdit/index'

const zips = () => {
  return (
    <>
      <Container>
        <AddressForm />
      </Container>
    </>
  );
};

export default zips;
