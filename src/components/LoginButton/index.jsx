function LoginButton({loggedInProp}) {
    return (
        <button>{loggedInProp === true ? 'Logout' : 'Login'}</button>
    )
}

export default LoginButton