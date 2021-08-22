import * as React from "react"
import MainLayout from "./../layouts/main-layout"
import Hero from "./../components/hero"

// markup
const ProjectsPage = () => {
  return (
    <MainLayout>
      <Hero title="Projects" modifier="-purple" />
    </MainLayout>
  )
}

export default ProjectsPage
