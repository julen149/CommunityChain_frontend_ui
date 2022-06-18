import React from 'react';
import '../../App.css';
import {useHistory} from 'react-router-dom';
import './../CommunityCards.css';
import ContractCards from '../ContractCards';

export default function Contratos(props) {

  const history = useHistory();

  return (
    <>
      {props.token === 'AUTH' ? history.push('/') : <div className='communitycards'> <div className='communitycards__container'> <div className='communitycards__wrapper'> <ul className='communitycards__items'>
        
        {props.arr.map( ( {id, name, ledgerId, cost, most, vote, nay, approved, userApproved} ) => {
        return id === "0" ? null : <ContractCards id={id} name={name} ledgerId={ledgerId} cost={cost} most={most} vote={vote} nay={nay} approved={approved} userApproved={userApproved} usrId={props.id} username={props.username} passChildData2={props.passChildData2} passChildData3={props.passChildData3} />
  })}</ul> </div> </div> </div>}
    </>
  )
}