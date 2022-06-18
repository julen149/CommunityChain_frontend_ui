import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import myImage1 from '../images/img-9.jpg'
import myImage2 from '../images/img-2.jpg'
import myImage3 from '../images/img-3.jpg'
import myImage4 from '../images/img-4.jpg'
import myImage5 from '../images/img-8.jpg'
import blockchain from '../images/blockchain.jpg';
import contract from '../images/contract.jpg';
import github from '../images/github.png';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out more information about our web!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={blockchain}
              text='Documentación Hyperledger Fabric'
              label='Hyperledger Fabric'
              path='https://hyperledger-fabric.readthedocs.io/en/release-2.2/'
            />
            <CardItem
              src={contract}
              text='Más información sobre los Smart Contract'
              label='Smart Contract'
              path='https://academy.bit2me.com/que-son-los-smart-contracts/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={github}
              text='Código de la API decentralizada de la web'
              label='Decentralized_API'
              path='https://github.com/julen149/CommunityChain_Decentralized_API.git'
            />
            <CardItem
              src={github}
              text='Código Frontend de la web'
              label='Frontend'
              path='https://github.com/julen149/CommunityChain_frontend_ui.git'
            />
            <CardItem
              src={github}
              text='Código de la API centralizada de la web'
              label='Centralized_API'
              path='https://github.com/julen149/CommunityChain_Centralized_API.git'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;