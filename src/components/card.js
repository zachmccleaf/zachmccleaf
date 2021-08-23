import * as React from "react"

// markup
const Card = (props) => {
    return (
        <div className="c-card">
            {props.children}
        </div>
    )
}

export default Card
