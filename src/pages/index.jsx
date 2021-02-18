import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export default function IndexPage({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <Layout>
      <div className="home">
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.intro}</p>
        <div>
          <img src={frontmatter.image} alt="cogy"/>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: {templateKey: {eq: "home"}}) {
      frontmatter {
        image
        intro
        title
      }
    }
  }
`