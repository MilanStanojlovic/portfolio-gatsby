import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

const Hero = () => {
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          email
        }
      }
    }
  `);

  return (
    <div className="section" id="hero">
      <div className="inner-container">
        <div className="section__content">
          <div>
            <span className="heading">Milan is a developer</span>
            <h1 className="heading"><span className="highlight-text">Helping businesses develop</span> bespoke web solutions.</h1>
            <a className="button section__button" href={`mailto:${data.site.siteMetadata.email}?subject=Mail from website`} target="_blank" rel="noopener noreferrer">Contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero