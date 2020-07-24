import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import CardFooter from "../CardFooter/CardFooter"

const Secondary = ({ title, author, date, description, path, cover, category }) => (
<Link class="p-4 md:w-1/2" to={path}>
      <div class="h-full overflow-hidden bg-blue-200">

        <Img class="lg:h-48 md:h-36 w-full object-cover object-center" imgStyle={{objectFit: 'contain' }} fluid={cover} />

        <div class="p-6">

          <h2 class="tracking-widest text-xs uppercase title-font font-medium text-gray-500 mb-1">{category}</h2>

          <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>

          <p class="leading-relaxed mb-3">{description}</p>

          <CardFooter></CardFooter>

          
        </div>
      </div>
  </Link>
  )

export default Secondary;