import React from 'react';
import style from './navigation.module.scss';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/home" className={style.link}>home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation