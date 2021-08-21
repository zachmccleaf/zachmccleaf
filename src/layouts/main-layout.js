import * as React from "react"

// markup
const MainLayout = (props) => {
  return (
    <main>
      <h1>main layout</h1>
      {props.children}
    </main>
  )
}

export default MainLayout
