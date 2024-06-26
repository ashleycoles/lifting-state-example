import LoginButton from "../LoginButton"

function Footer({loggedInProp, toggleLoginProp}) {
    return (
        <footer>
            <p>Copyright 2024</p>
            <LoginButton loggedInProp={loggedInProp} toggleLoginProp={toggleLoginProp}/>
        </footer>
    )
}

export default Footer