import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import "./post.css"

const Post = ({ title, author, date, description, path, cover }) => (
  <div className="post w-100 m-4 py-2 bg-white">
    <div className="post-image">
      <Img fluid={cover} />
    </div>
    <div className="post-details shadow-lg">
      <h3 className="post-title">{title}</h3>
      <p className="post-description">{description}</p>
      <p className="post-written-by">
        Written by {author} on {date}
      </p>
      <Link to={path}>Read more</Link>
    </div>
  </div>
)

export default Post
