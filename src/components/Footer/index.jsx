import LoginButton from "../LoginButton"

function Footer({loggedInProp}) {
    return (
        <footer>
            <p>Copyright 2024</p>
            <LoginButton loggedInProp={loggedInProp} />
        </footer>
    )
}

export default Footer