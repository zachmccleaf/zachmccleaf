import * as React from "react"

// markup
const Hero = (props) => {
  return (
    <div className={`c-hero ${props.modifier}`}>
        <div className="container">
            <h1>{props.title}</h1>
        </div>
    </div>
  )
}

export default Hero
