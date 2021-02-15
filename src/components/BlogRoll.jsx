import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="post-list">
        {posts &&
          posts.map(({ node: post }) => (
            <article key={post.id}>
              <header>
                <div className="title">{post.frontmatter.title}</div>
                <span className="subtitle">
                  &bull; {post.frontmatter.date}
                </span>
              </header>
              <p>
                <div className="excerpt">{post.excerpt}</div>
                <Link className="button" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </p>
            </article>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          filter: {frontmatter: {templateKey: {eq: "post"}}}
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              fields {
                slug
              }
              excerpt(pruneLength: 50, truncate: true)
              id
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)