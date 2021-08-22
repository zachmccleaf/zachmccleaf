import * as React from "react"
import MainLayout from "./../layouts/main-layout"
import Hero from "./../components/hero"

// markup
const IndexPage = () => {
  return (
    <MainLayout>
      <Hero title="Hello, I'm Zach" modifier="-green" />
    </MainLayout>
  )
}

export default IndexPage
