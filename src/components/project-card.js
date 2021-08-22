import * as React from "react"
import { Link } from "gatsby"

// markup
const ProjectCard = (props) => {
  return (
    <div className="c-project-card">
        <img src="https://via.placeholder.com/150" />
        <h4>{props.data.frontmatter.title}</h4>
    </div>
  )
}

export default ProjectCard
