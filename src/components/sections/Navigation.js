import React from 'react'
import './Navigation.css'

const Navigation = () => {
    return (
        <section className="navigation">
            <div className="float">
                <a className="link" target="_blank" rel="noreferrer" href="https://wa.me/5521997768800">
                    <img src="https://img-premium.flaticon.com/png/512/739/premium/739247.png?token=exp=1631931429~hmac=8e1ea55d09a2c5afe022a5e72e860f4d" alt="whatsapp" className="icon" />
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
