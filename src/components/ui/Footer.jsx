import React from 'react'

export const Footer = () => {
  return (
    <footer className='page-footer cyan accent-5'>
      <div className='container'>
        © {new Date().getFullYear()} Copyright Text
        <a
          className='grey-text text-lighten-4 right'
          target='_blank'
          rel='noreferrer'
          href='https://github.com/piskarev06/react-shop'>
          Repo
        </a>
      </div>
    </footer>
  )
}