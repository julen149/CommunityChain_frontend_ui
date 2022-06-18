import React from 'react';
import '../../App.css';
import {useHistory} from 'react-router-dom';
import CommunityCards from '../CommunityCards';
import './../CommunityCards.css';

export default function Comunidades(props) {

  const history = useHistory();

  return (
    <>
      {props.token === 'AUTH' ? history.push('/') : <div className='communitycards'> <div className='communitycards__container'> <div className='communitycards__wrapper'> <ul className='communitycards__items'>
        
      {props.arr.map( ( {id, name, wallet, rol, total} ) => {
      return id === "0" ? null : <CommunityCards id={id} name={name} wallet={wallet} rol={rol} total={total} passChildData={props.passChildData} passChildData2={props.passChildData2} />
})}</ul> </div> </div> </div>}
    </>
  )
}