function Content({loggedInProp}) {
    return (
        <main>
            <h1>{loggedInProp ? 'Welcome user' : 'Welcome guest'}</h1>
            <p>Some content</p>
        </main>
    )
}

export default Content