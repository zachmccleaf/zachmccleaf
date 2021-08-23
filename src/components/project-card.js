import * as React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

// markup
const ProjectCard = (props) => {
    const featuredimage = props.data.frontmatter.featuredimage;
    return (
        <Link to={props.data.fields.slug} className="c-project-card">
            {
                featuredimage &&
                <Img
                    fluid={featuredimage.src.childImageSharp.fluid}
                    alt={featuredimage.alt}/>
            }
            <h4>{props.data.frontmatter.title}</h4>
        </Link>
    )
}

export default ProjectCard
