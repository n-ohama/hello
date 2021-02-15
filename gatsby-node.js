const path = require(`path`);
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({actions, graphql, reporter}) => {
  const {createPage} = actions;

  const blogPostTemplate = path.resolve(`src/templates/post.jsx`);

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: {frontmatter: {templateKey: {eq: "post"}}}
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({node}) => {
    const id = node.id
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {id},
    })
  })
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({ node, getNode })
      createNodeField({
          name: `slug`,
          node,
          value,
      })
  }
}