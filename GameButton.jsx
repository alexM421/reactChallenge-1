import React from "react"

export default function GameButton ({ gameRunning, setGameRunning }) {
    const toggle = () => {
        setGameRunning(prevState => !prevState)
    }
    
    const buttonName = gameRunning ? "Play":"Pause"

    return(
        <button 

        className="video-game-button"
        onClick={toggle}
        >
        {buttonName}
        </button>
    )
}