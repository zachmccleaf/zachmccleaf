import React from "react"
import { graphql } from "gatsby"
import MainLayout from "./../layouts/main-layout"
import Hero from "./../components/hero"
import ProjectCard from "./../components/project-card"

export default function Projects({ data }) {
  const { posts } = data.projects

  const getProjetCards = () => {
    return posts.map(post => (
      <ProjectCard data={post}/>
    ))
  }

  return (
    <div>
      <MainLayout>
        <Hero title="Projects" modifier="-purple" />
        <div className="c-project-card__list">
          {getProjetCards()}
        </div>
      </MainLayout>
    </div>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    projects: allMarkdownRemark {
      posts: nodes {
        frontmatter {
          title
        }
        excerpt
        id
      }
    }
  }
`




// // markup
// const ProjectsPage = () => {
//   return (
//     <MainLayout>
//       <Hero title="Projects" modifier="-purple" />
//     </MainLayout>
//   )
// }

// export default ProjectsPage
