import * as React from "react"
import MainLayout from "../layouts/main-layout"
import Hero from "../components/hero"
import ProjectList from "../components/project-list"

// markup
const ProjectsPage = ({data}) => {
    const posts = data;
    console.log(posts);
  return (
    <MainLayout>
      <Hero title="Projects" modifier="-purple" />
      <div>
          <ProjectList/>
      </div>
    </MainLayout>
  )
}

export default ProjectsPage
  