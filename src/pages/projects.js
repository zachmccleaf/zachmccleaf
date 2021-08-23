import React from "react"
import { graphql } from "gatsby"
import MainLayout from "./../layouts/main-layout"
import Hero from "./../components/hero"
import ProjectCard from "./../components/project-card"

export default function Projects({ data }) {
  const { posts } = data.projects
  console.log("data: ", data.projects.posts[3].frontmatter.featuredimage)

  const getProjetCards = () => {
    return posts.map(post => (
      <ProjectCard data={post}/>
    ))
  }

  return (
    <div>
      <MainLayout>
        <Hero title="projects" modifier="-purple" />
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
        fields {
          slug
        }
        frontmatter {
          title
          featuredimage {
            src {
              childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
        }
        excerpt
        id
      }
    }
  }
`
