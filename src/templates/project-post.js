import React from "react"
import { graphql } from "gatsby"
import MainLayout from "../layouts/main-layout"
import Hero from "../components/hero"
import Card from "../components/card"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <MainLayout>
      <Hero title={post.frontmatter.title} modifier="-blue" />
      <div className="container">
        <Card>
          <div className="-pad" dangerouslySetInnerHTML={{ __html: post.html }} />
        </Card>
      </div>
    </MainLayout>
  )
}
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`