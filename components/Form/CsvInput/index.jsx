import React, {useMemo, useContext, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import { Container, Images } from './styles';
import { baseStyle, activeStyle, acceptStyle, rejectStyle} from './dropStyles'

function InputCsv({handleChange, file}) {

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: '.csv, application/vnd.ms-excel, text/csv'});


  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);


  return (
    <>
    <Container>
    <div className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} onChange={(e) => handleChange(e.target.files[0])} />
        <p>Drag or Select the Zip list</p>
      </div>
      <aside>
        <h4 style={{marginTop:"20px"}}>File</h4>
        <ul style={{listStyle:"none"}}>{file}</ul>
      </aside>
    </div>
    </Container>
    </>
  );
}

export default InputCsv; 