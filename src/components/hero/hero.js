import React from 'react';
import style from './hero.module.scss';

const Hero = () => {
  return (
    <div className={[style.hero, 'section'].join(' ')}>Hello world!</div>
  )
}

export default Hero