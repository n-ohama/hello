import React from "react"
import { graphql } from "gatsby"
export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="post">
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`