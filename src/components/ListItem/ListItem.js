import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ListItem = ({ title, author, date, description, path, cover, category }) => (
      <div class="py-8 flex flex-wrap md:flex-no-wrap border-t-2 border-gray-200">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="tracking-widest font-medium title-font text-gray-900">{ category }</span>
          <span class="mt-1 text-gray-500 text-sm">{ date }</span>
        </div>
        <Link class="md:flex-grow" to={path}>
          <h1 class="text-2xl font-medium text-gray-900 title-font mb-2">{ title }</h1>
          <p class="leading-relaxed">{ description }</p>
        </Link>
      </div>)

export default ListItem;