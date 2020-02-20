import React from "react"
import { Link } from "gatsby"

import "./nav.css"

const Nav = () => (
  <div class="container mx-auto items-center">
      <ul className="nav-list flex justify-between">
        <li className="nav-list-item">
          <Link activeClassName="active" to="/">
            Cocktails
          </Link>
        </li>
        <li className="nav-list-item">
          <Link activeClassName="active" to="/about">
            Code
          </Link>
        </li>
        <li className="nav-list-item">
          <Link activeClassName="active" to="/blog">
            Projects
          </Link>
        </li>
        <li className="nav-list-item">
          <Link activeClassName="active" to="/contact">
            Editorials
          </Link>
        </li>
      </ul>
  </div>
)

export default Nav
