const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const articles = await graphql(`
    {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
            parent {
              ... on File {
                id
                sourceInstanceName
              }
            }
          }
        }
      }
    }
  `)
  console.log(articles)

  if (articles.errors) {
    throw articles.errors;
  }

  const ArticleTemplate = require.resolve("./src/templates/article.js");
  articles.data.allMdx.edges.forEach(({ node }) => {
    const source = node.parent.sourceInstanceName;
    console.log(`Creating path ${`/${source === "posts" ? 'radar' : 'jobs'}/${node.frontmatter.slug}}`}`);
    createPage({
      path: `/${source === "posts" ? 'radar' : 'jobs'}/${node.frontmatter.slug}`,
      component: source === "posts" ? ArticleTemplate : JobTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })
};

module.exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {

    const collection = getNode(node.parent).sourceInstanceName;
    const pageSlug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: `collection`,
      value: collection,
    })
    createNodeField({
      node,
      name: `slug`,
      value: `/listen/${pageSlug}`,
    })
  }
};
