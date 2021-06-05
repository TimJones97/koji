const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {

    const collection = getNode(node.parent).sourceInstanceName;
    const pageSlug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: `collection`,
      value: collection
    })
  }
};
