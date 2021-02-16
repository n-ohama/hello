import React from "react"
import Header from './Header'
import "../styles/index.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="layout">{children}</main>
    </>
  )
}

export default Layout