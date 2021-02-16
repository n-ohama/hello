import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout'

export default () => {
  return (
    <Layout>
      Hello world!
      <p><Link to="/post">View Post</Link></p>
    </Layout>)
}