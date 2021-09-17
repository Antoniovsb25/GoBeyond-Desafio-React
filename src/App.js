import React from 'react'
import './App.css'
import Hero from './components/sections/Hero'
import Navigation from './components/sections/Navigation'
import Tabs from './components/sections/Tabs'

const App = () => {
    return (
        <main className="main">
            <Hero />
            <Navigation />
            <Tabs />
        </main>
    )
}

export default App
