import { Container } from 'next/app';
import React from 'react';

export default function Logo() {
  return (
    <>
      <Container>
        <img
          src="/elevenrushsvg.svg"
          style={{ width: '100%', margin: 'auto', padding: '25px' }}
        />
      </Container>
    </>
  );
}
