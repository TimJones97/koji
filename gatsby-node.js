const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const articles = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            excerpt(pruneLength: 500)
          }
        }
      }
    }
  `)
  console.log(articles)

  if (articles.errors) {
    throw articles.errors;
  }

  // const ArticleTemplate = require.resolve("./src/templates/article.js");
  // const JobTemplate = require.resolve("./src/templates/job.js");

  // articles.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //   const source = node.parent.sourceInstanceName;
  //   console.log(`Creating path ${`/${source === "posts" ? 'radar' : 'careers'}/${node.frontmatter.slug}}`}`)
  //   createPage({
  //     path: `/${source === "posts" ? 'radar' : 'careers'}/${node.frontmatter.slug}`,
  //     component: source === "posts" ? ArticleTemplate : JobTemplate,
  //     context: {
  //       // additional data can be passed via context
  //       slug: node.frontmatter.slug,
  //     },
  //   })
  // })
};

module.exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {

    const collection = getNode(node.parent).sourceInstanceName;
    const pageSlug = createFilePath({ node, getNode, basePath: `index` })

    createNodeField({
      node,
      name: `collection`,
      value: collection
    })
  }
};
