import React, { useRef, useState } from 'react'
import './contact.css'
import SF from '../../assets/studio-figura.png'
import IBPM from '../../assets/IBPM.png'
import OSKAR from '../../assets/OSKAR.png'
import LaboPrint from '../../assets/LaboPrint.png'
import LinkedinIcon from '../../assets/linkedin.png'
import GithubIcon from '../../assets/github.png'
import emailjs from '@emailjs/browser';


const Contact = () => {


    const form = useRef();
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        const nameInput = form.current.querySelector('.name');
        const emailINput = form.current.querySelector('.email');
        const msgTextArea = form.current.querySelector('.msg');

        if(nameInput.value.trim() === '' || emailINput.value.trim() === '' || msgTextArea.value.trim() === '') {
            setErrorMessage('Please fill out all fields.');
            return;
        }

        setErrorMessage('');
    
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
          .then((result) => {
            //   console.log(result.text);
              e.target.reset();
              alert('Email sent!')
          }, (error) => {
              console.log(error.text);
          });
      };
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
            <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name' />
                <input type="email" className="email" placeholder='Your Email' name='your_email' />
                <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value= 'Send' className="submitBtn">Submit</button>
                {errorMessage && <p className='error'>{errorMessage}</p>}
                <div className="links">
                   <a href='https://www.linkedin.com/in/arkadiusz-piaszczy%C5%84ski-a2b81019b/' target='_blank' rel="noreferrer"><img src={LinkedinIcon} alt="Linkedin Icon" className="link" /></a>
                   <a href="https://github.com/Hurado" target='_blank' rel="noreferrer"> <img src={GithubIcon} alt="Github Icon" className="link" /></a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact