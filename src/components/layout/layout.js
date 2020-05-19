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
      <aside className={style.navigation}>
        <Navigation />
      </aside>
      <main className={style.main}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default Layout