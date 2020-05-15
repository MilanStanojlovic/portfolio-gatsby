import React from 'react'
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Head = () => {

  const data = useStaticQuery(graphql`
  query{
    site{
      siteMetadata{
        title, 
        description
      }
    }
  }`);

  return (
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <html lang="en" />
    </Helmet>
  )
}

export default Head
