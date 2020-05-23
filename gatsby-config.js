module.exports = {
  siteMetadata: {
    title: `Shirin Boomi, Développeur front-end`,
    description: `Découvrez mon portfolio en développement web. Je suis une développeuse front-end en recherche active.`,
    author: `Shirin Boomi`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-smoothscroll`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: "fr",
        langKeyDefault: "fr",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shirin Boomi - Portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#032CB7`,
        theme_color: `#032CB7`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
