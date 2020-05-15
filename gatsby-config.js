/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Milan | Software Engineer',
    author: 'Milan Stanojlovic',
    description: 'Milan is software engineer specializing in front end development of bespoke web solutions.',
    email: 'milan.webdeveloper@gamil.com',
    social: {
      linkedin: 'https://www.linkedin.com/in/milan-stanojlovic-5a5379107',
      github: 'https://github.com/MilanStanojlovic'
    }
  },
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`, 
            `gatsby-plugin-anchor-links`,
            `gatsby-plugin-react-helmet`,
            `gatsby-transformer-json`,
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                path:`${__dirname}/data/`
              },
            }, 
            `gatsby-transformer-sharp`,
            `gatsby-plugin-sharp`
            ],
}
