import React from 'react'
import './Navigation.css'

const Navigation = () => {
    return (
        <section className="navigation">
            <div className="float">
                <a className="link" href="#">
                    <img src="https://gobeyond.vercel.app/static/media/whatsapp.4a8733ff.svg" alt="whatsapp" className="icon" />
                    <span className="text">Whatsapp</span>
                </a>
                <a className="link" href="#">
                    <img src="https://gobeyond.vercel.app/static/media/phone.4f06bac0.svg" alt="Phone" className="icon" />
                    <span className="text">Phone</span>
                </a>
                <a className="link" href="#">
                    <img src="https://gobeyond.vercel.app/static/media/email.7be6e02d.svg" alt="Email" className="icon" />
                    <span className="text">Email</span>
                </a>
            </div>
        </section>
    )
}

export default Navigation
