import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Post from '../components/Post'


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

export const AllIndexQuery = graphql`
  query AllIndexPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
            author
            description
            path
            cover {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`