import React, { useState } from 'react'
import Posts from './Posts'
import '../sections/Posts'

import './Tabs.css'

const Tabs = () => {
    const [ button, setButton ] = useState(0)
    const buttonHandler0 = () => {
        setButton(0)
    }
    const buttonHandler1 = () => {
        setButton(1)
    }
    const buttonHandler2 = () => {
        setButton(2)
    }
    return (
        <>
            <nav className="tabs">
                <button className="tab" onClick={buttonHandler0}>{`📺 Animes favoritos`}</button>
                <button className="tab" onClick={buttonHandler1}>{`🎮 Jogos Favoritos`}</button>
                <button className="tab" onClick={buttonHandler2}>{`📚 Línguas Favoritas`}</button>
            </nav>
            <Posts number={button}/>
        </>
        
    )
}

export default Tabs
