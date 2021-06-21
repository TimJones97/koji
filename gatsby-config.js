module.exports = {
  pathPrefix: '/koji',
  siteMetadata: {
    title: `Koji`,
    description: `Koji is an early-stage investment firm focused on decentralised finance.`,
    siteUrl: `http://localhost:8000`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        icon: './static/img/general/favicon.png'
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "https://mycelium-content.uc.r.appspot.com/",
        collectionTypes: ["hd-podcasts"],
      },
    },
    {
      resolve: `gatsby-plugin-json-remark`,
      options: {
        paths: [
          `${__dirname}/src/podcasts/`,
        ], // Process all JSON files in these directories.
        fieldNameBlacklist: [
          "id",
          "children",
          "parent",
          "fields",
          "internal",
          "path",
          "template",
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-remove-root-p-tag`,
            options: {
              parents: ["gatsby-plugin-json-remark", "default-site-plugin"], // Required: will process only the MarkdownRemark nodes created by these plugins
            },
          },
        ],
      },
    },
    "gatsby-plugin-remove-serviceworker"
  ],
};
