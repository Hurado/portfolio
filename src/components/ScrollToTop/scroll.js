import React ,{ useEffect, useState }from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
import './scrollToTop.css'


const Scroll = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, [])
    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
  return (
    <button className='btn-scrollTop' style={{display: isVisible ? 'block':'none'}} onClick={goTop}><FaArrowCircleUp/></button>
  )
}

export default Scroll