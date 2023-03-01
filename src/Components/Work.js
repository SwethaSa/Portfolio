

import React, { useState } from 'react';
import { TbArrowLoopRight2, TbArrowLoopLeft2 } from 'react-icons/tb';
import "./Work.css";
import { Element, Link } from 'react-scroll';
import ReactD from '../assets/ReactD.png';
import Makeup from '../assets/Makeup.png';
import CRM from '../assets/CRM.png';

 const ProjectData = [
  {
    image: ReactD,
      link: 'https://boisterous-moonbeam-215991.netlify.app/'
    },
  {
    image: Makeup,
    link:'https://celadon-semifreddo-d49ac7.netlify.app/'      
    },
  {
    image: CRM,
    
    link:'https://funny-selkie-a56f6b.netlify.app/'
    }
];
function Work() {
  const [current, setCurrent] = useState(0);
  const length = ProjectData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
   
    <div>  
      <Element id="works">
      <h1 className='header'>I've Done</h1> 
    <section className='slider'>

      <TbArrowLoopLeft2 className='left-arrow' onClick={prevSlide} />
      <TbArrowLoopRight2 className='right-arrow' onClick={nextSlide} />
      {ProjectData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            <a href={slide.link} target="_blank" rel="noopener noreferrer">
            {index === current && (
              <img src={slide.image} alt='travel image' className='images' />
            )}
            </a>
          </div>
        );
      })}
    </section>
    </Element>
    </div>
  );
};

export default Work;
