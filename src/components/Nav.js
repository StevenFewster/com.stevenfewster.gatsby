import React from "react"
import { Link } from "gatsby"

import "./nav.css"

const Nav = () => (
  <div class="flex justify-between items-center py-4 bg-blue-900">
    <div class="flex-shrink-0 ml-10 cursor-pointer">
      <span class="text-3xl text-blue-200 font-semibold">B*</span>
    </div>
      <ul className="nav-list">
        <li className="nav-list-item">
          <Link activeClassName="active" to="/">
            Home
          </Link>
        </li>
        <li className="nav-list-item">
          <Link activeClassName="active" to="/about">
            About
          </Link>
        </li>
        <li className="nav-list-item">
          <Link activeClassName="active" to="/blog">
            Blog
          </Link>
        </li>
        <li className="nav-list-item">
          <Link activeClassName="active" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
  </div>
)

export default Nav
