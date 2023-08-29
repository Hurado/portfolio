import React from 'react'
import './intro.css'
import bg from '../../assets/profile.png'
import btnImg from '../../assets/hireme.png'
import {Link } from 'react-scroll'


const Intro = () => {
  return (
    <section className="intro">
      <div className="introContent">

      <span className="hello">Hello,</span>
      <span className="introText">I'm <span className="introName">Arek</span> <br/> Website Designer</span>
      <p className="introPara">I am a skilled web designer with experience in creating visually <br />appealing and user friendly websites. </p>
      <Link><button className="btn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}><img src={btnImg} alt="Hire" className='btnImg' />Let's meet! </button></Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default Intro