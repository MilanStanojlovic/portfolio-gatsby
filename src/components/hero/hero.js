import React from 'react';
import style from './hero.module.scss';

const Hero = () => {
  return (
    <div className={[style.hero, 'section'].join(' ')}>
      <span>Milan is a developer</span>
      <h1>Helping businesses develop bespoke web solutions.</h1>
      <button>Contact</button>
    </div>
  )
}

export default Hero