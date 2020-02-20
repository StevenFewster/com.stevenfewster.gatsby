import React from "react"
import { graphql, Img } from "gatsby"

import Layout from "../components/Layout"

import "./blogTemplate.css"

export default function Template({ data }) {
  const post = data.markdownRemark
  const { title, author, date, category, cover } = post.frontmatter

  return (
    <Layout className={category}>
      <div className="content">
      <Img fluid={cover.childImageSharp.fluid} />
        <div className="container mx-auto">
          <h1 className="content-title">{title}</h1>
          <p className="content-posted-by">
            Posted by {author} on {date}
          </p>
        </div>
        <div className="container mx-auto" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
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
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`
