import React from "react"

function Header(){
    return(
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light justify-content-center ali">
            <img
                src="./img/memeface.png"
                alt="Problem?"
                height="80px"
                className="mx-3 my-2"
            />
            <h2 className="navtext">
            Meme Generator
            </h2>
        </nav>
        </header>

    )
}

export default Header
