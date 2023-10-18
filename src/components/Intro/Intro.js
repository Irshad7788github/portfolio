import React from 'react'
import './Intro.css';
import btnImg from '../../Assest/Hire.jpg.jpeg'
import bg from '../../Assest/Image.jpg.jpeg'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
    <div className='introContent'>
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Irshad alam</span><br />Website Designer </span>
        <p className="introPara">I am a skilled and passionate web designer in creating <br /> visually appealing and user-friendly websites.</p>
        <Link><button className='btn'><img src={btnImg} alt="Here Me" className='btnImg' />Hire Me</button></Link>

      
    </div>
    <img src={bg} alt="portfolio" className="bg" />
    </section>
  )
}

export default Intro
