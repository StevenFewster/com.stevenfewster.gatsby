import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Post from "../components/Post"

import './blog.css';

const Blog = ({ data }) => (
  <Layout>
    <div class="section bg-blue-100">
      <h1 class="section-title">Blog</h1>
    </div>
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

export default Blog

export const AllBlogQuery = graphql`
  query AllBlogPosts {
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
