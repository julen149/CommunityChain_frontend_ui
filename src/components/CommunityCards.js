import React from 'react'
import './CommunityCards.css'
import logo from '../images/logo.png';
import billete from '../images/billete.png';
import usuario from '../images/usuario.png';
import { Link, useHistory } from 'react-router-dom';
import './Button.css';

export default function CommunityCards(props) {

  const history = useHistory();

  const handleClick = () => {
    props.passChildData(props.id);
    props.passChildData2(props.total)
    history.push('/createcontract');
  };


  return (
    <>
    <li className='communitycards__item'>
    <div className='communitycards__item__link' to='/'>
          <figure className='communitycards__item__pic-wrap' data-category={props.rol}>
            <img
              className='communitycards__item__img'
              alt='Travel Image'
              src={logo}
            />
          </figure>
          <div className='communitycards__item__info'>
            <h5 className='communitycards__item__text'>{props.name}</h5>
            <h6>Community ID: {props.id}</h6>
            <div className='walletDIV'>
              <img className='walletIMG' src={billete} /> 
              <p className='walletP'>{props.wallet}</p>
            </div>
            <div className='walletDIV2'>
              <img className='walletIMG' src={usuario} /> 
              <p className='walletP'>{props.total}</p>
            </div>
            {props.rol === '"PRESIDENTE"' ? <div className='btn-mobile'>
      <button
        className='btn--SMART'
        onClick={handleClick}
      >
        Create SmartContract
      </button>
    </div> : null}
          </div>
        </div>
      </li>
    </>
  )
}
