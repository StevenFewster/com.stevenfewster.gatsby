const path = require("path")

const formatTitle = (title) => {
  return title.toLowerCase().replace(/ /g, '-');
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("src/templates/blogTemplate.js")

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              category
              path
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const path = node.frontmatter.path ?
        node.frontmatter.path :
        `/${node.frontmatter.category}/${formatTitle(node.frontmatter.title)}`
      createPage({
        path,
        component: postTemplate,
      })
    })
  })
}
