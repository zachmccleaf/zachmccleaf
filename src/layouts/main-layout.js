import * as React from "react"
import Header from "./../components/header"
import Footer from "./../components/footer"
import "./../styles/app.scss"

// markup
const MainLayout = (props) => {
  return (
    <div className="c-main-layout">
        <Header/>
        <main>
            {props.children}
        </main>
        <Footer/>
    </div>
   
  )
}

export default MainLayout
