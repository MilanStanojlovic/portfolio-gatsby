import React from 'react';
import style from './navigation.module.scss';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <AnchorLink to="/#about" title="About">
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
    </nav>
  )
}

export default Navigation