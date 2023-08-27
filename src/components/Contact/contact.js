import React from 'react'
import './contact.css'
import SF from '../../assets/studio-figura.png'
import IBPM from '../../assets/IBPM.png'
import OSKAR from '../../assets/OSKAR.png'
import LaboPrint from '../../assets/LaboPrint.png'
import LinkedinIcon from '../../assets/linkedin.png'
import GithubIcon from '../../assets/Github1.png'



const Contact = () => {
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
                I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with includes
            </p>
            <div className="clientImgs">
                <img src={SF} alt="studio Figura International" className="clientImg" />
                <img src={IBPM} alt="IBPM" className="clientImg" />
                <img src={OSKAR} alt="OSKAR" className="clientImg" />
                <img src={LaboPrint} alt="LaboPrint" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form action="" className="contactForm">
                <input type="text" className="name" placeholder='Your Name' />
                <input type="email" className="email" placeholder='Your Email' />
                <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value= 'Send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={LinkedinIcon} alt="Linkedin Icon" className="link" />
                    <img src={GithubIcon} alt="Github Icon" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact