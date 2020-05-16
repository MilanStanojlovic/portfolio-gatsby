import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Contact = () => {
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
    <div className="section" id="contact">
      <div className="inner-container">
        <div className="section__content">
          <div>
            <div className="heading__main">
              Let's work <span className="highlight-text">together!</span>
            </div>
            <a className="button section__button" href={`mailto:${data.site.siteMetadata.email}?subject=Mail from website`} target="_blank" rel="noopener noreferrer">Contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact