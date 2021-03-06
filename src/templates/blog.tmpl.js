import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout/Layout"
import PrevNext from "../components/PrevNext/PrevNext"

import "./blog.css"

export default function Template({ data }) {
  const post = data.markdownRemark
  const { title, author, date, category, cover } = post.frontmatter

  return (
    <Layout className={category}>
      <Img fluid={cover.childImageSharp.fluid} />
      <div className="content mx-auto prose lg:prose-xl">
        <div className="container mx-auto">
          <h1 className="content-title">{title}</h1>
          <p className="content-posted-by">
            Posted by {author} on {date}
          </p>
        </div>
        <div className="container mx-auto" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>

      <PrevNext></PrevNext>
      
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        author
        category
        date
        title
        path
        cover {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`
