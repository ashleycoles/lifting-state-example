import { useState } from "react"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Nav from "./components/Nav"

function App() {
    const [loggedIn, setLoggedIn] = useState(true)

    function toggleLogin() {
        setLoggedIn(!loggedIn)
    }

    return (
        <>
            <Nav loggedInProp={loggedIn} toggleLoginProp={toggleLogin} />
            <Content loggedInProp={loggedIn} />
            <Footer loggedInProp={loggedIn} toggleLoginProp={toggleLogin} />
        </>
    )
}

export default App
