import React from "react"
import { Link } from "gatsby"

import "./nav.css"

const Nav = () => (
  <div class="container mx-auto items-center hidden sm:block">
      <ul className="nav-list flex justify-between py-3">
        <li className="nav-list-item">
          <Link activeClassName="active" to="/cocktails">
            Cocktails
          </Link>
        </li>
        <li className="nav-list-item">
          <Link activeClassName="active" to="/code">
            Code
          </Link>
        </li>
        <li className="nav-list-item">
          <Link activeClassName="active" to="/projects">
            Projects
          </Link>
        </li>
        <li className="nav-list-item">
          <Link activeClassName="active" to="/editorials">
            Editorials
          </Link>
        </li>
      </ul>
  </div>
)

export default Nav
