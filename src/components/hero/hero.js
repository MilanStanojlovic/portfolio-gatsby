import React from 'react';
import style from './hero.module.scss';

const Hero = () => {
  return (
    <div className={[style.hero]}>
      <div className="inner-container">
        <div className={style.hero__content}>
          <div className="pitch">
            <span className="heading">Milan is a developer</span>
            <h1 className="heading"><span className="highlight-text">Helping businesses develop</span> bespoke web solutions.</h1>
            <button className={[style.hero__button, 'button'].join(' ')}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero