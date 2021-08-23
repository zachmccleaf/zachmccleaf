import * as React from "react"
import { Link } from "gatsby"
import { FaGithub } from 'react-icons/fa';


// markup
const Header = () => {
  return (
    <header className="c-header">
        <div className="container">
            <Link to="/" className="c-header__logo">
                z.
            </Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link target="_blank" to="https://github.com/zachmccleaf"><FaGithub/></Link>
            </nav>
        </div>
    </header>
  )
}

export default Header
