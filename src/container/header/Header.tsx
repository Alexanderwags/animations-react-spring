import React from "react"
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <div style={{ display: "flex" }}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
    </div>
  )
}
