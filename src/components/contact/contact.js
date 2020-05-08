import React from 'react';
import style from './contact.module.scss';

const Contact = () => {
  return (
    <div className={style.contact}>
      <div className="inner-container">
        <div className={style.contact__content}>
          <div>
            <div className="heading">
              Let's work <span className="highlight-text">together!</span>
            </div>
            <button className={['button', style.contact__button].join(' ')}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact