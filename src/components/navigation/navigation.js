import React from 'react';
import style from './navigation.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Navigation = () => {
  const data = useStaticQuery(graphql`
  query{
    site{
      siteMetadata{
        social{
          linkedin, 
          github
        }
      }
    }
  }
  `)
  
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
        <a href={data.site.siteMetadata.social.github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
        </a>
        <a href={data.site.siteMetadata.social.linkedin} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="icon" />
        </a>
      </div>
    </nav>
  )
}

export default Navigation