import React from 'react'
import './Navigation.css'

const Navigation = () => {
    return (
        <section className="navigation">
            <div className="float">
                <a className="link" target="_blank" rel="noreferrer" href="#">
                    <img src="https://gobeyond.vercel.app/static/media/whatsapp.4a8733ff.svg" alt="whatsapp" className="icon" />
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
