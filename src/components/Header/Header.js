import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Nav from "../Nav/Nav"

import "./header.css"
import logo from "../../images/logo.png"

const Header = () => (
  <div id="header">
    <header className="layout">
      <Link to="/">
        <h1>Steven <img src="/static/21b8314b00ec60349f9d9cb2cf455a8e/151a9/logo.png" height="48" width="48" /> Fewster</h1>
      </Link>
      <Nav />
    </header>
  </div>
)

export default Header
