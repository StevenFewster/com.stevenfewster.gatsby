import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql, Link } from "gatsby"
import Hero from '../components/Hero/Hero'
import Post from '../components/Post/Post'
import Primary from '../components/Primary/Primary'
import Secondary from '../components/Secondary/Secondary'
import Card from '../components/Card/Card'

const Home = ({ data }) => (
  <Layout>
    <div class="container mx-auto flex flex-wrap">
      {data.allMarkdownRemark.edges.map((post, i) => {
        const { title, author, date, description, path, cover, category } = post.node.frontmatter
        switch (i) {
          case 0:
            return (
              <Primary
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
          case 1:
          case 2:
            return (
              <Secondary
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
    </div>
    <div class="flex justify-center">
      <Link class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg" to={'/archive'}>
        More From The Archive
      
        <svg class="w-5 h-5 ml-2 mt-1" viewBox="0 0 24 24" stroke="currentColor"         stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
  </Layout>
)

export default Home

export const AllIndexQuery = graphql`
  query AllIndexPosts {
    allMarkdownRemark(
      limit: 6
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