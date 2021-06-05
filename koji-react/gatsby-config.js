module.exports = {
  siteMetadata: {
    title: `Tracer`,
    description: ``,
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
    {
        resolve: `gatsby-plugin-mdx`,
        options: {
            extensions: [`.mdx`, `.md`],
            gatsbyRemarkPlugins: [
              {
                resolve: `gatsby-remark-images`,
                options: {
                  maxWidth: 3000,
                  wrapperStyle: fluidResult => `margin: 3vh auto; flex:${Math.round(fluidResult.aspectRatio, 2)};`
                },
              },
            ],
        },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `posts`,
            path: `${__dirname}/src/posts`,
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `jobs`,
        path: `${__dirname}/src/jobs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#0000bd",
        display: "minimal-ui",
        icon: `static/favicon.png`
      },
    },
    "gatsby-plugin-remove-serviceworker"
  ],
};