import React from 'react'
import './contact.css'
import SF from '../../assets/studio-figura.png'
import IBPM from '../../assets/IBPM.png'
import OSKAR from '../../assets/OSKAR.png'
import LaboPrint from '../../assets/LaboPrint.png'


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
           
        </div>
    </section>
  )
}

export default Contact