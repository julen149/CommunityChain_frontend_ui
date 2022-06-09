import React from 'react';
import '../../App.css';
import {useHistory} from 'react-router-dom';

export default function Contratos(props) {

  const history = useHistory();

  return (
    <>
      {props.token === 'AUTH' ? history.push('/') : <p>Vale, estas logejat</p>}
    </>
  )
}