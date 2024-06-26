import { useState } from "react"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Nav from "./components/Nav"

function App() {
  const [loggedIn, setLoggedIn] = useState(true)

  return (
    <>
      <Nav loggedInProp={loggedIn}/>
      <Content />
      <Footer loggedInProp={loggedIn}/>
    </>
  )
}

export default App
