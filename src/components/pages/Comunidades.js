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
        
      {props.arr.map( ( {id, name, wallet} ) => {
    return <CommunityCards id={id} name={name} wallet={wallet} />
})}</ul> </div> </div> </div>}
    </>
  )
}