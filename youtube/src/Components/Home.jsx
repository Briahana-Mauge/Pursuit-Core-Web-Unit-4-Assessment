import React from 'react'
const Home = () => {
    return (
        <>
        <form>
            <input type = 'text' placeholder = 'Search for a video'></input>
            <input type = 'submit' value = 'Search'></input>
        </form>

        <p>No Search Results. Search for videos above! </p>
        </>
    )
}

export default Home;