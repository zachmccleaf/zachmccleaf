import * as React from "react"

// markup
const Footer = () => {
  return (
    <footer className="c-footer">
        <div className="container">
            &copy; Zach McCleaf {new Date().getFullYear()}
        </div>
    </footer>
  )
}

export default Footer
