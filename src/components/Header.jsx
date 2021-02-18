import React from 'react'
import {Link} from 'gatsby'
import LogoImg from '../../static/logo.png'
export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <img src={LogoImg} alt="logo"/>
      </Link>
      <nav>
        <Link to="/post">Post</Link>
      </nav>
    </header>
  )
}