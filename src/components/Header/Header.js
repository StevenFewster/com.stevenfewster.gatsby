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
          <h1 class="flex justify-between sm:justify-center uppercase blog-title py-2">
            <div class="hidden sm:block">Steven</div>
            <Img fixed={data.file.childImageSharp.fixed} alt="SF" title="The Steven Fewster Blog" />
            <div class="hidden sm:block">Fewster</div>
            <div class="sm:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
            </div>
          </h1>
        </Link>
        <Nav />
      </header>
    </div>
  )}

export default Header