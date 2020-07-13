import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Nav from "../Nav/Nav"

import "./header.css"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div id="header">
      <header className="layout">
        <Link to="/">
          <h1 class="text-center uppercase blog-title">
            Steven
            <Img fixed={data.file.childImageSharp.fixed} alt="SF" title="The Steven Fewster Blog" />
            Fewster
            </h1>
        </Link>
        <Nav />
      </header>
    </div>
  )}

export default Header