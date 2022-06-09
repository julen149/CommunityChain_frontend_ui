import React from 'react'
import './CommunityCards.css'
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

export default function CommunityCards(props) {
  return (
    <>
    <li className='communitycards__item'>
    <Link className='communitycards__item__link' to='/'>
          <figure className='communitycards__item__pic-wrap' data-category='PROPIETARI'>
            <img
              className='communitycards__item__img'
              alt='Travel Image'
              src={logo}
            />
          </figure>
          <div className='communitycards__item__info'>
            <h5 className='communitycards__item__text'>{props.name}</h5>
            <h6>Community ID: {props.id}</h6>
          </div>
        </Link>
      </li>
    </>
  )
}
