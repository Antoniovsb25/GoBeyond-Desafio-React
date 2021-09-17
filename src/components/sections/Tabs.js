import React from 'react'
import Button from '../buttons/Button'
import './Tabs.css'

const Tabs = () => {
    return (
        <nav className="tabs">
            <Button text='Documentações'/>
            <Button text='Configurações'/>
            <Button text='Desafio Final'/>
        </nav>
    )
}

export default Tabs
