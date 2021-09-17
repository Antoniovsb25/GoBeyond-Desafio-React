import React from 'react'
import './App.css'
import Hero from './components/sections/Hero'
import Navigation from './components/sections/Navigation'
import Tabs from './components/sections/Tabs'
import Posts from './components/sections/Posts'

const App = () => {
    return (
        <main className="main">
            <Hero />
            <Navigation />
            <Tabs />
            <Posts />
        </main>
    )
}

export default App
