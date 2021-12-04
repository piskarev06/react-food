import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <nav className="cyan accent-4 nav">
      <div className="nav-wrapper">
        <Link to={'/'} className="brand-logo">
          React Food
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a rel="noreferrer" target="_blank" href="https://github.com/piskarev06/react-food">
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
