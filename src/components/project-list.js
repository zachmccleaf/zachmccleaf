import * as React from "react"
import { Link } from "gatsby"

// markup
const ProjectList = () => {
    return (
        <div className="c-project-card">
            <img src="https://via.placeholder.com/150" />
            <h4>edio</h4>
        </div>
    )
}

export default ProjectList

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
