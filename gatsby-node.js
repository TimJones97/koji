const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateWebpackConfig = ({ actions, plugins, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        path: require.resolve("path-browserify"),
      },
    },
  })
  if (stage === "build-javascript" || stage === "develop") {
    actions.setWebpackConfig({
      plugins: [plugins.provide({ process: "process/browser" })],
    })
  }
}

// module.exports.onCreateNode = async ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `Mdx`) {

//     const collection = getNode(node.parent).sourceInstanceName;
//     const pageSlug = createFilePath({ node, getNode, basePath: `pages` })

//     createNodeField({
//       node,
//       name: `collection`,
//       value: collection,
//     })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: `/listen/${pageSlug}`,
//     })
//   }
// };
