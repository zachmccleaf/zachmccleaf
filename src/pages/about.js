import * as React from "react"
import MainLayout from "./../layouts/main-layout"
import Hero from "./../components/hero"
import Card from "./../components/card"
import { graphql } from 'gatsby'

// markup
const AboutPage = ({data}) => {
  const image = data.allImageSharp.nodes[0].fluid.src;
  return (
    <MainLayout>
      <Hero title="about" modifier="-red" />
      <div className="container">
        <Card>
          <img className="-profile-image" src={image} alt="Zach McCleaf" />
          <div className="-pad">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut maximus leo. Nullam condimentum dolor urna, non tempus augue euismod ac. Curabitur lacus massa, aliquet nec orci ut, viverra ornare quam. Sed imperdiet purus quam, eget posuere ex suscipit ut. Sed cursus, elit sed accumsan accumsan, augue eros fermentum mauris, in dignissim orci tortor sed mi. Mauris dignissim erat eget mi hendrerit, et sodales nibh hendrerit. Nunc sit amet hendrerit velit, aliquam consectetur urna.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut maximus leo. Nullam condimentum dolor urna, non tempus augue euismod ac. Curabitur lacus massa, aliquet nec orci ut, viverra ornare quam. Sed imperdiet purus quam, eget posuere ex suscipit ut. Sed cursus, elit sed accumsan accumsan, augue eros fermentum mauris, in dignissim orci tortor sed mi. Mauris dignissim erat eget mi hendrerit, et sodales nibh hendrerit. Nunc sit amet hendrerit velit, aliquam consectetur urna.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut maximus leo. Nullam condimentum dolor urna, non tempus augue euismod ac. Curabitur lacus massa, aliquet nec orci ut, viverra ornare quam. Sed imperdiet purus quam, eget posuere ex suscipit ut. Sed cursus, elit sed accumsan accumsan, augue eros fermentum mauris, in dignissim orci tortor sed mi. Mauris dignissim erat eget mi hendrerit, et sodales nibh hendrerit. Nunc sit amet hendrerit velit, aliquam consectetur urna.</p>
          </div>
        </Card>
      </div>
    </MainLayout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    allImageSharp(filter: {fluid: {originalName: {eq: "me.jpg"}}}) {
      nodes {
        fluid {
          src
        }
      }
    }
  }
`
