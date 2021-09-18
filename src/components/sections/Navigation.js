import React from 'react'
import './Navigation.css'

const Navigation = () => {
    return (
        <section className="navigation">
            <div className="float">
                <a className="link" target="_blank" rel="noreferrer" href="https://wa.me/5521997768800">
                    <img src="https://s2.qwant.com/thumbr/0x380/5/2/d606a88fb3f8b9d0710944e580ab9298d1b8f779476c13800eb9a48ccc3df0/512px-WhatsApp_font_awesome.svg.png?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F90%2FWhatsApp_font_awesome.svg%2F512px-WhatsApp_font_awesome.svg.png&q=0&b=1&p=0&a=0" alt="whatsapp" className="icon" />
                    <span className="text">Whatsapp</span>
                </a>
                <a className="link" target="_blank" rel="noreferrer" href="https://github.com/Antoniovsb25">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" className="icon" />
                    <span className="text">GitHub</span>
                </a>
                <a className="link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/antonio-victor-basilio/">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="linkedin" className="icon" />
                    <span className="text">Linkedin</span>
                </a>
            </div>
        </section>
    )
}

export default Navigation
