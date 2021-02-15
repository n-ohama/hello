import React from 'react'

import BlogRoll from '../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <>
        <h1>Latest Posts</h1>
        <section>
          <BlogRoll />
        </section>
      </>
    )
  }
}