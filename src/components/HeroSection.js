import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import myVideo from '../videos/video-3.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={myVideo} autoPlay loop muted />
      <h1>INTERACTÚA CON TUS VECINOS</h1>
      <p>¿A qué estás esperando?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link='/createcommunity'
        >
          CREA UNA COMUNIDAD
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          link='/createcommunity'
        >
          ÚNETE A UNA COMUNIDAD <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;