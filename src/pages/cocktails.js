import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import Post from "../components/Post/Post"


const Home = ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(post => {
      const { title, author, date, description, path, cover } = post.node.frontmatter
      return (
        <Post
          title={title}
          author={author}
          date={date}
          description={description}
          key={`${date}__${title}`}
          path={path}
          cover={cover.childImageSharp.fluid}
        />
      )
    })}
  </Layout>
)

export default Home

export const AllCocktailsQuery = graphql`
  query AllCocktailsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {frontmatter: {category: {eq: "cocktails"}}}
    )  {
      edges {
        node {
          frontmatter {
            date(formatString: "d MMM YYYY")
            title
            author
            description
            path
            cover {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            fixed: cover {
                childImageSharp {
                    fixed(width: 200) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
          }
        }
      }
    }
  }
`