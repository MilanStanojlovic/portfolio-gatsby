import React from 'react';
import style from './navigation.module.scss';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <div>
        <AnchorLink to="/#hero" className="logo">
          m.
        </AnchorLink>
      </div>

      <div className={style.navigation__social}>
        <ul>
          <li>
            <AnchorLink to="/#about" title="About" className={style.link}>
              About
          </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#projects" title="Projects">
              Projects
          </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#contact" title="Contact">
              Contact
          </AnchorLink>
          </li>
        </ul>
      </div>

      <div className={style.navigation__social}>
        linkedin
        github
      </div>
    </nav>
  )
}

export default Navigation