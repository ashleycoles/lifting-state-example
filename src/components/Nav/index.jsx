import LoginButton from "../LoginButton"

function Nav({loggedInProp}) {
    return (
        <nav>
            <h1>Lifting state!</h1>
            <LoginButton loggedInProp={loggedInProp} />
        </nav>
    )
}

export default Nav