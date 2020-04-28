import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import Post from '../components/Post/Post'


const Home = ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(post => {
      const { title, author, date, description, path, cover, category } = post.node.frontmatter
      return (
        <Post
          title={title}
          author={author}
          date={date}
          description={description}
          key={`${date}__${title}`}
          path={path}
          category={category}
          cover={cover.childImageSharp.fluid}
        />
      )
    })}
  </Layout>
)

export default Home

export const AllIndexQuery = graphql`
  query AllIndexPosts {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "d MMM YYYY")
            title
            author
            description
            path
            category
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