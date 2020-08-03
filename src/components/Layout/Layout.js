import React from "react"
import PropTypes from "prop-types"
import Seo from "./../Seo/Seo"
import Header from "./../Header/Header"
import Footer from "./../Footer/Footer"

import "typeface-merriweather";
import "typeface-montserrat";
import "typeface-special-elite";
import "./layout.css"

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <main className="main">{children}</main>
    <Footer />
    <Seo />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
