import React from "react"
import trollface from "../images/trollface.png"

export default function Header() {
    return (
        <header className="header">
            <img src={trollface} className="header--image" alt="trollface"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}