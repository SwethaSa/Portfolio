import React from 'react';
import preloaderGif from '../assets/preloader.gif';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-gif-container">
        <img className="preloader-gif" src={preloaderGif} alt="preloader" />
      </div>
      <div className="preloader-dialogue-container">
        <div className="preloader-dialogue">
          <span className="word">Abracadabra!</span> <br></br>
          <span className="word">Your</span> 
          <span className="word">website</span> 
          <span className="word">is</span> 
          <span className="word">almost</span> 
          <span className="word">ready.</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
