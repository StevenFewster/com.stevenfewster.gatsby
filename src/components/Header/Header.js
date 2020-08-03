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
          <h1 class="flex sm:justify-center uppercase blog-title">
            <div class="hidden sm:block">Steven</div>
            <Img fixed={data.file.childImageSharp.fixed} alt="SF" title="The Steven Fewster Blog" />
            <div class="hidden sm:block">Fewster</div>
            </h1>
        </Link>
        <Nav />
      </header>
    </div>
  )}

export default Header