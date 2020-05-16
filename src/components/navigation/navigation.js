import React from 'react';
import style from './navigation.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

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

      <div className={style.navigation__main}>
        <AnchorLink to="/#about" title="About">
          <FontAwesomeIcon icon={faUser} size="2x" className={["icon", style.navigation__icon].join(' ')} />
        </AnchorLink>
        <AnchorLink to="/#projects" title="Projects">
          <FontAwesomeIcon icon={faCode} size="2x" className={["icon", style.navigation__icon].join(' ')} />
        </AnchorLink>
        <AnchorLink to="/#contact" title="Contact">
          <FontAwesomeIcon icon={faEnvelope} size="2x" className={["icon", style.navigation__icon].join(' ')} />
        </AnchorLink>
      </div>

      <div className={style.navigation__social}>
        <a href={data.site.siteMetadata.social.github} target="_blank" rel="noopener noreferrer" aria-label="github">
          <FontAwesomeIcon icon={faGithub} size="2x" className={["icon", style.navigation__icon].join(' ')} />
        </a>
        <a href={data.site.siteMetadata.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="linkedin">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" className={["icon", style.navigation__icon].join(' ')} />
        </a>
      </div>
    </nav>
  )
}

export default Navigation