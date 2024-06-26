import LoginButton from "../LoginButton"

function Nav({loggedInProp, toggleLoginProp}) {
    return (
        <nav>
            <h1>Lifting state!</h1>
            <LoginButton loggedInProp={loggedInProp} toggleLoginProp={toggleLoginProp} />
        </nav>
    )
}

export default Nav