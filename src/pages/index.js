import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import Hero from '../components/Hero/Hero'
import Post from '../components/Post/Post'
import Card from '../components/Card/Card'

const Home = ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map((post, i) => {
      const { title, author, date, description, path, cover, category } = post.node.frontmatter
      switch (i) {
        case 0:
          return (
            <Hero
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
        default:
          return (
            <Card
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
      }
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