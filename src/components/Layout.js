import React from "react"
import PropTypes from "prop-types"
import Seo from "./Seo"
import Header from "./Header/Header"

import "typeface-open-sans";
import "typeface-comfortaa";
import "./layout.css"

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <main className="main">{children}</main>
    <Seo />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
