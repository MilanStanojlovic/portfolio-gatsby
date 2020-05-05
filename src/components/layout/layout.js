import React from 'react'
import style from './layout.module.scss';
import Navigation from '../navigation/navigation';
import Hero from '../hero/hero';
import About from '../about/about';
import Projects from '../projects/projects';
import Contact from '../contact/contact';

const Layout = () => {
  return (
    <div className={style.layout}>
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default Layout