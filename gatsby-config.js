/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Cantertrot Swimming",
    description: "A website for Cantertrot Swimming and private swim lessons",
    author: "kwcloudconsulting",
    person: { name: "john", age: 32 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "john", age: 32 },
      { name: "susan", age: 21 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
