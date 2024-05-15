import React from 'react';
import Info from '../Info/Info';
import './styles.css';
import '../Info/styles.css';
import '../Opportunities/styles.css';
import Opportunities from '../Opportunities/Opportunities';

const Hero = () => {
  return (
    <div className='hero-container'>
        <Info />
        <Opportunities />
    </div>
  )
}

export default Hero;