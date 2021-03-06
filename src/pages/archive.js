import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import Hero from '../components/Hero/Hero'
import Post from '../components/Post/Post'
import Primary from '../components/Primary/Primary'
import Secondary from '../components/Secondary/Secondary'
import ListItem from '../components/ListItem/ListItem'

const Archive = ({ data }) => (
  <Layout>
    <div class="bg-gray-900 text-white pt-5 pb-3 text-center">
      <h1 class="text-4xl">Archive</h1>
    </div>
    <div class="container mx-auto px-5">
      {data.allMarkdownRemark.edges.map((post, i) => {
        const { title, author, date, description, path, cover, category } = post.node.frontmatter
        
            return (
              <ListItem
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
    </div>
  </Layout>
)

export default Archive

export const ArchiveQuery = graphql`
  query ArchiveQuery {
    allMarkdownRemark(
      skip: 6
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