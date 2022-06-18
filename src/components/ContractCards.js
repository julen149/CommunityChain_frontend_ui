import React from 'react'
import './CommunityCards.css'
import logo from '../images/logo.png';
import red from '../images/red.jpg';
import green from '../images/green.png';
import billete from '../images/billete.png';
import usuario from '../images/usuario.png';
import tick from '../images/tick.png';
import cros from '../images/cros.png';
import { Link, useHistory } from 'react-router-dom';
import './Button.css';

export default function ContractCards(props) {

  const history = useHistory();

  const handleClick = () => {

    fetch('http://127.0.0.1:8080/api/contracts/'+props.id+'/'+props.usrId+'/true', {
      method: 'POST',
      headers: { "Content-Type": "application/json"}
    }).then(response => response.json()).then(data2 => {

      fetch('http://127.0.0.1:8080/api/users/communities/'+props.usrId)
              .then(response => response.json())
              .then(data3 => {
                props.passChildData2((data4) => [

                  ...data3.map(({id, name, wallet, rol, total}) => ({
                    id,
                    name,
                    wallet,
                    rol: rol,
                    total
                  })),
                ]);
            });

            fetch('http://127.0.0.1:8080/api/users/contracts/'+props.username)
            .then(response => response.json())
            .then(data3 => {
              props.passChildData3((data4) => [

                ...data3.map(({id, name, ledgerId, cost, most, vote, nay, approved, userApproved}) => ({
                  id,
                  name,
                  ledgerId,
                  cost,
                  most, 
                  vote,
                  nay,
                  approved,
                  userApproved
                })),
              ]);
          }); 
    });

    fetch('http://localhost:4000/'+props.username+'/voteAgreement/'+props.ledgerId, {
      method: 'PUT',
      headers: { "Content-Type": "application/json"}
    });   

    history.push('/');
  };

  const handleClick2 = () => {

    fetch('http://127.0.0.1:8080/api/contracts/'+props.id+'/'+props.usrId+'/false', {
      method: 'POST',
      headers: { "Content-Type": "application/json"}
    }).then(response => response.json()).then(data2 => {

      fetch('http://127.0.0.1:8080/api/users/communities/'+props.usrId)
              .then(response => response.json())
              .then(data3 => {
                props.passChildData2((data4) => [

                  ...data3.map(({id, name, wallet, rol, total}) => ({
                    id,
                    name,
                    wallet,
                    rol: rol,
                    total
                  })),
                ]);
            });

            fetch('http://127.0.0.1:8080/api/users/contracts/'+props.username)
            .then(response => response.json())
            .then(data3 => {
              props.passChildData3((data4) => [

                ...data3.map(({id, name, ledgerId, cost, most, vote, nay, approved, userApproved}) => ({
                  id,
                  name,
                  ledgerId,
                  cost,
                  most, 
                  vote,
                  nay,
                  approved,
                  userApproved
                })),
              ]);
          }); 
    });

    fetch('http://localhost:4000/'+props.username+'/nayAgreement/'+props.ledgerId, {
      method: 'PUT',
      headers: { "Content-Type": "application/json"}
    });

    history.push('/');
  };

  return (
    <>
    <li className='communitycards__item'>
    <div className='communitycards__item__link' to='/'>
          <figure className='communitycards__item__pic-wrap' data-category={props.cost+'€'}>
          <img
              className='communitycards__item__img'
              alt='Travel Image'
              src={props.approved === false ? red : green}
            />
          </figure>
          <div className='communitycards__item__info'>
            <h5 className='communitycards__item__text'>{props.name}</h5>
            <h6>Contract ID: {props.id}</h6>
            <div className='walletDIV2'>
              <img className='walletIMG' src={usuario} /> 
              <p className='walletP'>{props.most}</p>
            </div>
            <div className='walletDIV2'>
              <img className='walletIMG2' src={tick} /> 
              <p className='walletP2'>{props.vote}</p>
            </div>
            <div className='walletDIV2'>
              <img className='walletIMG2' src={cros} /> 
              <p className='walletP2'>{props.nay}</p>
            </div>
          </div>
          {props.userApproved === false ? <div className='orderer'><button
        className='btn--SMART2'
        onClick={handleClick}
      >
        VOTE
      </button><button
        className='btn--SMART3'
        onClick={handleClick2}
      >
        NAY
      </button></div> : null}
        </div>
      </li>
    </>
  )
}
