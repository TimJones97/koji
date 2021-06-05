module.exports = {
  siteMetadata: {
    title: `Koji`,
    description: `Koji is an early-stage investment firm focused on decentralised finance.`,
    siteUrl: `http://localhost:8000`
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
      }
    },
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //       extensions: [`.mdx`, `.md`],
    //       gatsbyRemarkPlugins: [
    //         {
    //           resolve: `gatsby-remark-images`,
    //           options: {
    //             maxWidth: 3000,
    //             wrapperStyle: fluidResult => `margin: 3vh auto; flex:${Math.round(fluidResult.aspectRatio, 2)};`
    //           },
    //         },
    //       ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        icon: `static/img/general/favicon.png`
      },
    },
    "gatsby-plugin-remove-serviceworker"
  ],
};