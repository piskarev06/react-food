import React from 'react'

export const Header = () => {
  return (
    <nav className="cyan accent-4 nav">
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">
          React Food
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a rel="noreferrer" target="_blank" href="https://github.com/piskarev06/react-shop">
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
