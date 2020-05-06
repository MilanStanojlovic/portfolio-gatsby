import React from 'react';
import style from './contact.module.scss';

const Contact = () => {
  return (
    <div className={[style.contact, 'section'].join(' ')}>
      Let's work together!
      <button>Contact</button>
    </div>
  )
}

export default Contact