import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Primary = ({ title, author, date, description, path, cover, category }) => (

<section class="text-gray-700 body-font w-full p-4">
  <div class="flex md:flex-row flex-col items-center bg-green-200">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">

        <Img class="lg:h-48 md:h-36 w-full object`-cover object-center" imgStyle={{objectFit: 'contain' }} fluid={cover} />`
      {/*<img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />*/}
    </div>
    <div class="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center p-4">
        <h2 class="tracking-widest text-xs uppercase title-font font-medium text-gray-500 mb-1">{category}</h2>
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          { title }
      </h1>
      <p class="mb-8 leading-relaxed">
          { description }
      </p>
      <div class="flex justify-center">
        <Link class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" to={path}>Read More</Link>
      </div>
    </div>
  </div>
</section>)

export default Primary;