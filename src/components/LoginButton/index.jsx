function LoginButton({loggedInProp, toggleLoginProp}) {
    return (
        <button onClick={toggleLoginProp}>{loggedInProp === true ? 'Logout' : 'Login'}</button>
    )
}

export default LoginButton