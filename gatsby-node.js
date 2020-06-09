const fspath = require("path")

const formatTitle = (title) => {
  return title.toLowerCase().replace(/ /g, '-');
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              category
              path
              template
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

      const tmpl = node.frontmatter.template ?
        fspath.resolve("src/templates/" + node.frontmatter.template + ".tmpl.js"):
        fspath.resolve("src/templates/blog.tmpl.js");

      const path = node.frontmatter.path ?
        node.frontmatter.path :
        `/${node.frontmatter.category}/${formatTitle(node.frontmatter.title)}`
      createPage({
        path,
        component: tmpl,
      })
    })
  })
}
