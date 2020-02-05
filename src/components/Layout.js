import React from "react"
import PropTypes from "prop-types"

import Nav from "./Nav"
import Seo from "./Seo"

import "typeface-open-sans";
import "typeface-comfortaa";
import "./layout.css"

const Layout = ({ children }) => (
  <div className="layout">
    <Nav />
    <main className="main">{children}</main>
    <Seo />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
