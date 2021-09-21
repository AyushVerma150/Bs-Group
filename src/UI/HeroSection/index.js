import React from 'react';
import '../../App.css';
import Button from '../Button';
import './HeroSection.css';
import VideoUrl from '../../assets/Videos/video-2.mp4';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={VideoUrl} autoPlay loop muted />
      <h1>Perfection is our tradition</h1>
      <p>Adventure awaits you , hop on and see your business grow!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          CONTACT US
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={''}
        >
          EXPLORE MORE <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
