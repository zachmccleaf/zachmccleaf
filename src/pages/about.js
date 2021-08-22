import * as React from "react"
import MainLayout from "./../layouts/main-layout"
import Hero from "./../components/hero"

// markup
const AboutPage = () => {
  return (
    <MainLayout>
      <Hero title="about" modifier="-red" />
    </MainLayout>
  )
}

export default AboutPage
